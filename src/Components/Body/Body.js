import React from "react";
import "./body.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { productList } from "../Cards/productList";

function Body() {
  const data = productList;

  const [products, setProducts] = useState(productList);
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(productList);
      return;
    }
    const filterBySearch = productList.filter((item) => {
      if (item.includes(searchVal.toLowerCase())) {
        return item.id;
      }
    });
    setProducts(filterBySearch);
  }
  const mystyle = {
    marginTop: "20px",
    fontWeight: "700",
  };
  return (
    <div>
      <div className="marketData">Market Details</div>
      <div className="marketDetailsData">
        <div className="insideMarketData">
          <a className="marketDetailsDataInside" href="">
            HALDIPT
          </a>
        </div>
        <div className="insideMarketData">
          <a className="marketDetailsDataInside" href="">
            INDOGUJ
          </a>
        </div>
        <div className="insideMarketData">
          <a className="marketDetailsDataInside" href="">
            HAZMAG
          </a>
        </div>
        <div className="insideMarketData">
          <a className="marketDetailsDataInside" href="">
            ENNKAPT
          </a>
        </div>
        <div className="insideMarketData">
          <a className="marketDetailsDataInside" href="">
            USAGUJ
          </a>
        </div>
      </div>
      <div className="belowNav">
        <div>
          <div></div>
        </div>
        <div>
          <div>
            <div className="searchDataMain" style={mystyle}>
              <input
                placeholder="search by Vessel, Type, etc..."
                className="searchData"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>
              <BsSearch onClick={handleSearchClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
