import Link from "next/link";
import { HiUserGroup } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { RiRegisteredFill } from "react-icons/ri";

const SideNavbarMenu = () => {
  return (
    <>
      <div>
        <h4 className="text-bold text-sm lg:text-base min-w-max max-w-full mt-8 text-center lg:text-start opacity-75">
          Menu
        </h4>
        <ul className="mt-5 items-center lg:items-start space-y-5 menu p-0 text-start">
          <li>
            <Link className="flex p-0 items-center gap-3" href="/studentDashboard">
              <PiStudent size={20} />
              <span className="hidden lg:block">Student Dashboard</span>
            </Link>
          </li>

          <li>
            <Link className="flex p-0 items-center gap-3" href="/facultyManagement">
              <HiUserGroup size={20} />
              <span className="hidden lg:block">Faculty Management</span>
            </Link>
          </li>

          <li>
            <Link className="flex p-0 items-center gap-3" href="enrollCourses">
              <RiRegisteredFill size={20} />
              <span className="hidden lg:block">Enroll in Courses</span>
            </Link>
          </li>
        </ul>
      </div>
{/* 
      <div className="mt-[350px]">
        <ul className="mt-4 space-y-4">
          <li className="flex gap-2 justify-center lg:justify-start items-center">
            <Link className="flex items-center gap-2" href="/login">
              <IoMdLogOut size={21} />
              <span className="hidden lg:block">Logout</span>
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
};
export default SideNavbarMenu;
