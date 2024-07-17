const Steps = () => {
  return (
    <>
      <div className=" mt-4 flex flex-col w-fit items-center">
        <img src="https://click.afflink.mobi/assets_ua/subpage.png" alt="" className="w-8 h-10" />
        <p className="text-xs text-gray-600 font-medium">STEP 1/2</p>
      </div>

      <div className=" flex gap-x-2 mt-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className=" w-full h-2 bg-gray-400 ">
            {index == 0 && <div className="w-2 h-full bg-blue-700"></div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
