import { productList } from "./productList";
import { useState } from "react";
import React from "react";
import "./cards.css";

function DataCards() {
  const data = productList;
  const [openCardId, setOpenCardId] = useState(null);

  const openCard = (id) => {
    setOpenCardId(id);
  };

  return (
    <div className="CardMainBody">
      <div className="skill-main">
        {data.map((item) => {
          return (
            <a
              className={`dataCardBox ${openCardId === item.id ? "open" : ""}`}
              href="#"
              key={item.id}
              onClick={() => openCard(item.id)}
            >
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
      <div className="leftBigCard">
        {openCardId && (
          <div>
            {/* Render the content of the open card */}
            {data.map((item) => {
              if (item.id === openCardId) {
                return (
                  <div key={item.id}>
                    <h2>ID: {item.id}</h2>
                    <p>Name: {item.name}</p>
                    <p>Country: {item.country}</p>
                    <p>Weight: {item.weight}</p>
                    <p>Buy: {item.buy}</p>
                    <p>Buy Amount: {item.buyAmt}</p>
                    <p>Sell: {item.sell}</p>
                    <p>Sell Amount: {item.sellAmt}</p>
                    <p>Last: {item.last}</p>
                    <p>Last Amount: {item.lastAmt}</p>
                    {/* Additional details or components can be added here */}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DataCards;
