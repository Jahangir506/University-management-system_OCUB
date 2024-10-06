import CalenderBD from "@/pages/Dashboard/RightSideContent/CalenderBD";
import UpcomingEvent from "@/pages/Dashboard/RightSideContent/UpcomingEvent";
import StudentDashboard from "@/pages/Dashboard/StudentDashboard/StudentDashboard";

const StudentPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2.5 justify-between  px-3 mt-4">
        <div className="w-full  h-screen rounded p-2 bg-base-100 shadow-lg">
          <StudentDashboard />
        </div>
        <div>
          <div className="shadow-inner rounded border grow  h-screen ">
            <div>
              <CalenderBD />
              <div>
                <h4 className="font-bold mt-3">Upcoming Event</h4>
                <div>
                  <UpcomingEvent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentPage;
