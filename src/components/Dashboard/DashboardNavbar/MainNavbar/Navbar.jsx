"use client";

import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import InputField from "./InputField";

const Navbar = () => {
  return (
    <>
      <div className="navbar lg:px-4 gap-3">
        <div className="flex-1">
          <InputField />
        </div>
        <div className="flex-none space-x-4">
          <div>
            <div className="indicator">
              <span className="indicator-item badge h-[0.5em] pl-[0.2em] pr-[0.2em] bg-red-600 mr-[0.365em] mt-[0.1em]"></span>
              <IoMdNotificationsOutline size={23} />
            </div>
          </div>
          <div className="avatar w-full">
            <div className="rounded-full max-w-10 w-full">
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
