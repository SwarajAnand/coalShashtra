import React, { useState } from "react";
import "./contact.css";

const formFields = [
  { name: "vessel", label: "Vessel's" },
  { name: "quantity", label: "Quantity" },
  { name: "offerPrice", label: "Offer Price" },
  { name: "payment", label: "Payment Terms" },
  { name: "advance", label: "Advance" },
  { name: "balance", label: "Balance" },
  { name: "noOfPymt", label: "No of Payment Days" },
  { name: "liftingDay", label: "Lifting Days" },
  { name: "expiry", label: "Expiry" },
];

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

  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Validate the input field
    const updatedErrors = { ...errors };
    if (value.trim() === "") {
      updatedErrors[name] = "This field is required.";
    } else {
      delete updatedErrors[name];
    }
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    const updatedErrors = {};
    formFields.forEach((field) => {
      if (user[field.name].trim() === "") {
        updatedErrors[field.name] = "This field is required.";
      }
    });

    if (Object.keys(updatedErrors).length > 0) {
      setErrors(updatedErrors);
    } else {
      setTableData([...tableData, user]);
      setUser({
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
      setErrors({});
    }
  };

  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className={`accordion ${isAccordionOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion}>
          Buy
        </div>
        <div className="accordion-content">
          <form className="contact">
            <div className="formBox">
              {formFields.map((field) => (
                <div className="formBox1" key={field.name}>
                  <div className="formBoxTag">{field.label}</div>
                  <div>
                    <input
                      name={field.name}
                      className="formBoxInput"
                      type="text"
                      value={user[field.name]}
                      onChange={handleInput}
                    />
                    {errors[field.name] && (
                      <div className="error">{errors[field.name]}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              {formFields.map((field) => (
                <th key={field.name}>{field.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                {formFields.map((field) => (
                  <td key={field.name}>{data[field.name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Contact;
