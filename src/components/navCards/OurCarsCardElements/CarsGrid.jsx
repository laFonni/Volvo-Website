import { CarBox } from "./CarBox";
import PropTypes from "prop-types";
import TitleOfGrid from "./TitleOfGrid";

const CarsGrid = ({ cars, type }) => {
  return (
    <>
      
      <TitleOfGrid label={type}/>
      <div className="grid grid-cols-4 gap-10 mb-4">
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
