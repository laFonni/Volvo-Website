const ButtonText = (label, activeCard) => {
  return (

    <button className={`hover:underline-offset-[24px] font-semibold leading-3 tracking-wider text-gray-600 hover:underline hover:text-gray-800 ${activeCard === label ? "text-gray-800" : null }`}>
      {label}
    </button>

  );
};

export default ButtonText;
