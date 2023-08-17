import Nav from "./Nav";
import Header from "./Header";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const submit = () => {
    alert("Feedback Submitted");
    document.getElementById("feedback").value = "";
  };

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div id="contact">
        <h2>Contact Us</h2>
        <div id="contactLinks">
          <Link to="">
            <FaInstagram className="socialsIcons" />
          </Link>
          <Link to="">
            <h3>Instagram</h3>
          </Link>
          <Link to="">
            <MdOutlineMail className="socialsIcons" />
          </Link>
          <Link to="">
            <h3>Email</h3>
          </Link>

          <Link to="">
            <FaFacebook className="socialsIcons" />
          </Link>
          <Link to="">
            <h3>Facebook</h3>
          </Link>
        </div>
        <form action="/products">
          <h3>Leave Feedback</h3>
          <textarea
            type="text"
            id="feedback"
            style={{ width: "380px", height: "100px" }}
          />
        </form>
        <button className="btn1 btn2" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Contact;
