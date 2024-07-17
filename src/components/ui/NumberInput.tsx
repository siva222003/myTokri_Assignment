import { MdOutlinePhoneIphone } from "react-icons/md";

interface NumberInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ handleChange }: NumberInputProps) => {
  return (
    <div className=" relative inputAnimation">
      <label
        htmlFor="mobile-number"
        className="text-sm absolute -top-2 bg-white left-8 px-2 text-blue-700"
      >
        Mobile number
      </label>
      <div className="flex items-center  border-blue-700 rounded-lg border-2 p-4">
        <MdOutlinePhoneIphone className=" text-xl font-normal text-black" />
        <span className="ml-1 text-[17px] font-normal">964</span>
        <input
          type="text"
          id="mobile-number"
          onChange={(e) => handleChange(e)}
          className="flex-1 ml-4 outline-none text-xl font-normal placeholder:text-gray-500 placeholder:text-4xl"
          placeholder="_ _ _ _ _ _ _ _ _ _ "
        />
      </div>
    </div>
  );
};

export default NumberInput;
