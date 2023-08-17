import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/products">
      <button className="btn1"> &#8656; To Shop</button>
    </Link>
  );
};

export default BackButton;
