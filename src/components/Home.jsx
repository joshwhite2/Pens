import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../shared/Logo";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Logo></Logo>
      </div>
      <div className="homeImages">
        <img src="/images/pen7.jpg" alt="Pen" />
        <img src="/images/pen14.jpg" alt="Pen" />
        <img src="/images/pen3.jpg" alt="Pen" />
      </div>
      <Link to="/products" className="enter">
        Enter
      </Link>
      <br />
      <div className="socials">
        <Link to="/">
          <FaInstagram className="socialsIcons" />
        </Link>
        <Link to="/">
          <MdOutlineMail className="socialsIcons" />
        </Link>
        <Link to="/">
          <FaFacebook className="socialsIcons" />
        </Link>
        &copy;Copyright 2023
      </div>
    </div>
  );
};

export default Home;
