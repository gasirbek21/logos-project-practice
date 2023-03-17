import HomeCarousel from "../../../components/HomeCarousel/HomeCarousel";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <HomeCarousel title="ХОЛОДНЫЕ ЗАКУСКИ" />
        <HomeCarousel title="ГОРЯЧИЕ ЗАКУСКИ" />
        <HomeCarousel title="МЯСНЫЕ БЛЮДА" />
      </div>
    </div>
  );
};

export default Products;
