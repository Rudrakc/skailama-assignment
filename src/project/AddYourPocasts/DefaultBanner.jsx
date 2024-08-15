import React from "react";
import CloudUpload from "../../assets/ProjectPage/CloudUpload.svg";
import { ReactSVG } from "react-svg";

function DefaultBanner() {
  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-md py-16">
      <div className="flex flex-col items-center gap-4">
        <ReactSVG src={CloudUpload} className="" />
        <p className="text-xl">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-gray-500 ">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
        </p>
        <button className="mb-2 px-8 py-2 border  border-purple-600 text-purple-600 hover:text-white rounded-2xl hover:bg-purple-700">
          Select File
        </button>
      </div>
    </div>
  );
}

export default DefaultBanner;
