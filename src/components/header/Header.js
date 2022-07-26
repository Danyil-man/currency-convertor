import React, { useEffect, useState } from "react";
import { CURRENCY } from "../../constants/currency";
import { HEADER_NAME } from "../../constants/header";
import format from "../../services/formater";
import "./Header.css";

const Header = ({ currencies }) => {
  const [EUR, setEUR] = useState(1);
  const [USD, setUSD] = useState(1);
  const [currency1, setCurrency1] = useState(CURRENCY.USD);
  const [currency2, setCurrency2] = useState(CURRENCY.UAH);
  const [currency3, setCurrency3] = useState(CURRENCY.EUR);

  const setUSDAmount = (amount) => {
    setUSD(format((amount * currencies[currency2]) / currencies[currency1]));
  };
  const setEURAmount = (amount) => {
    setEUR(format((amount * currencies[currency2]) / currencies[currency3]));
  };

  useEffect(() => {
    setUSDAmount(1);
    setEURAmount(1);
  }, [currencies]);

  return (
    <div className="currency__container">
      <h2 className="currency__header">{HEADER_NAME}</h2>
      <div className="currency__block">
        <h4 className="currencyValue">{CURRENCY.USD}: {USD}</h4>
        <h4 className="currencyValue">{CURRENCY.EUR}: {EUR}</h4>
      </div>
    </div>
  );
};

export default Header;
