import PropTypes from 'prop-types';

export const CarBox = ({model, price, image}) => {
  return (
    <button className="h-[150px] w-[170px] rounded-md flex flex-col justify-between hover:bg-gray-100 cursor-pointer">            
        <div className="flex flex-col justify-start items-start ml-3 mt-2 text-xs text-gray-600">
        <span className="text-base text-gray-900 font-semibold">{model}</span>{price}
        </div>
        <img src={image} alt="model"  className="mb-2"/>

    </button>
  )
}

CarBox.propTypes = {
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}