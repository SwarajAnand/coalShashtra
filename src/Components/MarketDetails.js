import React, { useState } from "react";
import "./marketDetails.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import { productList } from "./Cards/productList";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import StarIcon from "@mui/icons-material/Star";

function MarketDetails() {
  const [data, setData] = useState(productList);
  const [searchVal, setSearchVal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearchClick = () => {
    const foundItem = productList.find(
      (item) => item.id.toString().toLowerCase() === searchVal.toLowerCase()
    );

    if (foundItem) {
      setData([foundItem]);
      setSelectedItem(foundItem);
    } else {
      const sortedData = [...productList].sort((a, b) =>
        a.id.toString().localeCompare(b.id.toString())
      );
      setData(sortedData);
      setSelectedItem(sortedData[0]);
    }
  };

  const mystyle = {
    marginTop: "20px",
    fontWeight: "700",
  };

  const openCard = (item) => {
    setSelectedItem(item);
    const filteredData = productList.filter(
      (dataItem) => dataItem.idTag === item.idTag
    );
    setData(filteredData);
  };

  return (
    <div>
      <div className="belowNavData">
        <div className="marketData">
          <h3>Market Details</h3>
        </div>
        <div>
          <div className="reloadIcon">
            <div className="searchDataMain" style={mystyle}>
              <button className="searchButton" onClick={handleSearchClick}>
                <SearchSharpIcon />
              </button>
              <input
                placeholder="search by Vessel, Type, etc..."
                className="searchData"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>
            </div>
            <div className="reloadIconImg">
              <ReplaySharpIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="marketDetailsData">
        <div className="insideMarketData">
          <a
            className="marketDetailsDataInside border"
            href="#"
            onClick={() => openCard({ idTag: "HALDIPT" })}
          >
            HALDIPT
          </a>
        </div>
        <div className="insideMarketData">
          <a
            className="marketDetailsDataInside border"
            href="#"
            onClick={() => openCard({ idTag: "INDOGUJ" })}
          >
            INDOGUJ
          </a>
        </div>
        <div className="insideMarketData ">
          <a
            className="marketDetailsDataInside border"
            href="#"
            onClick={() => openCard({ idTag: "HAZMAG" })}
          >
            HAZMAG
          </a>
        </div>
        <div className="insideMarketData ">
          <a
            className="marketDetailsDataInside border "
            href="#"
            onClick={() => openCard({ idTag: "ENNKAPT" })}
          >
            ENNKAPT
          </a>
        </div>
        <div className="insideMarketData">
          <a
            className="marketDetailsDataInside border"
            href="#"
            onClick={() => openCard({ idTag: "USAGUJ" })}
          >
            USAGUJ
          </a>
        </div>
      </div>

      <div className="CardMainBody">
        <div className="skill-main">
          {data.map((item) => (
            <a
              className={`dataCardBox ${
                selectedItem && selectedItem.idTag === item.idTag ? "open" : ""
              }`}
              href="#"
              key={item.id}
              onClick={() => openCard(item)}
            >
              <div>
                <div className="skillDiv">
                  <div className="skillDivHeading">
                    <h4>
                      {item.id}
                      {item.name}
                      <ShareIcon className="cardsIcon" />
                      <DownloadIcon className="cardsIcon" />
                      <StarIcon className="cardsIcon" />
                    </h4>
                  </div>
                  <div className="cardMain">
                    <div className="cardMainData">{item.idTag}</div>
                    <div className="cardMainData">{item.country} </div>
                    <div className="cardMainData">{item.weight} </div>
                  </div>
                  <div className="cardMain">
                    <div>
                      <div className="cardMainData">{item.buy} </div>
                      <div className="cardMainData skillDivHeading">
                        {item.buyAmt}{" "}
                      </div>
                    </div>
                    <div>
                      <div className="cardMainData">{item.sell} </div>
                      <div className="cardMainData skillDivHeading">
                        {item.sellAmt}{" "}
                      </div>
                    </div>
                    <div>
                      <div className="cardMainData">{item.last} </div>
                      <div className="cardMainData skillDivHeading">
                        {item.lastAmt}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="leftBigCard">
          {selectedItem && (
            <div>
              <div key={selectedItem.id}>
                <div className="leftIdName">
                  <div>
                    <h2>ID: {selectedItem.id}</h2>
                  </div>
                  <div className="leftIdNameDiv">Name: {selectedItem.name}</div>
                </div>

                <div className="leftIdCountry">
                  <div>Country: {selectedItem.country}</div>
                  <div className="leftIdTag">{selectedItem.idTag}</div>
                </div>
                <p className="buySellCol">Weight: {selectedItem.weight}</p>
                <div className="lowerData">
                  <div>
                    <div className="buySellCol">Buy: {selectedItem.buy}</div>
                    <div className="buySellCol">Sell: {selectedItem.sell}</div>
                    <div className="buySellCol">Last: {selectedItem.last}</div>
                  </div>
                  <div>
                    <div className="amount">
                      Buy Amount: {selectedItem.buyAmt}
                    </div>
                    <div className="amount">
                      Sell Amount: {selectedItem.sellAmt}
                    </div>
                    <div className="amount">
                      Last Amount: {selectedItem.lastAmt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="lowerSideCardBody">
            <div className="lowerSideCard">Total Quantity</div>
          </div>
          <div className="lastPartLeftData">
            <div>
              <div className="buySellCol1 underLine">Contract Info</div>
              <div className="buySellCol">Coal Type</div>
              <div className="buySellCol">Origin</div>
              <div className="buySellCol">Port</div>
              <div className="buySellCol">Calorific Value</div>
            </div>
            <div>
              <div className="buySellCol1 underLine">Details</div>
              <div className="buySellCol1">Thermal Coal</div>
              <div className="buySellCol1">Peru</div>
              <div className="buySellCol1">Haldia port</div>
              <div className="buySellCol1">10382 GAD (kcal/Kg)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketDetails;
