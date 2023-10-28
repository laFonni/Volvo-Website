import { mildHybridCars } from "../../../constants";
import CarsGrid from "./CarsGrid";

const MildHybridCarsCard = () => {
  return (
    <div className=" mr-2 ml-2  ">
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* SUV */}
        <CarsGrid cars={mildHybridCars} type="SUV" />
        {/* Sedan */}
        <CarsGrid cars={mildHybridCars} type="Sedan" />
        {/* Kombi */}
        <CarsGrid cars={mildHybridCars} type="Kombi" />
      </div>
    </div>
  );
};

export default MildHybridCarsCard;
