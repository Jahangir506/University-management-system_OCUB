import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { RiRegisteredFill } from "react-icons/ri";


const SidebarMenu = () => {
  return (
    <>
      <div>
        <h4 className="text-bold mt-8 opacity-75">Menu</h4>
        <ul className="mt-4 space-y-4">
          <li> <Link href="/home" className="flex gap-2 items-center "><FaHome/>Home</Link></li>
          <li className="flex gap-2 items-center "> <Link className="flex gap-2 items-center " href="/student"><PiStudent/> Student</Link></li>
          <li className="flex gap-2 items-center "><Link className="flex gap-2 items-center " href="/faculty"><HiUserGroup/> Faculty</Link></li>
          <li className="flex gap-2 items-center "><Link className="flex gap-2 items-center " href="/registration"><RiRegisteredFill/> Registration</Link></li>
        </ul>

      </div>
    </>
  );
};
export default SidebarMenu;
