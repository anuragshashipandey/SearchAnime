import React from "react";
import Card from "./Card";
import "../styles/CardContainer.css";
import { useSelector } from "react-redux";

function CardContainer() {
  const list = useSelector((state) => state.cardList);
  return (
    <div className="CardContainer">
      {/* {console.log("list ", list)} */}
      {!list.length ? (
        <p className="searchsomething">Search Something...</p>
      ) : (
        list?.map((item) => (
          <Card key={item[2]} imgUri={item[0]} title={item[1]} />
        ))
      )}
    </div>
  );
}

export default CardContainer;
