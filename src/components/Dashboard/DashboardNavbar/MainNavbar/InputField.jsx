import { IoIosSearch } from "react-icons/io";

export default function InputField() {
  return (
    <div className="flex relative w-full px-4">
      <input className="block w-full max-w-md mx-auto rounded-sm border border-[#009688] border-opacity-75 bg-white bg-opacity-75 py-1.5 pl-2 pr-8 text-sm/6" />
      <div className="absolute right-[25px] md:right-[25px]  lg:right-[95px] xl:right-[195px] 2xl:right-[212px] top-2.5">
        <IoIosSearch className="opacity-75" size={19}/>
      </div>
    </div>
  );
}
