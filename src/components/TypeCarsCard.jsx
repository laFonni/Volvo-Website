import PropTypes from 'prop-types'

const TypeCarsCard = ({title, description, button, image}) => {
  return (
    <div className='flex flex-col bg-gray-50 h-[500px] w-[394px] relative'>
        <h3 className='flex pt-12 pl-6 pb-6 font-semibold text-xl tracking-wide'>
            {title}
        </h3>
        <p className="pl-6 pr-9 pb-6 text-gray-600">
            {description}
        </p>
        <button className='flex justify-start pl-6 font-semibold tracking-wide text-blue-900 '>
            <span className='hover:underline pr-2' >{button}</span> &#62;
        </button>
        <img className="absolute bottom-0" src={image} alt="" />
    </div>
  )
}


TypeCarsCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default TypeCarsCard