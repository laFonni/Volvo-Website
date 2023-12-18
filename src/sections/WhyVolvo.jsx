import { VolvoTrunkInside } from "../assets/Cars";
import BlueButton from "../components/BlueButton";
import InfoCard from "../components/InfoCard";
import { WhyVolvoInfoCards } from "../constants";

const WhyVolvo = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center">
      <h2 className="text-[34px] font-semibold flex justify-center  tracking-wide pb-[70px] pt-20">
        Dlaczego Volvo?
      </h2>
      <img
        src={VolvoTrunkInside}
        alt="Volvo inside trunk"
        width={1232}
        className="pb-8"
      />
      <ul className="flex flex-row gap-6 justify-center pb-6">
        {WhyVolvoInfoCards.map((card) => (
          <InfoCard key={card.key} title={card.title} info={card.info} />
        ))}
      </ul>
      <div className="flex justify-center pb-20">
        <BlueButton label="Dowiedz się więcej o Volvo cars" />
      </div>
    </section>
  );
};

export default WhyVolvo;
