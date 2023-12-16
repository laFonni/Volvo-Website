import "react-multi-carousel/lib/styles.css";
import CarouselOf4AndLess from "../components/CarouselOf4AndLess";
import CarouselOfAbove4 from "../components/CarouselOfAbove4";
import { useState } from "react";
import CarouselOf1 from "../components/CarouselOf1";
import CarouselOfAllCars from "../components/CarouselOfAllCars";
import { AllCars } from "../constants";

const routes = {
  AllCars: <CarouselOfAllCars activeClassOfCar={'AllCars'}/>,
  SUV: <CarouselOfAbove4 activeClassOfCar={'SUV'}/>,
  Crossover: <CarouselOf1 activeClassOfCar={'Crossover'}/>,
  Sedan: <CarouselOf4AndLess activeClassOfCar={'Sedan'}/>,
  Kombi: <CarouselOf4AndLess activeClassOfCar={'Kombi'}/>
};

const CaruselOfCars = () => {
  const [activeCarousel, setActiveCarousel] = useState("AllCars");

  return (
    <div className="flex flex-col pt-24   relative">
      <div className="flex justify-center text-4xl font-semibold pb-10">
        Wszystie modele Recharge
      </div>

      <div className="flex flex-row text-gray-600 gap-5 justify-center pb-16 ">
        {Object.keys(routes).map((key) => (
          <button className={`${activeCarousel == key ? 'underline-offset-[6px] underline decoration-blue-800 decoration-2 text-black' : 'text-gray-600 hover:text-black duration-100 ease-in-out'} tracking-wide`} onClick={() => setActiveCarousel(key)} key={key}>
            {key == 'AllCars' ? 'Wszystkie (10)' : `${key} (${AllCars.filter((car) => car.classOfCar === key).length})`}
          </button>
        ))}
      </div>

      {routes[activeCarousel]}
    </div>
  );
};

export default CaruselOfCars;
