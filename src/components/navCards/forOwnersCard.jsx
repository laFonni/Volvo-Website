import { forOwnersCard } from "../../constants";
import CardList from "./CardList";

const ForOwnersCard = () => {
  let headers = Array.from(
    new Set(forOwnersCard.map((element) => element.head))
  );

  return (
    <section className="fixed top-[64px] left-0 w-full p-12 bg-white ">
      <div className="flex flex-row justify-center gap-8 ml-10">
        {headers.map((element) => (
          <CardList list={forOwnersCard} header={element} key={element} />
        ))}
      </div>
    </section>
  );
};

export default ForOwnersCard;