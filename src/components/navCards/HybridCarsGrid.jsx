import { hybridCars } from "../../constants";
import CarsGrid from "./CarsGrid";

export const HybridCarsGrid = () => {
  return (
    <div className=" mr-2 ml-2 w-[600px] ">
      {/* Bug with scroll the last boxes in grid are hidden under the website scroll is to low*/}
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* SUV */}
        <CarsGrid cars={hybridCars} type="SUV" />
        {/* Sedan */}
        <CarsGrid cars={hybridCars} type="Sedan" />
        {/* Kombi */}
        <CarsGrid cars={hybridCars} type="Kombi" />
        <div className="mb-[100px]"></div>
      </div>
    </div>
  );
};
