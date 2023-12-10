import "react-multi-carousel/lib/styles.css";
import CarouselOf4AndLess from "../components/CarouselOf4AndLess";
import CarouselOfAbove4 from "../components/CarouselOfAbove4";
import { useState } from "react";
import CarouselOf1 from "../components/CarouselOf1";

const routes = {
  AllCars: <CarouselOfAbove4 activeClassOfCar={'AllCars'}/>,
  SUV: <CarouselOfAbove4 activeClassOfCar={'SUV'}/>,
  Crossover: <CarouselOf1 activeClassOfCar={'Crossover'}/>,
  Sedan: <CarouselOf4AndLess activeClassOfCar={'Sedan'}/>,
  Kombi: <CarouselOf4AndLess activeClassOfCar={'Kombi'}/>
};

const CaruselOfCars = () => {
  const [activeCarousel, setActiveCarousel] = useState("AllCars");

  return (
    <div className="flex flex-col pt-20 bg-red-100  relative">
      <div className="flex justify-center text-4xl font-semibold pb-6">
        Wszystie modele Recharge
      </div>

      <div className="flex flex-row text-gray-600 gap-5 justify-center pb-6 ">
        {Object.keys(routes).map((key) => (
          <button onClick={() => setActiveCarousel(key)} key={key}>
            {key}
          </button>
        ))}
      </div>

      {routes[activeCarousel]}
    </div>
  );
};

export default CaruselOfCars;
