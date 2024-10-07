const FacultyList = ({faculty}) => {
    const {facultyList, } = faculty;

  return (
    <>
      <div className="max-w-80 w-full">
        <div className="card w-full  text-white rounded">
          <div className="card-body space-y-1 gap-0 p-2">
            <div className="bg-white border-2 border-[#009688] shadow-md rounded p-1 text-black opacity-90">
              <h4 className="font-bold text-sm text-center">{facultyList}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyList;
