"use client";

import Image from "next/image";
import Link from "next/link";

const SideNavbarLogo = () => {
  return (
    <>
      <Link href="/dashboard">
        <div className="flex justify-center items-center lg:justify-start gap-1">
          <Image
            src="https://i.ibb.co.com/HDnfLh7/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="hidden lg:block">OCUB</span>
        </div>
      </Link>
    </>
  );
};
export default SideNavbarLogo;
