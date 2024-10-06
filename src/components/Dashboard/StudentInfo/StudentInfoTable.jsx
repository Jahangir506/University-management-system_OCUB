"use client";

const StudentInfoTable = ({ infos }) => {
  const {
    student_id,
    name,
    gender,
    course,
    credits,
    grades,
    country,
    moreDetails,
  } = infos;
  console.log(infos);
  return (
    <>
      <tr>
        <th>{student_id}</th>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{course}</td>
        <td>{credits}</td>
        <td>{grades}</td>
        <td>{country}</td>
        <td>
          <button
            className="btn btn-xs bg-[#009688] text-white  hover:bg-[#03524a]"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Details
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-xs bg-[#009688] text-white  hover:bg-[#03524a]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </td>
      </tr>
    </>
  );
};
export default StudentInfoTable;
