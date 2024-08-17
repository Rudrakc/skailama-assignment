import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";

function TranscriptEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { fileId } = useParams();

  const [text, setText] = useState(
    "Loading transcript... Please wait a moment."
  );

  const handleEditClick = () => {
    try {
      axios.put(`${process.env.REACT_APP_API_URL}/file/${fileId}`, {
        content: text,
      });
      console.log("File updated successfully");
    } catch (error) {
      console.error("Error fetching files: ", error);
    }
    setIsEditing(!isEditing);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    try {
      const fetchFile = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/file/${fileId}`
        );
        console.log("response.data", response.data);
        setText(response.data.content);
      };
      fetchFile();
    } catch (error) {
      console.error("Error fetching files: ", error);
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[90%] h-[90%] p-4">
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <button className="pl-2 pr-4 scale-125" onClick={handleGoBack}>
              <FaArrowLeft />
            </button>
            <div className="text-2xl font-medium tracking-wider">
              Edit Transcript
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className=" min-w-36  text-red-600 border border-red-600 font-semibold rounded px-10 py-3 hover:bg-red-100 "
              >
                Cancel
              </button>
            )}
            <button
              onClick={isEditing ? handleEditClick : () => setIsEditing(true)}
              className=" min-w-36  text-white bg-gray-800 hover:bg-gray-900 font-semibold rounded px-10 py-3"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <div className="border h-full border-gray-200  bg-white rounded-lg shadow-sm">
          <div className="text-purple-600 font-semibold text-lg pt-8 px-10 text-left">
            Speaker
          </div>
          <textarea
            className={`w-full h-[90%] p-4 px-10 border-none focus:outline-none resize-none overflow-y-scroll bg-white`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
      </div>
    </div>
  );
}

export default TranscriptEditor;
