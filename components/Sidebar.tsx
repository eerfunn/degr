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
  "flex items-center gap-3 hover:bg-white p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#FFFFFF] rounded";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [hoverElement, setHoverElement] = useState(false);
  const userProfile = false;
  return (
    <div className="bg-black">
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl text-white cursor-pointer"
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div
                className={normalLink}
                onMouseOver={() => {
                  setHoverElement((prev) => !prev);
                }}
                onMouseOut={() => {
                  setHoverElement((prev) => !prev);
                }}
              >
                <p
                  className={hoverElement ? "text-black text-2xl" : "text-2xl"}
                >
                  <AiFillHome />
                </p>
                <span
                  className={
                    hoverElement
                      ? "text-xl hidden xl:block text-black"
                      : "text-xl hidden xl:block"
                  }
                >
                  For You
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Log in to lik and comment on videos
              </p>
              <div className="pr-4 ">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="bg-black text-lg text-[#FFFFFF] border-[1px] border-[#FFFFFF] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-black hover:bg-[#FFFFFF] cursor-pointer"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log In
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )}
          <Discover />
          <SugesstedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
