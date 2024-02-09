import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, color: 'white' }}>
        <div className="headerContainer">
          <h1>Najlepsze burgery</h1>
          <p>tylko u nas!</p>
          <Link to="/menu">
            <button>Zamów teraz!</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
