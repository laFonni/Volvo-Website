import { CarBox } from "./carBox";
import PropTypes from "prop-types";

const CarsGrid = ({ cars, type }) => {
  return (
    <>
      <div className="text-lg font-semibold mt-4 mb-4">{type} &#62;</div>
      <div className="grid grid-cols-3 max-gap-5">
        {cars.map(
          (car) =>
            car.class === type && (
              <CarBox
                model={car.model}
                price={"Już od " + car.price + " zł"}
                image={car.image}
                key={car.label}
              />
            )
        )}
      </div>
    </>
  );
};

CarsGrid.propTypes = {
  cars: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CarsGrid;
