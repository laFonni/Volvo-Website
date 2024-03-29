import "react-multi-carousel/lib/styles.css";
import CarouselOf4AndLess from "../components/CaruselComponent/CarouselOf4AndLess";
import CarouselOfAbove4 from "../components/CaruselComponent/CarouselOfAbove4";
import { useState } from "react";
import CarouselOf1 from "../components/CaruselComponent/CarouselOf1";
import CarouselOfAllCars from "../components/CaruselComponent/CarouselOfAllCars";
import { AllCars } from "../constants";

const routes = {
  AllCars: <CarouselOfAllCars activeClassOfCar={"AllCars"} />,
  SUV: <CarouselOfAbove4 activeClassOfCar={"SUV"} />,
  Crossover: <CarouselOf1 activeClassOfCar={"Crossover"} />,
  Sedan: <CarouselOf4AndLess activeClassOfCar={"Sedan"} />,
  Kombi: <CarouselOf4AndLess activeClassOfCar={"Kombi"} />,
};

const CaruselOfCars = () => {
  const [activeCarousel, setActiveCarousel] = useState("AllCars");

  return (
    <div className="flex flex-col pt-24 ">
      <div className="flex justify-center text-4xl font-semibold pb-10 ">
        Wszystie modele Recharge
      </div>

      <div className="flex flex-row text-gray-600 gap-5 justify-center pb-16 ">
        {Object.keys(routes).map((key) => (
          <button
            className={`${
              activeCarousel == key
                ? "underline-offset-[6px] underline decoration-blue-800 decoration-2 text-black"
                : "text-gray-600 hover:text-black duration-100 ease-in-out"
            } tracking-wide`}
            onClick={() => setActiveCarousel(key)}
            key={key}
          >
            {key == "AllCars"
              ? "Wszystkie (10)"
              : `${key} (${
                  AllCars.filter((car) => car.classOfCar === key).length
                })`}
          </button>
        ))}
      </div>
      {routes[activeCarousel]}
      <div className="flex items-center justify-center pt-2">
        <p className="max-w-[1150px] text-center text-xs  text-gray-500 pb-20  ">
          * Jest to cena orientacyjna, która może ulec zmianie przed dostawą
          samochodu z powodu czynników od nas niezależnych, takich jak wzrost
          podatków, opłat, stóp procentowych itp. Poinformujemy Cię o wszelkich
          zmianach i będziesz mieć możliwość anulowania zamówienia w dowolnym
          momencie przed dostawą.
        </p>
      </div>
    </div>
  );
};

export default CaruselOfCars;
