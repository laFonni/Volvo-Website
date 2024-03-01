import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCarCard from "./CarouselCarCard";
import PropTypes from "prop-types";

import { AllCars } from "../../constants";

const responsive = {
  desktop: {
    breakpoint: { max: 9000, min: 24 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselOf1 = ({ activeClassOfCar }) => {
  let classOfCar = AllCars.filter((car) => car.classOfCar === activeClassOfCar);

  CarouselOf1.propTypes = {
    activeClassOfCar: PropTypes.string.isRequired,
  };

  return (
    <div className="marginCardsSidesCenter1 relative ">
      <Carousel
        responsive={responsive}
        partialVisible={false}
        draggable={true}
        className="pb-24"
        transitionDuration={100}
      >
        {classOfCar.map((car) => (
          <CarouselCarCard
            key={car.model}
            classOfCar={car.classOfCar}
            model={car.model}
            price={car.price}
            type={car.type}
            image={car.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselOf1;
