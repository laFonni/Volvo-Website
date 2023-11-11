import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCarCard from '../components/CarouselCarCard';

const CaruselOfCars = () => {
    const responsive = {
        
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    };
    return (
        <div className='flex flex-col pt-20 bg-red-100 px-5 justify-center items-center'>
            <div className='flex justify-center text-4xl font-semibold pb-6'>
                Wszystie modele Recharge
            </div>
            <button className='flex flex-row text-gray-600 gap-5 justify-center pb-6'>
                <div className='border-b-2 active:border-blue-800'>Wszystkie(10)</div>
                <div className=''>SUV(5)</div>
                <div className=''>Crossover(1)</div>
                <div className=''>Sedan(2)</div>
                <div className=''>Kombi(2)</div>
            </button>
            <div className=' flex items-center bg-red-300 '>
                <Carousel 
                    responsive={responsive}
                    className='flex justify-center '
                    showDots={true}
                    containerClass='carousel-container'
                    
                    >
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />
                    <CarouselCarCard />

                </Carousel>
            </div>
        </div>
    )
}

export default CaruselOfCars