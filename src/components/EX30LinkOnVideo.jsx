const EX30LinkOnVideo = () => {
  return (
    <div className="felx flex-col justify-center items-center">
      <h3 className="flex justify-center font-semibold text-base text-white pb-4">
        Mała, wielka rzecz
      </h3>
      <h1 className="flex justify-center font-bold text-3xl text-white pb-4">
        EX30
      </h1>
      <div className="flex flex-row gap-5 ">
        <button className="border-[1px] border-white bg-white hover:bg-white/60 duration-300 rounded-md px-8  font-semibold  py-2.5 tracking-wide" >
          Dowiedz się więcej
        </button>
        <button className="border-[1px] border-white rounded-md px-8 font-semibold text-white py-2.5 hover:bg-white hover:text-black duration-200 tracking-wide">
          Konfiguruj
        </button>
      </div>

    </div>
)};

export default EX30LinkOnVideo;
