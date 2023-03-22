import Carousel from "../../../components/Carousel/Carousel";
import Title from "../../../components/Title/Title";
import { menuData } from "../../../utils/menuData";

const Products = (title) => {
  return (
    <div className="products">
      <Title title="ХОЛОДНЫЕ ЗАКУСКИ" />
      <Carousel />
      <Title title="ГОРЯЧИЕ ЗАКУСКИ" />
      <Carousel />
      <Title title="Мясные блюда" />
      <Carousel />
    </div>
  );
};

export default Products;
