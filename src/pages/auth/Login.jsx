import React from "react";
import { ReactSVG } from "react-svg";
import Waves from "../../assets/login_waves.svg";
import LogoWithText from "../../assets/QuesLogo.svg";
import Logo from "../../assets/logo.svg";
import TextField from "./TextField";
import Button from "../../components/Button";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-2/3 h-full contain-content  bg-gradient-to-bl from-[#C854FF] to-[#3A0B63] relative flex">
        <ReactSVG src={Waves} className="absolute w-full h-full top-0 left-0" />
        <div className="text-white z-10 mt-24 ml-20">
          <ReactSVG src={LogoWithText} />
          <div>
            <div className="text-8xl text-left tracking-wide font-light font-sans  leading-[96px]  mt-20 mb-10">
              Your podcast <br />
              will no longer <br />
              be just a hobby.
            </div>
            <div className="text-3xl text-left">
              Supercharge Your Distribution <br />
              using our AI assistant!
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full bg-[#f5f6fa] flex flex-col justify-center items-center">
        <div className=" flex flex-col items-center">
          <ReactSVG src={Logo} />
          <div className="mt-4 text-4xl text-[#7E22CE] font-extralight tracking-widest">
            Welcome to <br />
            <div className="font-bold"> Ques.AI</div>
          </div>
        </div>
        <div className="w-[70%] mt-8">
          <TextField placeholder={"Email Address"} />
          <TextField placeholder={"Password"} />
          {/* Remember me and Forgot password */}
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a className="text-blue-500">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <Button className={"w-full"}>Login</Button>

          {/* Divider */}
          <div className="flex items-center justify-center mt-6">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button className="w-full py-3 mt-6 border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-100">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />
            Continue with Google
          </button>

          {/* Create Account */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a className="text-blue-500">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
