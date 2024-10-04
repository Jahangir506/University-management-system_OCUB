import DashboardLogo from "@/components/Dashboard/DashboardNavbar/DashboardLogo/DashboardLogo";
import DashboardMenu from "@/components/Dashboard/DashboardNavbar/DashboardMenu/DashboardMenu";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen text-white text-opacity-95 shadow-lg">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#265073]  min-w-min p-4">
          <DashboardLogo/>
          <DashboardMenu/>
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%%] xl:w-[86%] bg-[#F1FADA]">
          R
        </div>
      </div>
    </>
  );
};
export default layout;
