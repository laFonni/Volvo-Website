import { carsCards, electricCars } from "../../constants";
import { CarBox } from "./carBox";

const ourCarsCard = () => {
  return (
    <div className="fixed top-[64px] left-0 w-full h-scree bg-white">
      <div className="mt-6 mr-3 h-screen">
        <div className=" mr-6 ml-32 h-screen flex flex-row">
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
          <div className=" mr-2 ml-2 w-[600px]">
            <div className=" mb-4 ml-4 w-full h-full">
              <div className="text-lg font-semibold mt-2">Crossover</div>
              <div className="grid grid-cols-3 gap-5">
              {electricCars.map((car) => ( car.class === "Crossover" &&
                <CarBox model={car.model} price={car.price} image={car.image} key={car.label}/>
                ))}
              </div>

              <div className="text-lg font-semibold mt-2">Suv &#62;</div>
              <div className="grid grid-cols-3 gap-5">
              {electricCars.map((car) => ( car.class === "SUV" &&
                <CarBox model={car.model} price={car.price} image={car.image} key={car.label}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourCarsCard;
