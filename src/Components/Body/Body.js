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

// import React, { useState } from "react";
// import "./body.css";
// import { BsSearch } from "react-icons/bs";

// const productList = [
//   {
//     id: "HALDIPT",
//     name: "Product 1",
//     country: "Country 1",
//     weight: "Weight 1",
//     buy: "Buy 1",
//     buyAmt: "Buy Amount 1",
//     sell: "Sell 1",
//     sellAmt: "Sell Amount 1",
//     last: "Last 1",
//     lastAmt: "Last Amount 1",
//   },
//   {
//     id: "INDOGUJ",
//     name: "Product 2",
//     country: "Country 2",
//     weight: "Weight 2",
//     buy: "Buy 2",
//     buyAmt: "Buy Amount 2",
//     sell: "Sell 2",
//     sellAmt: "Sell Amount 2",
//     last: "Last 2",
//     lastAmt: "Last Amount 2",
//   },
//   {
//     id: "HAZMAG",
//     name: "Product 3",
//     country: "Country 3",
//     weight: "Weight 3",
//     buy: "Buy 3",
//     buyAmt: "Buy Amount 3",
//     sell: "Sell 3",
//     sellAmt: "Sell Amount 3",
//     last: "Last 3",
//     lastAmt: "Last Amount 3",
//   },
//   {
//     id: "ENNKAPT",
//     name: "Product 4",
//     country: "Country 4",
//     weight: "Weight 4",
//     buy: "Buy 4",
//     buyAmt: "Buy Amount 4",
//     sell: "Sell 4",
//     sellAmt: "Sell Amount 4",
//     last: "Last 4",
//     lastAmt: "Last Amount 4",
//   },
//   {
//     id: "USAGUJ",
//     name: "Product 5",
//     country: "Country 5",
//     weight: "Weight 5",
//     buy: "Buy 5",
//     buyAmt: "Buy Amount 5",
//     sell: "Sell 5",
//     sellAmt: "Sell Amount 5",
//     last: "Last 5",
//     lastAmt: "Last Amount 5",
//   },
//   {
//     id: "HALDIPT",
//     name: "Product 6",
//     country: "Country 6",
//     weight: "Weight 6",
//     buy: "Buy 6",
//     buyAmt: "Buy Amount 6",
//     sell: "Sell 6",
//     sellAmt: "Sell Amount 6",
//     last: "Last 6",
//     lastAmt: "Last Amount 6",
//   },
//   {
//     id: "HALDIPT",
//     name: "Product 7",
//     country: "Country 7",
//     weight: "Weight 7",
//     buy: "Buy 7",
//     buyAmt: "Buy Amount 7",
//     sell: "Sell 7",
//     sellAmt: "Sell Amount 7",
//     last: "Last 7",
//     lastAmt: "Last Amount 7",
//   },
//   {
//     id: "INDOGUJ",
//     name: "Product 8",
//     country: "Country 8",
//     weight: "Weight 8",
//     buy: "Buy 8",
//     buyAmt: "Buy Amount 8",
//     sell: "Sell 8",
//     sellAmt: "Sell Amount 8",
//     last: "Last 8",
//     lastAmt: "Last Amount 8",
//   },
//   {
//     id: "INDOGUJ",
//     name: "Product 9",
//     country: "Country 9",
//     weight: "Weight 9",
//     buy: "Buy 9",
//     buyAmt: "Buy Amount 9",
//     sell: "Sell 9",
//     sellAmt: "Sell Amount 9",
//     last: "Last 9",
//     lastAmt: "Last Amount 9",
//   },
//   {
//     id: "INDOGUJ",
//     name: "Product 10",
//     country: "Country 10",
//     weight: "Weight 10",
//     buy: "Buy 10",
//     buyAmt: "Buy Amount 10",
//     sell: "Sell 10",
//     sellAmt: "Sell Amount 10",
//     last: "Last 10",
//     lastAmt: "Last Amount 10",
//   },
//   {
//     id: "HAZMAG",
//     name: "Product 11",
//     country: "Country 11",
//     weight: "Weight 11",
//     buy: "Buy 11",
//     buyAmt: "Buy Amount 11",
//     sell: "Sell 11",
//     sellAmt: "Sell Amount 11",
//     last: "Last 11",
//     lastAmt: "Last Amount 11",
//   },
//   {
//     id: "HAZMAG",
//     name: "Product 12",
//     country: "Country 12",
//     weight: "Weight 12",
//     buy: "Buy 12",
//     buyAmt: "Buy Amount 12",
//     sell: "Sell 12",
//     sellAmt: "Sell Amount 12",
//     last: "Last 12",
//     lastAmt: "Last Amount 12",
//   },
//   {
//     iid: "HAZMAG",
//     name: "Product 13",
//     country: "Country 13",
//     weight: "Weight 13",
//     buy: "Buy 13",
//     buyAmt: "Buy Amount 13",
//     sell: "Sell 13",
//     sellAmt: "Sell Amount 13",
//     last: "Last 13",
//     lastAmt: "Last Amount 13",
//   },
//   {
//     id: "USAGUJ",
//     name: "Product 14",
//     country: "Country 14",
//     weight: "Weight 14",
//     buy: "Buy 14",
//     buyAmt: "Buy Amount 14",
//     sell: "Sell 14",
//     sellAmt: "Sell Amount 14",
//     last: "Last 14",
//     lastAmt: "Last Amount 14",
//   },
//   {
//     id: "USAGUJ",
//     name: "Product 15",
//     country: "Country 15",
//     weight: "Weight 15",
//     buy: "Buy 15",
//     buyAmt: "Buy Amount 15",
//     sell: "Sell 15",
//     sellAmt: "Sell Amount 15",
//     last: "Last 15",
//     lastAmt: "Last Amount 15",
//   },
// ];

