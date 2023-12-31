import PropTypes from "prop-types";

const BlueButton = ({ label }) => {
  return (
    <button className="border-[1px] border-blue-900 rounded-[4px] px-9 py-2.5 font-semibold text-blue-900 hover:bg-blue-900 hover:text-white duration-300 ease-in-out">
      {label}
    </button>
  );
};

BlueButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BlueButton;
