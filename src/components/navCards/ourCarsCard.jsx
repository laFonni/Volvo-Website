import { carsCards } from "../../constants";
import { HybridCarsGrid } from "./OurCarsCardElements/HybridCarsGrid";
import { ElectricCarsGrid } from "./OurCarsCardElements/ElectricCarsGrid";
import MildHybridCarsGrid from "./OurCarsCardElements/MildHybridCarsGrid";
import { useState } from "react";
import { motion } from "framer-motion";

const OurCarsCard = () => {
  const [activeGrid, setActiveGrid] = useState("hybrid");

  const toggleGrid = (card) => {
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
      <div className="mt-6 mr-3 h-[80vh] bg-white overflow-hidden">
        <div className="mr-6 h-[80vh] flex flex-row justify-center ">
          <motion.div
            className="bg-blue-800 h-[50px] w-[3px] mt-[110px]  rounded-full "
            animate={
              activeGrid === "electric"
                ? { y: -90 }
                : activeGrid === "hybrid"
                ? { y: 0 }
                : { y: 90 }
            }
          >
            {" "}
          </motion.div>
          {/* List of types */}
          <ul className=" mr-2 ml-2 mt-4  w-[250px]  ">
            {carsCards.map((type) => (
              <li
                className="flex flex-col justify-start cursor-pointer mb-4 "
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
          <div className="mt-4 h-[650px] w-[1px] bg-gray-300 "></div>
          {/* Grid of cars */}
          {routes[activeGrid]}
        </div>
      </div>
    </div>
  );
};

export default OurCarsCard;
