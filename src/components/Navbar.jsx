import { VolvoSpreadWord } from "../assets";
import { navCards } from "../constants";
import ButtonText from "./ButtonText";
import { useState } from "react";

const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardIndex) => {
    if (activeCard === cardIndex) {
      // Jeśli kliknięto na otwartą kartę, zamknij ją
      setActiveCard(null);
    } else {
      // Jeśli kliknięto na inną kartę, otwórz ją
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
        {/* Fix - after clicking on 1st, 2sd, 1st card will not open again */}
        <ul className="flex flex-1 flex-row w-full justify-center h-6 items-center">
          {navCards.map((card) => (
            
            <li
              className="cursor-pointer mr-8 font-semibold leading-3 tracking-wider text-gray-600"
              key={card.label}
              onClick={() => toggleCard(card.label)}
            >
              {ButtonText(card.label, <card.card />, activeCard === card.label)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
