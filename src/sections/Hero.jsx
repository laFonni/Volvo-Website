import heroVideo from "../assets/HP-hero-ex30.mp4"
import { useState, useRef} from "react"
import ButtonVideoHandler from "../components/ButtonVideoHandler"
import { Pause, Play } from "../assets"

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  }

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  }


  return (
    <div className="flex items-end justify-center w-full h-full relative">
      <video 
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className=" object-cover w-full h-full -z-10 overflow-hidden " 
      />
      {/* #TODO add EX30 link */}
      {isVideoPlaying ? (
        <ButtonVideoHandler handler={handleVideoPause} icon={Pause}/>) : 
        (<ButtonVideoHandler handler={handleVideoPlay} icon={Play}/>
        )}
      <div className="flex flex-col items-center absolute top-20 ">
        <h1 className="text-lg bg-black text-white">
          Hero
        </h1>
      </div>

    </div>
  )
}

export default Hero