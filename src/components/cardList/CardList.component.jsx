import React, { Component } from "react";
import "./cardList.style.css";
import Card from "../card/Card.component";

const CardList = (props) => {
  // console.log("Props: ", props)

  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
