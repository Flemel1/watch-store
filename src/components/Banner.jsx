import { ShopButton } from "./Button";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <div className="banner__wrapper">
        <h1>Watch Store No. 1</h1>
        <h2>Find your favorite watch or custom your watch on our store</h2>
        <ShopButton />
      </div>
      <img className="banner__image" src="/images/photo.png" alt="banner" />
    </div>
  );
};

export default Banner;
