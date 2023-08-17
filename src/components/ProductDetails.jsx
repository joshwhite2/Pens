import BackButton from "../shared/BackButton";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";

const ProductDetails = ({ item }) => {
  const { id } = useParams();
  return (
    <>
      <Nav></Nav>
      <Header></Header>

      <div className="details">
        <img src={item[id - 1].icon} alt="pen" className="detailsImage" />
        <h2 className="detailsName">{item[id - 1].name}</h2>
        <p>{item[id - 1].description}</p>
        <h2 className="detailsPrice">
          <FormattedPrice value={item[id - 1].price} />
        </h2>
        <CartButton item={item[id - 1]}></CartButton>
        <BackButton></BackButton>
      </div>
    </>
  );
};

export default ProductDetails;
