import { productList } from "./productList";
import { useState } from "react";
import React from "react";
import "./cards.css";

function DataCards() {
  const data = productList;

  return (
    <div className="CardMainBody">
      <div className="skill-main">
        {data.map((item) => {
          return (
            <a className="dataCardBox" href="/">
              <div>
                <div className="skillDiv">
                  <div>
                    <h4>
                      {item.id}
                      {item.name}
                    </h4>
                  </div>
                  <div className="cardMain">
                    <div className="cardMainData">{item.country} </div>
                    <div className="cardMainData">{item.weight} </div>
                  </div>
                  <div className="cardMain">
                    <div>
                      <div className="cardMainData">{item.buy} </div>
                      <div className="cardMainData">{item.buyAmt} </div>
                    </div>
                    <div>
                      <div className="cardMainData">{item.sell} </div>
                      <div className="cardMainData">{item.sellAmt} </div>
                    </div>
                    <div>
                      <div className="cardMainData">{item.last} </div>
                      <div className="cardMainData">{item.lastAmt} </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="leftBigCard">working</div>
    </div>
  );
}

export default DataCards;
