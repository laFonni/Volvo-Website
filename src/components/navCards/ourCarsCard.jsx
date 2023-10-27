import { carsCards } from "../../constants";
import { HybridCarsGrid } from "./HybridCarsGrid";

const ourCarsCard = () => {
  return (
    <div className="fixed top-[64px] left-0 w-full h-[80vh] bg-white">
      <div className="mt-6 mr-3 h-screen">
        <div className=" mr-6 ml-32 h-screen flex flex-row justify-center">
          {/* List of types */}
          <div className=" mr-2 ml-2 w-[250px]">
            {carsCards.map((type) => (
              <div className="flex flex-col justify-start" key={type.index}>
                <div className=" text-xl font-semibold ">{type.label}</div>
                <div className="pt-1 mb-6 text-sm text-gray-600">
                  {type.text}
                </div>
              </div>
            ))}
          </div>
          {/* Grid of cars */}
          {/* <ElectricCarsGrid /> */}

          <HybridCarsGrid />
        </div>
      </div>
    </div>
  );
};

export default ourCarsCard;
