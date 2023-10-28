const ButtonText = (label, activeCard) => {
  return (

    <button className={` ${activeCard ? "text-gray-950 underline-offset-[24px] underline" : "text-gray-500" } hover:underline-offset-[24px] font-semibold leading-3 tracking-wider hover:underline hover:text-gray-900 `}>
      {label}
    </button>

  );
};

export default ButtonText;
