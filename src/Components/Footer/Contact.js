import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const validationSchema = Yup.object().shape({
  vessel: Yup.string().required("Vessel is required"),
  quantity: Yup.string().required("Quantity is required"),
  offerPrice: Yup.string().required("Offer Price is required"),
  payment: Yup.string().required("Payment Terms is required"),
  advance: Yup.string().required("Advance is required"),
  balance: Yup.string().required("Balance is required"),
  noOfPymt: Yup.string().required("No of Payment Days is required"),
  liftingDay: Yup.string().required("Lifting Days is required"),
  expiry: Yup.string().required("Expiry is required"),
});

function Contact() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (values, { resetForm }) => {
    setTableData([...tableData, values]);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      vessel: "",
      quantity: "",
      offerPrice: "",
      payment: "",
      advance: "",
      balance: "",
      noOfPymt: "",
      liftingDay: "",
      expiry: "",
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

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
          <form className="contact" onSubmit={formik.handleSubmit}>
            <div className="formBox">
              {formFields.map((field) => (
                <div className="formBox1" key={field.name}>
                  <div className="formBoxTag">{field.label}</div>
                  <div>
                    <input
                      name={field.name}
                      className="formBoxInput"
                      type="text"
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[field.name] &&
                      formik.errors[field.name] && (
                        <div className="error">{formik.errors[field.name]}</div>
                      )}
                  </div>
                </div>
              ))}
            </div>

            <button className="submitButton" type="submit">
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
