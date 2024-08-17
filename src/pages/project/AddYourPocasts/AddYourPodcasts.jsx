import React, { useState } from "react";
import Card from "./Card";
import Youtube from "../../../assets/ProjectPage/Youtube.svg";
import RSS from "../../../assets/ProjectPage/RSSFeed.svg";
import Upload from "../../../assets/ProjectPage/Upload.svg";
import DefaultBanner from "./DefaultBanner";
import TranscriptList from "./TranscriptList";
import Modal from "../../../components/Modal";
import TextBox from "../../../components/TextBox";

function AddYourPodcasts() {
  const filesData = [
    {
      id: 1,
      name: "THE SIDEPOD S2 EPISODE 15",
      uploadDate: "25 Oct 23 | 09:04",
    },
    {
      id: 2,
      name: "THE SIDEPOD S2 EPISODE 17",
      uploadDate: "27 Oct 23 | 11:08",
    },
    {
      id: 3,
      name: "THE SIDEPOD S2 EPISODE 20",
      uploadDate: "31 Oct 23 | 20:28",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [title, setTitle] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    // API call
    setIsModalOpen(false);
  };

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
        <TranscriptList files={filesData} />
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title}>
        <div className="flex flex-col gap-6">
          <TextBox label={"Name"} isEditable={true} setText={setName}></TextBox>
          <TextBox
            label={"Transcript"}
            isEditable={true}
            setText={setTranscript}
          ></TextBox>
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
