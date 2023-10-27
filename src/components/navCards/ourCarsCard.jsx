import { carsCards } from "../../constants";
import { HybridCarsGrid } from "./HybridCarsGrid";
import { ElectricCarsGrid } from "./ElectricCarsGrid";
import MildHybridCarsGrid from "./MildHybridCarsGrid";

import { useState } from "react";

const OurCarsCard = () => {
  const [activeGrid, setActiveGrid] = useState("electric");

  const toggleGrid = (card) => {
    console.log("activeGrid: ", activeGrid, "card: ", card);
    if (activeGrid !== card) {
      setActiveGrid(card);
    }
  };

  const routes = {
    electric: <ElectricCarsGrid />,
    hybrid: <HybridCarsGrid />,
    mildHybrid: <MildHybridCarsGrid />,
  };
  return (
    <div className="fixed top-[64px] left-0 w-full h-[80vh] bg-white">
      <div className="mt-6 mr-3 h-screen">
        <div className=" mr-6 ml-16  h-screen flex flex-row justify-center">
          {/* List of types */}
          <ul className=" mr-2 ml-2  w-[250px] ">
            {carsCards.map((type) => (
              <li
                className="flex flex-col justify-start cursor-pointer mb-4"
                key={type.key}
                onClick={() => toggleGrid(type.key)}
              >
                <div
                  className={`${
                    activeGrid === type.key ? "text-black" : "text-gray-500"
                  } text-xl font-semibold`}
                >
                  {type.label}
                </div>
                <div
                  className={`${
                    activeGrid === type.key ? "text-gray-700" : "text-gray-400"
                  } text-sm pt-1 mb-6 text-gray-600`}
                >
                  {type.text}
                </div>
              </li>
            ))}
          </ul>
          {/* Grid of cars */}
          {routes[activeGrid]}
        </div>
      </div>
    </div>
  );
};

export default OurCarsCard;