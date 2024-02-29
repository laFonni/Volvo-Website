import PropTypes from "prop-types"

const TitleOfGrid = ({label}) => {
  return (
    <button className="text-[16px] font-semibold mt-4 mb-4 ml-2.5 text-blue-800"><span className="hover:underline">{label}</span> &#62;</button>
  )
}

TitleOfGrid.PropTypes = {
    label: PropTypes.string
}

export default TitleOfGrid