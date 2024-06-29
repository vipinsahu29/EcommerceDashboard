import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="fixed top-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all">
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500 justify-center items-center cursor-pointer"
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="hidden md:block">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#423d78] focus:border-indigo-500 overflow-hidden"
            name="search"
            placeholder="search"
            type="text"
          />
        </div>

        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-md font-bold">Vipin Sahu</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>
              <img className="w-[45px] h-[45px] rounded-full" src="http://localhost:3000/images/admin.png" alt="profile_image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
