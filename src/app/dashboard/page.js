import CourseRegistration from "@/pages/Dashboard/CourseRegistration/CourseRegistration";
import FacultyManagement from "@/pages/Dashboard/FacultyManagement/FacultyManagement";
import StudentDashboard from "@/pages/Dashboard/StudentDashboard/StudentDashboard";

const dashboardPage = () => {
  return (
    <>
      <div>
        <CourseRegistration />
        <FacultyManagement />
        <StudentDashboard />
      </div>
    </>
  );
};
export default dashboardPage;
