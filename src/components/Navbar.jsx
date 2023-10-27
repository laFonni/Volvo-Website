import { VolvoSpreadWord } from "../assets";
import { navCards } from "../constants";
import ButtonText from "./ButtonText";
import { useState } from "react";
import OurCarsCard from "./navCards/OurCarsCard";
import PurchaseCard from "./navCards/PurchaseCard";
import ForOwnersCard from "./navCards/ForOwnersCard";
import AboutUsCard from "./navCards/AboutUsCard";

const routes = {
  "Nasze samochody": <OurCarsCard />,
  Zakup: <PurchaseCard />,
  "Dla właścicieli": <ForOwnersCard />,
  "O nas": <AboutUsCard />,
};

const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  // logic for toggling cards
  const toggleCard = (label) => {
    console.log(label, activeCard);
    if (activeCard === label) {
      setActiveCard(null);
    } else {
      setActiveCard(label);
    }
  };

  return (
    <header className="px-2 bg-gray-50 w-full h-[64px] relative">
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
        <ul className="flex flex-1 flex-row w-full justify-center h-10 items-center">
          {navCards.map((card) => (
            <li
              className="mr-8"
              key={card.label}
              onClick={() => toggleCard(card.label)}
            >
              {ButtonText(card.label, activeCard === card.label)}
            </li>
          ))}
        </ul>
        {routes[activeCard]}
      </nav>
    </header>
  );
};

export default Navbar;
