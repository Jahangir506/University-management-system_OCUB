import Image from "next/image";

const FacultyCards = ({faculty}) => {
    const {name, designation, subject} = faculty;
  return (
    <>
      <div className="card rounded-sm card-compact  w-full shadow">
        <figure>
          <Image
            alt="profile Images"
            src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"
            width={230}
            height={230}
          />
        </figure>
        <div className="rounded-md p-2">
          <h2 className="font-bold text-base">{name}</h2>
          <h2 className="font-medium">{designation}</h2>
          <h2 className="">{subject}</h2>
          <div className="card-actions justify-start">
            <button className="btn btn-xs btn-primary">More Details</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyCards;
