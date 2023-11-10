import { RangeOfCarsDB } from "../constants"
import RangeOfCarsCard from "../components/RangeOfCarsCard"

const RangeOfCars = () => {
  return (
    <div className="flex flex-col w-full h-full  pb-24">
        <div className="flex flex-row justify-center gap-6 pb-9">
            {RangeOfCarsDB.map((card) => (
                <RangeOfCarsCard key={card.key} {...card} />
                ))}
        </div>
        <p className="flex justify-center text-xs tracking-wide text-gray-500">Poznaj gamę samochodów Volvo, sprawdź oferty i wybierz Volvo dla siebie.</p>
    </div>
  )
}

export default RangeOfCars