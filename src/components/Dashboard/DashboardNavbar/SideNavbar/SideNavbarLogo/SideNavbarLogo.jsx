"use client";

import Image from "next/image";
import Link from "next/link";

const SideNavbarLogo = () => {
  return (
    <>
      <Link href="/studentPortal">
        <button className="hover:bg-white/5 hover:skew-x-2 rounded-lg px-5 flex justify-center items-center lg:justify-start gap-1">
          <Image
            src="https://i.ibb.co.com/HDnfLh7/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="hidden lg:block">OCUB</span>
        </button>
      </Link>
    </>
  );
};
export default SideNavbarLogo;
