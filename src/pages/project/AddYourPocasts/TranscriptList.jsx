import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TranscriptList = ({ filesList }) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const filesArray = await Promise.all(
          filesList.map(async (fileId) => {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/file/${fileId}`
            );
            console.log("response.data", response.data);
            return response.data;
          })
        );
        setFiles(filesArray);
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };
    fetchFiles();
  }, [filesList]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Your Files</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 rounded-2xl">
            <th className="px-4  py-4  text-sm font-medium text-gray-700 rounded-s-xl">
              No.
            </th>
            <th className="text-sm font-medium text-gray-700">Name</th>
            <th className="text-sm font-medium text-gray-700">
              Upload Date & Time
            </th>
            <th className="text-sm font-medium text-gray-700">Status</th>
            <th className="text-sm font-medium text-gray-700 rounded-e-xl">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {files.map((file, index) => (
            <tr key={file.id} className="border-b ">
              <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
              <td className="text-sm text-gray-700">{file.name}</td>
              <td className="text-sm text-gray-700">{file.creationDate}</td>
              <td className="px-4  py-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-200 text-purple-700">
                  Done
                </span>
              </td>
              <td className="px-4  py-4">
                <Link to={`file/${file._id}`}>
                  <button className="text-blue-500 hover:underline mr-4">
                    View
                  </button>
                </Link>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TranscriptList;
