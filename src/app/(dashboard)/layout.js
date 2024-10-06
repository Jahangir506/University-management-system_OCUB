import Navbar from "@/components/Dashboard/DashboardNavbar/MainNavbar/Navbar";
import SideNavbarLogo from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarLogo/SideNavbarLogo";
import SideNavbarMenu from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarMenu/SideNavbarMenu";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[14%] text-white text-opacity-90 md:w-[8%] lg:w-[16%] xl:w-[16%] bg-[#009688] min-w-min p-4 shadow-lg">
          <SideNavbarLogo />
          <SideNavbarMenu />
        </div>
        <div className="w-full md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-[#D0E7D2]">
          <div className="p-0.5 shadow-sm">
            <Navbar />
          </div>
          <div className="w-full rounded">{children}</div>
        </div>
      </div>
    </>
  );
};
export default layout;
