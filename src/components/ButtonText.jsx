import { useState } from "react";

const ButtonText = (label, cardContent, isCardOpen) => {
  const [onClicked, setOnClicked] = useState(false);

  const toggleCard = () => {
    setOnClicked((prev) => !prev);
  };

  return (
    <button onClick={toggleCard}>
      {label}
      {onClicked && (isCardOpen ? cardContent : null)}
    </button>
  );
};

export default ButtonText;
