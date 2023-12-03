import propTypes from 'prop-types'


const CarouselCarCard = ({classOfCar, model, price, type, image}) => {
  return (
    <div className="h-[360px] w-[290px] bg-gray-300">
        <h3>{classOfCar}</h3>
        <h1>{model} {type}</h1>
        <p>Już od {price} zł</p>
        <img src={image} alt={model} />
        <div>
            <button>Więcej</button>
            <button>Wybierz</button>
        </div>
    </div>
  )
}

CarouselCarCard.propTypes = {
    class: propTypes.string,
    model: propTypes.string,
    price: propTypes.string,
    type: propTypes.string,
    image: propTypes.string,
}



export default CarouselCarCard