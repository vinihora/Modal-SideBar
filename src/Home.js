import React from "react";
import { FiMenu } from "react-icons/fi";
import "./Home.css";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <section className="main">
      <section className="header">
        <FiMenu className="menu-icon" onClick={openSideBar} />
      </section>
      <div className="button-div">
        <button className="btn" onClick={openModal}>
          <h3>Show Modal</h3>
        </button>
      </div>
    </section>
  );
};

export default Home;
