"use client"

import { Image } from "@nextui-org/react";
import Link from "next/link";

const DashboardLogo = () => {
  return (
    <>
      <Link
        href="/"
        className="flex justify-center items-center lg:justify-start gap-1"
      >
        <Image src="https://i.ibb.co.com/HDnfLh7/logo.png" alt="Logo" width={50} height={50} />
        <span className="hidden lg:block">OCUB</span>
      </Link>
    </>
  );
};
export default DashboardLogo;
