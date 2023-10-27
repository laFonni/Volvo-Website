import PropTypes from "prop-types";

export const CarBox = ({ model, price, image }) => {
  return (
    <div className="h-[150px] w-[170px] rounded-md flex flex-col justify-between hover:bg-gray-100">
      <div className="flex flex-col ml-3 mt-2  text-xs text-gray-600">
        <span className="text-base text-gray-900 font-semibold">{model}</span>
        {price}
      </div>
      <img src={image} alt="model" className="mb-2" />
    </div>
  );
};

CarBox.propTypes = {
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