// function Body() {
//   const [searchVal, setSearchVal] = useState("");
//   const [filteredData, setFilteredData] = useState(productList);
//   const [openCardId, setOpenCardId] = useState(null);

//   const handleSearchClick = () => {
//     const filteredData = productList.filter((item) =>
//       String(item.id).toLowerCase().includes(searchVal.toLowerCase())
//     );
//     setSearchVal("");
//     setFilteredData(filteredData);
//   };

//   const handleTagClick = (idTag) => {
//     const filteredData = productList.filter((item) =>
//       item.id === idTag ? item : null
//     );
//     setFilteredData(filteredData);
//   };

//   const mystyle = {
//     marginTop: "20px",
//     fontWeight: "700",
//   };

//   const openCard = (id) => {
//     setOpenCardId(id);
//   };

//   return (
//     <div>
//       <div className="marketData">Market Details</div>
//       <div className="marketDetailsData">
//         {productList.map((product) => (
//           <div className="insideMarketData" key={product.id}>
//             <a
//               className="marketDetailsDataInside"
//               href="#"
//               onClick={() => handleTagClick(product.id)}
//             >
//               {product.id}
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className="belowNav">
//         <div>
//           <div></div>
//         </div>
//         <div>
//           <div>
//             <div className="searchDataMain" style={mystyle}>
//               <input
//                 placeholder="search by Vessel, Type, etc..."
//                 className="searchData"
//                 value={searchVal}
//                 onChange={(e) => setSearchVal(e.target.value)}
//               ></input>
//               <BsSearch onClick={handleSearchClick} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="CardMainBody">
//         <div className="skill-main">
//           {filteredData.map((item) => (
//             <a
//               className={`dataCardBox ${openCardId === item.id ? "open" : ""}`}
//               href="#"
//               key={item.id}
//               onClick={() => openCard(item.id)}
//             >
//               <div>
//                 <div className="skillDiv">
//                   <div>
//                     <h4>
//                       {item.id}
//                       {item.name}
//                     </h4>
//                   </div>
//                   <div className="cardMain">
//                     <div className="cardMainData">{item.country} </div>
//                     <div className="cardMainData">{item.weight} </div>
//                   </div>
//                   <div className="cardMain">
//                     <div>
//                       <div className="cardMainData">{item.buy} </div>
//                       <div className="cardMainData">{item.buyAmt} </div>
//                     </div>
//                     <div>
//                       <div className="cardMainData">{item.sell} </div>
//                       <div className="cardMainData">{item.sellAmt} </div>
//                     </div>
//                     <div>
//                       <div className="cardMainData">{item.last} </div>
//                       <div className="cardMainData">{item.lastAmt} </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//         <div className="leftBigCard">
//           {openCardId && (
//             <div>
//               {/* Render the content of the open card */}
//               {filteredData.map((item) => {
//                 if (item.id === openCardId) {
//                   return (
//                     <div key={item.id}>
//                       <h2>ID: {item.id}</h2>
//                       <p>Name: {item.name}</p>
//                       <p>Country: {item.country}</p>
//                       <p>Weight: {item.weight}</p>
//                       <p>Buy: {item.buy}</p>
//                       <p>Buy Amount: {item.buyAmt}</p>
//                       <p>Sell: {item.sell}</p>
//                       <p>Sell Amount: {item.sellAmt}</p>
//                       <p>Last: {item.last}</p>
//                       <p>Last Amount: {item.lastAmt}</p>
//                       {/* Additional details or components can be added here */}
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Body;
