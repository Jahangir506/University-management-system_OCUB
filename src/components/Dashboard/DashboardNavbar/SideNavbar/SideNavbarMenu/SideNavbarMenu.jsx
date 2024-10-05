import Link from "next/link";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { RiRegisteredFill } from "react-icons/ri";

const SideNavbarMenu = () => {
  return (
    <>
      <div>
        <h4 className="text-bold text-sm lg:text-base min-w-max max-w-full mt-8 text-center lg:text-start opacity-75">
          Menu
        </h4>
        <ul className="mt-4 space-y-4">
          <li className="flex gap-2 justify-center lg:justify-start items-center">
            {" "}
            <Link className="flex items-center gap-2" href="/studentPortal">
              <PiStudent size={20} />
              <span className="hidden lg:block">Student Portal</span>
            </Link>
          </li>

          <li className="flex gap-2 justify-center lg:justify-start items-center">
            {" "}
            <Link className="flex items-center gap-2" href="/facultyOverview">
              <HiUserGroup size={20} />
              <span className="hidden lg:block">Faculty Overview</span>
            </Link>
          </li>

          <li className="flex gap-2 justify-center lg:justify-start items-center">
            {" "}
            <Link className="flex items-center gap-2" href="enrollCourses">
              <RiRegisteredFill size={20} />
              <span className="hidden lg:block">Enroll in Courses</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:mt-[350px]">
        <ul className="mt-4 space-y-4">
          <li className="flex gap-2 justify-center lg:justify-start items-center">
            <Link className="flex items-center gap-2" href="/login">
              <IoMdLogOut size={21} />
              <span className="hidden lg:block">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideNavbarMenu;
