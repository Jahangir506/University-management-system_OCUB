import Navbar from "@/components/Dashboard/DashboardNavbar/MainNavbar/Navbar";
import SideNavbarLogo from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarLogo/SideNavbarLogo";
import SideNavbarMenu from "@/components/Dashboard/DashboardNavbar/SideNavbar/SideNavbarMenu/SideNavbarMenu";
import CalenderBD from "@/pages/Dashboard/RightSideContent/CalenderBD";
import UpcomingEvent from "@/pages/Dashboard/RightSideContent/UpcomingEvent";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-[14%] text-white text-opacity-90 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#009688] min-w-min p-4 shadow-lg">
          <SideNavbarLogo />
          <SideNavbarMenu />
        </div>
        <div className="w-full md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-[#D0E7D2]">
          <div className="p-0.5 shadow-sm">
            <Navbar />
          </div>
          <div className="flex flex-col lg:flex-row gap-2.5 justify-between  px-3 mt-4">
            <div className="bg-base-100 shadow-lg w-full  h-screen rounded p-2">
              {children}
            </div>
            <div className="shadow-inner rounded border grow  h-screen ">
              <div>
                <div>
                  <CalenderBD />
                  <div>
                    <h4 className="font-bold mt-3">Upcoming Event</h4>
                    <div>
                      <UpcomingEvent/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default layout;
