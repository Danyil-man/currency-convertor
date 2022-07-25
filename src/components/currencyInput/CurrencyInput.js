import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = ({
  amount,
  currencies,
  currency,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="container">
      <div className="group">
        <input
          type="number"
          className="currency__input"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <select
          value={currency}
          className="currency__select"
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((currency) => (
            <option className="currency" key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
