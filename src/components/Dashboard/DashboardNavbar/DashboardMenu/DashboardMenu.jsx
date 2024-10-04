import Link from "next/link";
import { HiUserGroup } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { RiRegisteredFill } from "react-icons/ri";


const DashboardMenu = () => {
  return (
    <>
      <div>
        <h4 className="text-bold lg:text-base min-w-max max-w-full mt-8 text-center lg:text-start opacity-75">Menu</h4>
        <ul className="mt-4 space-y-4">
          <li className="flex gap-2 justify-center lg:justify-start items-center"> <Link className="flex items-center gap-2" href="/student"><PiStudent size={20}/><span className="hidden lg:block">Student</span></Link></li>

          <li className="flex gap-2 justify-center lg:justify-start items-center"> <Link className="flex items-center gap-2" href="/student"><HiUserGroup size={20}/><span className="hidden lg:block">Faculty</span></Link></li>

          <li className="flex gap-2 justify-center lg:justify-start items-center"> <Link className="flex items-center gap-2" href="/student"><RiRegisteredFill size={20}/><span className="hidden lg:block">Registration</span></Link></li>
        </ul>
      </div>
    </>
  );
};
export default DashboardMenu;
