import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCarCard from '../components/CarouselCarCard';

const CaruselOfCars = () => {
    const responsive = {
        
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
        <div className='flex flex-col pt-20 bg-red-100  '>
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
            <div className='bg-red-300 marginCardsSidesCenter'>
            <Carousel 
                responsive={responsive}
                itemClass="carouselItem"
                partialVisible={true}
                >


                <div className='w-[290px] bg-slate-500 '>Item 1</div>
                <div className='w-[290px] bg-slate-500 '>Item 2</div>
                <div className='w-[290px] bg-slate-500 '>Item 3</div>
                <div className='w-[290px] bg-slate-500 '>Item 4</div>
                <div className='w-[290px] bg-slate-500 '>Item 3</div>
                <div className='w-[290px] bg-slate-500 '>Item 4</div>
            </Carousel>          
            </div>
        </div>
    )
}

export default CaruselOfCars