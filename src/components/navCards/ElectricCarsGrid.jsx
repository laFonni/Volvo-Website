import { electricCars } from "../../constants";
import { CarBox } from "./carBox";

export const ElectricCarsGrid = () => {
  return (
    <div className=" mr-2 ml-2 w-[600px]">
      <div className=" mb-4 ml-4 w-full h-full">
        {/* Crossover */}
        <div className="text-lg font-semibold mt-4 mb-4">Crossover</div>
        <div className="grid grid-cols-3 gap-5">
          {electricCars.map(
            (car) =>
              car.class === "Crossover" && (
                <CarBox
                  model={car.model}
                  price={car.price}
                  image={car.image}
                  key={car.label}
                />
              )
          )}
        </div>
        {/* SUV */}
        <div className="text-lg font-semibold mt-4 mb-4">Suv &#62;</div>
        <div className="grid grid-cols-3 gap-5 mb-4">
          {electricCars.map(
            (car) =>
              car.class === "SUV" && (
                <CarBox
                  model={car.model}
                  price={car.price}
                  image={car.image}
                  key={car.label}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
