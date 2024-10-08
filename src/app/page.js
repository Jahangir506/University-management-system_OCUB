import Navbar from "@/components/Dashboard/DashboardNavbar/MainNavbar/Navbar";
import SideNavbarLogo from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarLogo/SideNavbarLogo";
import SideNavbarMenu from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarMenu/SideNavbarMenu";

const page = () => {
  return(
    <>
       <div className="flex h-screen">
        <div className="w-[14%] text-white text-opacity-90 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#009688] min-w-min p-4 shadow-lg">
          <SideNavbarLogo />
          <SideNavbarMenu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-[#D0E7D2] p-6">
          <div className="max-w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  )}
export default page;