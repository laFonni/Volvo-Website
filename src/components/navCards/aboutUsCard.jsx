import { aboutUsCard } from "../../constants";
import CardList from "./CardList";

const AboutUsCard = () => {
  let headers = Array.from(
    new Set(aboutUsCard.map((element) => element.head))
  );

  return (
    <section className="fixed top-[64px] left-0 w-full p-12 bg-white ">
      <div className="flex flex-row justify-center gap-8 ml-10">
        {headers.map((element) => (
          <CardList list={aboutUsCard} header={element} key={element} />
        ))}
      </div>
      
    </section>
  );
};

export default AboutUsCard;