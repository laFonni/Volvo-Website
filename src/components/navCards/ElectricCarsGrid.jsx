import { electricCars } from "../../constants";
import CarsGrid from "./CarsGrid";

export const ElectricCarsGrid = () => {
  return (
    <div className=" mr-2 ml-2 w-[600px]">
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* Crossover */}
        <CarsGrid cars={electricCars} type="Crossover" />
        {/* SUV */}
        <CarsGrid cars={electricCars} type="SUV" />
        <div className="mb-[100px]"></div>
      </div>
    </div>
  );
};
