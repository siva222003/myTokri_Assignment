import { IoMenu } from "react-icons/io5";
import { decodeHTML } from "../../helpers";

interface HeaderProps {
  headerInfo: string;
}

const Header = ({ headerInfo }: HeaderProps) => {
  return (
    <div className=" flex justify-between">
      <IoMenu className=" text-gray-700" size={35} />
      <div>
        <select className="text-xs  bg-transparent border border-black">
          <option value="EN" className=" bg-blue-600 text-white">
            EN
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
