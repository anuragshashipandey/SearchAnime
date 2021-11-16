import React from "react";
import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { loadMore } from "../actions/index";
import "../Home.css";

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Header />
      <CardContainer />
      <p className="load" onClick={() => dispatch(loadMore())}>
        Load More...
      </p>
    </div>
  );
}

export default Home;
