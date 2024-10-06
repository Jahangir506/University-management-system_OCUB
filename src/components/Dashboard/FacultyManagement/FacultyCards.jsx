"use client"

import Image from "next/image";

const FacultyCards = ({ faculty }) => {
  const { name, designation, subject } = faculty;
  return (
    <>
      <div className="card rounded-sm card-compact">
        <figure>
          <Image
            alt="profile Images"
            src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"
            width={500}
            height={500}
            className=" rounded-md"
          />
        </figure>
        <div className="rounded-md mt-1 space-y-1">
          <h2 className="text-lg font-bold">{name}</h2>
          <span className="flex items-center">
            <h2 className="underline text-sm font-bold mr-1">Designation:</h2>
            <span className="text-sm font-bold">{designation}</span>
          </span>
          <span className="flex items-center">
            <h2 className="underline text-sm font-bold mr-1">Subject:</h2>
            <span className="text-sm">{subject}</span>
          </span>
          <div className="card-actions justify-start">
            {/* <button className="btn bg-[#026f64] text-white  hover:bg-[#038f81] rounded-sm btn-xs btn-primary">
              More Details
            </button> */}
            <button
              className="btn bg-[#026f64] text-white  hover:bg-[#038f81] rounded-sm btn-xs btn-primary"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              More Details
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
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyCards;
