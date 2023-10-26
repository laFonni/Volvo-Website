const ButtonText = (label, cardContent, isCardOpen) => {
  return (
    <button>
      {label}
      {isCardOpen && cardContent}
    </button>
  );
};

export default ButtonText;
