import { hybridCars } from "../../constants";
import { CarBox } from "./carBox";

export const HybridCarsGrid = () => {
  return (
    <div className=" mr-2 ml-2 w-[600px] ">
      {/* Bug with scroll the last boxes in grid are hidden under the website scroll is to low*/}
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* SUV */}
        <div className="text-lg font-semibold mt-4 mb-4">SUV &#62;</div>
        <div className="grid grid-cols-3 max-gap-5">
          {hybridCars.map(
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
        {/* Sedan */}
        <div className="text-lg font-semibold mt-4 mb-4">Sedan &#62;</div>
        <div className="grid grid-cols-3 gap-5">
          {hybridCars.map(
            (car) =>
              car.class === "Sedan" && (
                <CarBox
                  model={car.model}
                  price={car.price}
                  image={car.image}
                  key={car.label}
                />
              )
          )}
        </div>
        {/* Kombi */}
        <div className="text-lg font-semibold mt-4 mb-4">Kombi &#62;</div>
        <div className="grid grid-cols-3 gap-5 mb-[110px]">
          {hybridCars.map(
            (car) =>
              car.class === "Kombi" && (
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
