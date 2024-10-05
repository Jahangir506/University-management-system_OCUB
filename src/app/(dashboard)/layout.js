import Navbar from "@/components/Dashboard/DashboardNavbar/MainNavbar/Navbar";
import SideNavbarLogo from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarLogo/SideNavbarLogo";
import SideNavbarMenu from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarMenu/SideNavbarMenu";

const layout = ({children}) => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-[14%] text-white text-opacity-90 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#009688] min-w-min p-4 shadow-inner">
          <SideNavbarLogo />
          <SideNavbarMenu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-[#D0E7D2]">
          <div className="w-full p-1.5 shadow-sm">
            <Navbar />
          </div>
          <div className="mt-6 p-1 lg:p-4">{children}</div>
        </div>
      </div>
    </>
  );
};
export default layout;
