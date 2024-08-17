import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../../components/Button";
import TextBox from "../../../components/TextBox";
import useStore from "../../../hooks/useStrore";
import { useNavigate } from "react-router";


function AccountSetting() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useStore();
  const { username, email } = user;
  const [userNameState, setUsername] = useState(username);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  
  return (
    <div className="h-full px-16">
      <div className="">
        <div className="flex items-center mb-10">
          <button className="pl-2 pr-4 scale-125" onClick={handleGoBack}>
            <FaArrowLeft />
          </button>
          <h1 className="text-2xl font-medium tracking-wider">
            Account Settings
          </h1>
        </div>
        <div className="flex items-center space-x-6 mb-16">
          <img
            className="w-40 h-40"
            src="https://avatar.iran.liara.run/public/?username=Scott"
            alt="Profile"
          />
          <div className="flex justify-center items-end  gap-8 pl-4">
            <TextBox label="Username" text={userNameState} isEditable={isEditing} setText={setUsername} />
            <TextBox label="Email" text={email} isEditable={false} />
            <button className="bg-gray-700 hover:bg-gray-500 duration-200 text-white py-2 min-w-20 px-4 rounded-lg"  onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button>
          </div>
        </div>
        <h2 className="text-2xl text-left font-semibold text-gray-800 mb-4 mt">
          Subscriptions
        </h2>
        <div className="bg-gradient-to-l from-purple-200 to-white p-4 px-8 rounded-lg flex justify-between items-center border border-purple-200">
          <span className="text-purple-700 font-medium text-xl">
            Oops! You don’t have any active plans.{" "}
            <span className="font-bold">Upgrade now!</span>
          </span>
          <Button className={"mt-0"}>Upgrade</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
