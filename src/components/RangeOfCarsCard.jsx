import PropTypes from "prop-types";
import BlueButton from "./BlueButton";

const RangeOfCarsCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col flex-wrap w-[600px] h-[600px] bg-gray-50 realative">
      <div className="w-full h-[260px] relative overflow-hidden">
        <img
          className="absolute h-full w-full object-cover"
          src={image}
          alt={image}
        />
      </div>
      <div>
        <h2 className="flex justify-center text-3xl font-semibold tracking-wide pt-16 pb-6">
          {title}
        </h2>
        <p className="flex justify-center text-lg text-gray-600 tracking-wide text-center px-20 pb-6 min-h-[110px]">
          {description}
        </p>
      </div>
      <div className="flex justify-center ">
        <BlueButton label="Sprawdź ofertę" />
      </div>
    </div>
  );
};

RangeOfCarsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RangeOfCarsCard;
