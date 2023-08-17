import ProductItem from "./ProductItem";
import Nav from "./Nav";
import Header from "./Header";

const ProductList = ({ products }) => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="productList">
        {products.map((item) => (
          <ProductItem item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
