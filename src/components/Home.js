import React from "react";
import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../actions/index";
import "../Home.css";

function Home() {
  const list = useSelector((state) => state.cardList);
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Header />
      <CardContainer />
      {list.length ? (
        <p className="load" onClick={() => dispatch(loadMore())}>
          Load More...
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
