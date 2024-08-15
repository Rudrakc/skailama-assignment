import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function TranscriptEditor() {
  const [isEditing, setIsEditing] = useState(false);

  const [text, setText] =
    useState(`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[90%] h-[90%] p-4">
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <button className="pl-2 pr-4 scale-125">
              <FaArrowLeft />
            </button>
            <div className="text-2xl font-medium tracking-wider">
              Edit Transcript
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            {isEditing && (
              <button
                onClick={handleEditClick}
                className=" min-w-36  text-red-600 border border-red-600 font-semibold rounded px-10 py-3 hover:bg-red-100 "
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleEditClick}
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
