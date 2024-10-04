"use client";

import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import InputField from "./InputField";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-4/6 ml-0 lg:-ml-40">
          <InputField />
        </div>
        <div className="flex items-center space-x-4 max-w-max w-1/6 px-4">
          <div>
            <IoMdNotificationsOutline size={25} />
          </div>
          <div className="flex flex-col">
            <h5>John Doe</h5>
            <span className="text-[10px] text-right">Admin</span>
          </div>
          <Image
            className="rounded-full w-11"
            src="https://i.ibb.co.com/xqk4px3/logo.png"
            alt="profile"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
