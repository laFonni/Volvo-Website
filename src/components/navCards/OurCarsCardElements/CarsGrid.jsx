import { CarBox } from "./CarBox";
import PropTypes from "prop-types";

const CarsGrid = ({ cars, type }) => {
  return (
    <>
      <div className="text-lg font-semibold mt-4 mb-4">{type} &#62;</div>
      <div className="grid grid-cols-4 gap-10 ">
        {cars.map(
          (cars) =>
            cars.class === type && (
              <CarBox
                model={cars.model}
                price={"Już od " + cars.price + " zł"}
                image={cars.image}
                key={cars.model}
              />
            )
        )}
      </div>
    </>
  );
};

CarsGrid.propTypes = {
  cars: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default CarsGrid;
