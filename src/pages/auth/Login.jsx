import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Waves from "../../assets/login_waves.svg";
import LogoWithText from "../../assets/QuesLogo.svg";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import axios from "axios";
import useStore from "../../hooks/useStrore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useStore();

  const handleLogin = () => {
    console.log("Clicked");
    if (!email || !password) {
      console.log("Please enter both email and password");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        userName: email,
        password: password,
      })
      .then((res) => {
        console.log("Login successful:", res.data);
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        const user = res.data.user;
        setUser(user);
      })
      .catch((err) => {
        console.log("Login error:", err.message);
      });
  };

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
          <TextBox
            type={"email"}
            placeholder={"Email Address"}
            text={email}
            isEditable={true}
            setText={setEmail}
            className={
              "w-full px-4 py-4 mt-6 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            }
          />
          <TextBox
            type={"password"}
            placeholder={"Password"}
            text={password}
            isEditable={true}
            setText={setPassword}
            className={
              "w-full px-4 py-4 mt-6 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            }
          />

          {/* Remember me and Forgot password */}
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a className="text-blue-500">Forgot password?</a>
          </div>

          {/* Login Button */}
          <Button onClick={handleLogin} className={"w-full"}>
            Login
          </Button>

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
            <a className="text-blue-500">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
