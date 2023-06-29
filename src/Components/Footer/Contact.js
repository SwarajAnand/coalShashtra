import React from "react";
import "./contact.css";
import { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    vessel: "",
    quantity: "",
    offerPrice: "",
    payment: "",
    advance: "",
    balance: "",
    noOfPymt: "",
    liftingDay: "",
    expiry: "",
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form className="contact">
        <div>Buy</div>
        <div className="formBox">
          <div className="formBox1">
            <div className="formBoxTag">Vessel's</div>
            <div>
              <input
                name="vessel"
                className="formBoxInput"
                type="text"
                value={user.vessel}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Quantity</div>
            <div>
              <input
                name="quantity"
                className="formBoxInput"
                type="text"
                value={user.quantity}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Offer Price</div>
            <div>
              <input
                name="offerPrice"
                className="formBoxInput"
                type="text"
                value={user.offerPrice}
                onChange={handleInput}
              ></input>
            </div>
          </div>
        </div>

        <div className="formBox">
          <div className="formBox1">
            <div className="formBoxTag">Payment Terms</div>
            <div>
              <input
                name="payment"
                className="formBoxInput"
                type="text"
                value={user.payment}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Advance</div>
            <div>
              <input
                name="advance"
                className="formBoxInput"
                type="text"
                value={user.advance}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Balance</div>
            <div>
              <input
                name="balance"
                className="formBoxInput"
                type="text"
                value={user.balance}
                onChange={handleInput}
              ></input>
            </div>
          </div>
        </div>

        <div className="formBox">
          <div className="formBox1">
            <div className="formBoxTag">No of Payment Days</div>
            <div>
              <input
                name="noOfPymt"
                className="formBoxInput"
                type="text"
                value={user.noOfPymt}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Lifting Days </div>
            <div>
              <input
                name="liftingDay"
                className="formBoxInput"
                type="text"
                value={user.liftingDay}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="formBox1">
            <div className="formBoxTag">Expiry</div>
            <div>
              <input
                name="expiry"
                className="formBoxInput"
                type="text"
                value={user.expiry}
                onChange={handleInput}
              ></input>
            </div>
          </div>
        </div>

        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
