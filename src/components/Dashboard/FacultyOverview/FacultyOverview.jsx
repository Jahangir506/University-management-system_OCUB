import { faculties } from "../../../lib/faculties/Facultydb";
import FacultyCards from "./FacultyCards";

const FacultyOverview = () => {

  console.log(faculties.length);

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {faculties.slice(0,5).map((faculty) => (
          <FacultyCards faculty={faculty} key={faculty.id} />
        ))}
      </div>
    </>
  );
};
export default FacultyOverview;
