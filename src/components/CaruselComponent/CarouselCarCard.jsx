import propTypes from "prop-types";
import { useState } from "react";

const CarouselCarCard = ({ classOfCar, model, price, type, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[360px] w-[290px] bg-white relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` ${isHovered ? "text-sky-700" : "text-gray-500"} `}
      >
        <h3 className="pb-1 font-bold text-[12px] ">{classOfCar}</h3>
        <h1 className="pb-2 text-[16px]">
          {" "}
          <spam
            className={`${
              isHovered ? "text-sky-700" : "text-black"
            } font-semibold`}
          >
            {model}
          </spam>{" "}
          {type}
        </h1>
        <p className="pb-4 text-xs">
          Już od{" "}
          <span className={`${isHovered ? "text-sky-700" : "text-black"}`}>
            {price} zł
          </span>
        </p>
        <div className="w-290 h-290 overflow-hidden ">
          <img
            src={image}
            alt={model}
            width={290}
            height={220}
            className={`${
              isHovered
                ? "scale-[1.4] duration-500 ease-in-out"
                : "scale-[1.3] duration-500 ease-in-out"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between px-6 pt-12 font-bold text-sky-800 text-lg  ">
        <button className="hover:underline decoration-1">Więcej &#62;</button>
        <button className="hover:underline decoration-1">Wybierz &#62;</button>
      </div>
    </div>
  );
};

CarouselCarCard.propTypes = {
  classOfCar: propTypes.string,
  model: propTypes.string,
  price: propTypes.string,
  type: propTypes.string,
  image: propTypes.string,
};

export default CarouselCarCard;
