import PropTypes from "prop-types";

const ButtonVideoHandler = ({ handler, icon }) => {
  return (
    <button
      onClick={handler}
      className="absolute bottom-5 right-5 bg-neutral-300 rounded-full p-1"
    >
      <img src={icon} alt="pause" height={32} width={32} />
    </button>
  );
};

ButtonVideoHandler.propTypes = {
  handler: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ButtonVideoHandler;
