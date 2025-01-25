import { FaRegTrashAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiLogin, CiLogout, CiSignpostDuo1, CiUser } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { TbCategory2 } from "react-icons/tb";
import { MdBubbleChart } from "react-icons/md";
export function getIcon(icon: string) {
  switch (icon) {
    case "home":
      return <GoHome className="size-7" />;
    case "posts":
      return <CiSignpostDuo1 className="size-7" />;
    case "create":
      return <IoCreateOutline className="size-7" />;
    case "favorite":
      return <IoIosHeart className="size-7" />;
    case "categories":
      return <TbCategory2 className="size-7" />;
    case "login":
      return <CiLogin className="size-7" />;
    case "logout":
      return <CiLogout className="size-7" />;
    case "profile":
      return <CiUser className="size-7" />;
    case "trash":
      return <FaRegTrashAlt className="size-6" />;
    default:
      return <MdBubbleChart className="size-7" />;
  }
}
