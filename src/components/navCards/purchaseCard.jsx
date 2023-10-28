
import { purchaseCard } from "../../constants";
import PurchaseCardList from "./PurchaseCardList";

const PurchaseCard = () => {

  let headers = Array.from(new Set(purchaseCard.map((element) => element.head)))

  return (
    <section className="fixed top-[64px] left-0 w-full p-12 bg-white " >
      <div className="flex flex-row justify-center gap-8 ml-10">
        {headers.map((element) => (
          console.log(element),
          <PurchaseCardList purchase={purchaseCard} header={element} key={element}/>
        ))}
      </div>
    </section>
  );
};

export default PurchaseCard;
