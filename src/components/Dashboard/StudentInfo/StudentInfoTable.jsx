const StudentInfoTable = ({infos}) => {
    const {student_id, name, gender, course, credits, grades, country, moreDetails, } = infos;
    console.log(infos)
    return(
        <>
              <tr>
                <th>{student_id}</th>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{course}</td>
                <td>{credits}</td>
                <td>{grades}</td>
                <td>{country}</td>
                <td className="text-green-600">
                  <button className="btn btn-xs bg-[#009688] text-white  hover:bg-[#03524a]">Details</button>
                </td>
              </tr>
        </>
    )}
export default StudentInfoTable;