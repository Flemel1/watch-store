import { NewArrivalCard } from "./Card";


const NewArrival = () => {
  return (
    <div className="new-arrival">
      <h2>New Arrivals</h2>
      <div className="new-arrival__wrapper">
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
      </div>
    </div>
  );
};

export default NewArrival;
