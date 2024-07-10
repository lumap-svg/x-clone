import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/">
        <FaXTwitter className="h-16 w-16 hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-full" />
      </Link>
      <Link
        href={"/"}
        className=" cursor-pointer flex gap-2 items-end w-fit p-3 hover:bg-gray-100 rounded-full transition-all duration-200"
      >
        <HiHome className="h-7 w-7  " />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 cursor-pointer text-white rounded-full font-semibold  hover:brightness-95 w-48 h-9 transition-all duration-200 hidden xl:inline">
        Sign in
      </button>
    </div>
  );
};

export default Sidebar;
