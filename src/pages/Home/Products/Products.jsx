import Carousel from "../../../components/Carousel/Carousel";
import Title from "../../../components/Title/Title";

const Products = (title) => {
  return (
    <div className="products">
      <div className="container">
        <Title title="ХОЛОДНЫЕ ЗАКУСКИ" />
        <Carousel />

        <Title title="ГОРЯЧИЕ ЗАКУСКИ" />
        <Carousel />

        <Title title="МЯСНЫЕ БЛЮДA" />
        <Carousel />
      </div>
    </div>
  );
};

export default Products;
