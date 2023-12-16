import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCarCard from "./CarouselCarCard";
import PropTypes from "prop-types";
import {
  arrowBlackRight,
  arrowBlackLeft,
  arrowGreyLeft,
  arrowGreyRight,
} from "../assets";
import { AllCars } from "../constants";

const CustomRightArrow = ({ onClick, ...rest }) => (
  <button onClick={() => onClick()} {...rest}>
    <img src={arrowBlackRight} alt="arrowRight" height={36} width={36} />
  </button>
);

CustomRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const CustomLeftArrow = ({ onClick, ...rest }) => (
  <button onClick={() => onClick()} {...rest}>
    <img src={arrowBlackLeft} alt="arrowRight" height={36} width={36} />
  </button>
);

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
};

const CarouselOfAbove4 = ({ activeClassOfCar }) => {
  let classOfCar = AllCars.filter((car) =>
    activeClassOfCar == "AllCars" ? car : car.classOfCar === activeClassOfCar
  );

  CarouselOfAbove4.propTypes = {
    activeClassOfCar: PropTypes.string.isRequired,
  };

  return (
    <div className="marginCardsSidesCenterOf4andAbove relative ">
      <Carousel
        responsive={responsive}
        draggable={false}
        partialVisible={false}
        gotoslide={1}
        customLeftArrow={
          <CustomLeftArrow className="absolute bottom-6 right-20 z-10" />
        }
        customRightArrow={
          <CustomRightArrow className="absolute bottom-6 right-8 z-10 " />
        }
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
      <img
        src={arrowGreyLeft}
        alt="arrowRight"
        height={36}
        width={36}
        className="absolute bottom-6 right-20"
      />
      <img
        src={arrowGreyRight}
        alt="arrowRight"
        height={36}
        width={36}
        className="absolute bottom-6 right-8"
      />
    </div>
  );
};

export default CarouselOfAbove4;
