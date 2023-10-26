import { VolvoSpreadWord } from "../assets";
import { navCards } from "../constants";
import ButtonText from "./ButtonText";
import { useState } from "react";

const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardIndex) => {
    if (activeCard === cardIndex) {
      setActiveCard(null);
    } else {
      setActiveCard(cardIndex);
    }
  };

  return (
    <header className="px-2 bg-white w-full h-[64px] relative">
      <nav className="flex h-[64px] items-center">
        <a href="/" className="absolute ">
          <img
            src={VolvoSpreadWord}
            alt="Volvo Spread Word"
            width={120}
            height={64}
            className="cursor-pointer ml-1"
          />
        </a>
        <ul className="flex flex-1 flex-row w-full justify-center h-6 items-center">
          {navCards.map((card, index) => (
            <li
              className="cursor-pointer mr-8 font-semibold leading-3 tracking-wider text-gray-600"
              key={card.index}
              onClick={() => toggleCard(index)}
            >
              {ButtonText(card.label, <card.card />, activeCard === index)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
