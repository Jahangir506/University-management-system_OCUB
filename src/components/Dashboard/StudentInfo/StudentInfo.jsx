import { studentInfo } from "../../../lib/StudentInfo/StudentInfoDB";
import StudentInfoTable from "./StudentInfoTable";

const StudentInformation = () => {


  return (
    <>
      <div>
        <div className="overflow-x-auto border border-slate-300 mt-3">
          <table className="table my-1 table-xs">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Course Name</th>
                <th>Course Credits</th>
                <th>Grades</th>
                <th>Country</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
             {
              studentInfo.map((infos)=> (
                <StudentInfoTable infos={infos} key={infos.student_id}/>
              ))
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentInformation;
