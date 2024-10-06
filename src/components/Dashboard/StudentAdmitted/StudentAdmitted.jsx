const StudentAdmitted = () => {
  return (
    <>
      <div>
        <div className="overflow-x-auto border border-slate-300 mt-3">
          <table className="table my-1 table-xs">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Gender</th>
                <th>Field for Study</th>
                <th>Income Level</th>
                <th>Special Needs</th>
                <th>Country</th>
                <th>Admission Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Male</td>
                <td>Computer Science and Engineering (CSE)</td>
                <td>Low</td>
                <td>No</td>
                <td>Bangladesh</td>
                <td className="text-green-600">Admitted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentAdmitted;
