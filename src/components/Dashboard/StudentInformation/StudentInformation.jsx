import { studentInformation } from "../../../lib/StudentInfo/StudentInfoDB";

const StudentInformation = () => {
  console.log(studentInformation)
  return (
    <>
      <div>
        <div className="overflow-x-auto border border-slate-300 mt-3">
          <table className="table my-1 table-xs">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Gender</th>
                <th>Course Name</th>
                <th>Course Credits</th>
                <th>Grades</th>
                <th>Country</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Male</td>
                <td>Computer Science and Engineering (CSE)</td>
                <td>153</td>
                <td>4.0</td>
                <td>Bangladesh</td>
                <td className="text-green-600">
                  <button className="btn btn-xs bg-[#009688] text-white  hover:bg-[#03524a]">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentInformation;
