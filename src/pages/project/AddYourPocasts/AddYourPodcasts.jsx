import React, { useEffect, useState } from "react";
import Card from "./Card";
import Youtube from "../../../assets/ProjectPage/Youtube.svg";
import RSS from "../../../assets/ProjectPage/RSSFeed.svg";
import Upload from "../../../assets/ProjectPage/Upload.svg";
import DefaultBanner from "./DefaultBanner";
import TranscriptList from "./TranscriptList";
import Modal from "../../../components/Modal";
import TextBox from "../../../components/TextBox";
import axios from "axios";
import { useParams } from "react-router";
import useStore from "../../../hooks/useStrore";

function AddYourPodcasts() {
  const [filesData, setFilesData] = useState([]);
  const { projectId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useStore();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    console.log("Name: ", name);
    console.log("Transcript: ", transcript);
    axios
      .post(`${process.env.REACT_APP_API_URL}/file`, {
        name,
        content: transcript,
        projectId,
        owner: user._id,
      })
      .then((response) => {
        console.log(response.data);
        setFilesData([...filesData, response.data._id]);
        handleCloseModal();
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/project/file/${projectId}`)
      .then((response) => {
        console.log(response.data);
        setFilesData(response.data);
      });
  }, []);

  return (
    <div className=" flex flex-col w-full px-16  p-6">
      <h1 className="text-3xl font-bold mb-6 text-left">Add Podcast</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <Card
          title="RSS Feed"
          icon={RSS}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from RSS Feed");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
        <Card
          title="Youtube Video"
          icon={Youtube}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from Youtube video");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
        <Card
          title="Upload Files"
          icon={Upload}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from Files");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
      </div>
      {filesData.length === 0 ? (
        <DefaultBanner />
      ) : (
        <TranscriptList filesList={filesData} />
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title}>
        <div className="flex flex-col gap-6">
          <TextBox label={"Name"} isEditable={true} setText={setName}></TextBox>
          <div className="flex flex-col">
            <label className="text-left text-base font-medium text-gray-500">
              Transcript
            </label>
            <textarea
              className="mt-1 p-2 border border-gray-300 rounded-md  sm:text-sm focus:outline-none min-h-28"
              onChange={(e) => setTranscript(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-700 hover:bg-gray-500 duration-200 text-white py-2 min-w-20 px-4 rounded-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddYourPodcasts;
