"use client";

import Image from "next/image";
import Link from "next/link";
import InputField from "./InputField";


const Navbar = () => {
  return (
    <>
     <div className="navbar">
  <div className="flex-1">
    <InputField/>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
          <span className="badge badge-sm bg-[#009688] text-white  indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body justify-between">
          <h4 className="text-lg font-bold">Name</h4>
          <h4 className="text-info">View</h4>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            alt="profile Images"
            src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"  width={34} height={34} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge badge-sm bg-red-600 text-white">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><Link href="/login">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </>
  );
};
export default Navbar;
