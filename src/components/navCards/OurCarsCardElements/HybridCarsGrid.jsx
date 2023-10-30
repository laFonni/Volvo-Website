import { hybridCars } from "../../../constants";
import CarsGrid from "./CarsGrid";

export const HybridCarsGrid = () => {
  return (
    <div className=" mr-2 ml-2 ">
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* SUV */}
        <CarsGrid cars={hybridCars} type="SUV" />
        {/* Sedan */}
        <CarsGrid cars={hybridCars} type="Sedan" />
        {/* Kombi */}
        <CarsGrid cars={hybridCars} type="Kombi" />
      </div>
    </div>
  );
};
