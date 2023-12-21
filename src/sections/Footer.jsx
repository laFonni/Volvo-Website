import CardList from "../components/navCards/CardList";
import { FooterInfo, SocialMedia } from "../constants";
import mapPoint from "../assets/map-point.svg";
import mapPointGray from "../assets/map-point-gray.svg";
import { useState } from "react";


const Footer = () => {
  let headers = Array.from(new Set(FooterInfo.map((element) => element.head)));

  const [isHovered, setIsHovered] = useState(false);

  const FooterButtons = [
    "Cookies",
    "Informacje prawne",
    "Polityka prywatności",
    "Informacje o podmiocie gospodarczym",
  ];

  const ScrollUp = () => {
    window.scrollTo(
      {
        top:0, 
        behavior: "smooth"
      })
  }

  return (
    <section className="flex flex-col justify-center bg-gray-50">
      <button className="flex flex-row justify-center gap-2 mt-8 mb-12 font-semibold" onClick={ScrollUp}>
        <span className=" hover:text-gray-600 tracking-wide text-sm">
          Wróć do góry
        </span>
        <p className="text-gray-600">{"^"}</p>
      </button>
      <div className="flex flex-row gap-10  justify-center mb-8">
        {headers.map((element) => (
          <CardList list={FooterInfo} header={element} key={element} />
        ))}
      </div>
      <div className={`flex gap-1 justify-center mb-4`}>
        <button
          className="flex flex-row gap-1 justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? mapPointGray : mapPoint}
            alt="map-point"
            width={28}
            className="mt-2"
          />
          <p className={`${isHovered ? "text-gray-500" : "text-black"}`}>
            Poland
          </p>
        </button>
      </div>
      <ul className="flex flex-row gap-9 justify-center mb-10">
        {SocialMedia.map((element) => (
          <button key={element.key}>
            <img src={element.image} alt={element.label} width={20} />
          </button>
        ))}
      </ul>
      <ul className="flex flex-row justify-center  gap-6 mb-5">
        {FooterButtons.map((element) => (
          <button
            key={element}
            className="text-gray-800 hover:text-blue-800 text-xs"
          >
            {element}
          </button>
        ))}
      </ul>
      <p className="flex justify-center text-xs text-gray-500 mb-8">
        Copyright © 2023 Volvo Car Corporation (lub firmy stowarzyszone bądź
        licencjodawcy).
      </p>
    </section>
  );
};

export default Footer;
