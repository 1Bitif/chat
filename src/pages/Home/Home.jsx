import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Chat } from "../../components/Chat/Chat";

export const Home = () => {
  const [open, setOpen] = useState(false);

  // const sideBar = () => {
  //   setOpen(!open);
  // };
  console.log(open)
  return (
    <>
      <div className="flex overflow-hidden justify-center items-center w-full h-screen bg-blue-50">
        <div className="flex shadow-xl bg-white overflow-hidden lg:w-[60%] w-[100%] lg:h-[80%] h-full rounded-xl">
          {/* Sidebar for both large and small screens */}
          <div
            className={`lg:w-1/3 w-full lg:border-r ${
              open ? "hidden sm:block lg:block" : "block sm:block lg:block"
            }`}
          >
            <Sidebar setOpen={setOpen} />
          </div>
          {/* Chat for both large and small screens */}
          <div
            className={`lg:w-2/3 w-full ${
              open ? "block sm:block lg:block" : "hidden sm:hidden lg:block"
            }`}
          >
            <Chat setOpen={setOpen} />
          </div>
        </div>
      </div>
    </>
  );
};
