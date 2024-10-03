import CourseRegistration from "@/pages/Dashboard/CourseRegistration/CourseRegistration";
import FacultyManagement from "@/pages/Dashboard/FacultyManagement/FacultyManagement";
import StudentDashboard from "@/pages/Dashboard/StudentDashboard/StudentDashboard";

const page = () => {
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
export default page;
