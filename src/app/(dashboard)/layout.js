import SidebarMenu from "@/components/Dashboard/SidebarMenu/SidebarMenu";
import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/logo.png";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-teal-200 p-4">
          <Link
            href="/"
            className="flex justify-center items-center lg:justify-start gap-1"
          >
            <Image src={logo} alt="Logo" width={40} height={40} />
            <span className="hidden lg:block">
              OCUB
            </span>
          </Link>
          <SidebarMenu/>
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-gray-200">
          R
        </div>
      </div>
    </>
  );
};
export default layout;
