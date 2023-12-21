import propTypes from "prop-types";

const InfoCard = ({ title, info }) => {
  return (
    <div className="flex flex-col items-start max-w-[395px]">
      <h3 className="font-semibold text-xl pb-2 tracking-wide">{title}</h3>
      <p className="pb-2 text-zinc-500">{info}</p>
    </div>
  );
};

InfoCard.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.string.isRequired,
};

export default InfoCard;
