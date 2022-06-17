import { CategoryCard } from "./Card";

const Category = () => {
  return (
    <div className="category">
      <div className="category__list">
        <div className="category__list__item">Men</div>
        <div className="category__list__item">Women</div>
      </div>
      <div className="category__wrapper">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
      </div>
    </div>
  );
};

export default Category;
