import React from "react";
import "./CurrencyConvertor.css";
import { BsArrowRightShort } from "react-icons/bs";

export const CurrencyConvertor = () => {
  return (
    <div className="currency-convertor-container">
      <div className="convertor-container">
        <div className="flex flex-center">
          <div className="input-group">
            <label htmlFor="input">Amount</label>
            <input
              type="number"
              min="0"
              id="input"
              name="input"
              placeholder="Enter Amount"
            />
          </div>
          <select name="currency" id="currency" className="currency-dropdown">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <button>
          <BsArrowRightShort className="blue-arrow" />
        </button>
        <div className="flex flex-center flex-gap">
          <select name="currency" id="currency" className="currency-dropdown">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          <div className="input-group">
            <label htmlFor="input">Amount</label>
            <input
              type="number"
              min="0"
              id="input"
              name="input"
              placeholder="Enter Amount"
            />
          </div>
        </div>
      </div>
      <div className="conversion-rate">
        <img src="./assets/sheildicon.svg" alt="sheild" />
        <p>Conversion rate of : 1 USD = 75 INR</p>
      </div>
    </div>
  );
};
