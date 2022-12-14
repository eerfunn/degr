import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SugesstedAccounts from "./SugesstedAccounts";
import Footer from "./Footer";

const normalLink =
  "flex items-center gap-3 p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#FFFFFF] rounded hover:bg-gray-700";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;
  return (
    <div className="bg-black">
      <div
        className="block xl:hidden py-2 m-2 ml-4 mt-3 text-xl text-white cursor-pointer"
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10  p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          <Discover />
          <SugesstedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
