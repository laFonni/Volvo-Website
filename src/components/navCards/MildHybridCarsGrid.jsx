import { mildHybridCars } from "../../constants";
import CarsGrid from "./CarsGrid";

const MildHybridCarsCard = () => {
  return (
    <div className=" mr-2 ml-2 w-[600px] ">
      {/* Bug with scroll the last boxes in grid are hidden under the website scroll is to low*/}
      <div className="mb-4 ml-4 w-full h-full overflow-auto">
        {/* SUV */}
        <CarsGrid cars={mildHybridCars} type="SUV" />
        {/* Sedan */}
        <CarsGrid cars={mildHybridCars} type="Sedan" />
        {/* Kombi */}
        <CarsGrid cars={mildHybridCars} type="Kombi" />
        <div className="mb-[100px]"></div>
      </div>
    </div>
  );
};

export default MildHybridCarsCard;
