import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { seller_register } from "../../store/Reducers/authReducer";
const Register = () => {
  const overRideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };
  const dispatch = useDispatch()
  const {loader} = useSelector(state=>state.auth)
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) =>{
    e.preventDefault()
    dispatch(seller_register(state))
    console.log(state)
  }
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome too Register</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                onChange={inputHandle}
                value={state.name}
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I agree to T&C</label>
            </div>
            <button
              disabled={loader}
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color={"#ffff"} cssOverride={overRideStyle} />
              ) : (
                "Sign-up"
              )}
            </button>
            <div className="flex items-center justify-center mb-3 gap-3">
              <p>
                Already have an accout ?{" "}
                <Link className="font-bold" to="/login">
                  Sign-in
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3 gap-4">
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
              <span className="pb-1">Or</span>
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
            </div>
            <div className="flex justify-center items-center mb-3 gap-3">
              <div className="flex w-[135px] h-[35px] bg-orange-600 rounded-md shadow-lg hover:shadow-orange-600/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="flex w-[135px] h-[35px] bg-blue-600 rounded-md shadow-lg hover:shadow-blue-600/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
