"use client";

import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import InputField from "./InputField";

const Navbar = () => {
  return (
    <>
      <div className="navbar gap-3">
        <div className="flex-1">
          <InputField />
        </div>
        <div className="flex-start space-x-4">
          <div>
            <div className="indicator">
              <span className="indicator-item badge h-[0.5em] pl-[0.2em] pr-[0.2em] bg-red-600 mr-[0.365em] mt-[0.1em]"></span>
              <IoMdNotificationsOutline size={24} />
            </div>
          </div>
          <div className="avatar">
            <div className="rounded-full">
              <Image
                src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"
                alt="avatar"
                width={33}
                height={33}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
