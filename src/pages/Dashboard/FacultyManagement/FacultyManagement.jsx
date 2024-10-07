import FacultyCards from "@/components/Dashboard/FacultyManagement/FacultyCards";
import FacultyList from "@/components/Dashboard/FacultyManagement/FacultyList";
import { faculties } from "../../../lib/faculties/Facultydb";

const FacultyManagement = () => {
  return (
    <>
      <div className="flex justify-between gap-1 mt-2">
        <div className="flex-col max-w-80 w-full flex">
          <h3 className="text-center text-md font-bold">- Faculty list -</h3>
          {faculties.map((faculty) => (
            <FacultyList key={faculty._id} faculty={faculty} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 px-1">
          {faculties.map((faculty) => (
            <FacultyCards key={faculty._id} faculty={faculty} />
          ))}
        </div>
      </div>
    </>
  );
};
export default FacultyManagement;
