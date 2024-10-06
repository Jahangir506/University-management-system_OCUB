import FacultyCards from "../../../components/Dashboard/FacultyManagement/FacultyCards";
import { faculties } from "../../../lib/faculties/Facultydb";

const FacultyManagement = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {faculties.slice(0, 5).map((faculty) => (
          <FacultyCards faculty={faculty} key={faculty.id} />
        ))}
      </div>
    </>
  );
};
export default FacultyManagement;
