import PropTypes from "prop-types";

const PurchaseCardList = ({ purchase, header }) => {
  return (
    <div className="flex flex-col mr-10 max-w-[186px]">
      <div className="mb-4 font-semibold text-xs text-gray-600 uppercase tracking-wide">{header}</div>
      <ul className="felx flex-row">
        {purchase.map((element) => (
          <>
            {element.head === header ? (
              <li className="flex flex-col items-start mb-4 text-sm font-semibold hover:underline cursor-pointer">
                {element.label}
              </li>
            ) : null}
          </>
        ))}
      </ul>
    </div>
  );
};

PurchaseCardList.propTypes = {
  purchase: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
};

export default PurchaseCardList;
