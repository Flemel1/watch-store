import { BuyButton } from "./Button";

const NewArrivalCard = () => {
  return (
    <div className="new-arrival-card">
      <img src="/images/thumbnail-watch.png" alt="thumbnail" />
      <div className="new-arrival-card__body">
        <h3>Amera S</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas
          aliquet eget habitasse lacus. Semper cras adipiscing quam dictumst
          facilisis.
        </p>
        <BuyButton />
      </div>
    </div>
  );
};

const CategoryCard = () => {
  return (
    <div className="category-card">
      <img src="/images/thumbnail-watch.png" alt="thumbnail" />
      <div className="category-card__body">
        <h3>Amera S</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas
          aliquet eget habitasse lacus. Semper cras adipiscing quam dictumst
          facilisis.
        </p>
        <BuyButton />
      </div>
      
    </div>
  );
};

export { NewArrivalCard, CategoryCard };
