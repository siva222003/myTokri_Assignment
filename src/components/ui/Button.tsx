interface SubmitButtonProps {
  handleSubmit: () => void;
  error : string | null;
  phone : string;
}

const SubmitButton = ({ handleSubmit,error,phone }: SubmitButtonProps) => {
  return (
    <div className="mt-12">
      <p className=" text-red-500 text-sm font-medium leading-4 mb-6 -mt-9">{error ? error : ""}</p>
      <button
        onClick={handleSubmit}
        className={` font-bold w-full py-4 rounded-lg  text-2xl ${
          phone.length == 10
            ? "text-white bg-gradient-to-r from-blue-900 to-blue-600"
            : "bg-gray-300 text-gray-500"
        }`}
        disabled={phone.length != 10}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default SubmitButton;
