import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import CurrencyInput from "./components/currencyInput/CurrencyInput";
import format from "./services/formater";
import { CURRENCY } from "./constants/currency";

const App = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [USD, setUSD] = useState(CURRENCY.USD);
  const [UAH, setUAH] = useState(CURRENCY.UAH);
  const [rates, setRates] = useState([]);

  const fetchCurrencies = async () =>{
    const response = await axios.get("http://data.fixer.io/api/latest?access_key=57a6ba23b4a3e503c9da85957df5e262");
    setRates(response.data.rates)
  }

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (!!rates) {
      changeAmoutFrom(1);
    }
  }, [rates]);

  const changeAmoutFrom = (amount1) => {
    setAmount2(format((amount1 * rates[UAH]) / rates[USD]));
    setAmount1(amount1);
  }
  const changeCurrencyFrom = (currency1) => {
    setAmount2(format((amount1 * rates[UAH]) / rates[currency1]));
    setUSD(currency1);
  }

  const changeAmoutFrom2 = (amount2) => {
    setAmount1(format((amount2 * rates[USD]) / rates[UAH]));
    setAmount2(amount2);
  }
  const changeCurrencyFrom2 = (currency2) => {
    setAmount1(format((amount2 * rates[USD]) / rates[currency2]));
    setUAH(currency2);
  }

  return (
    <div className="App">
      <Header currencies={rates} />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={USD}
        onAmountChange={changeAmoutFrom}
        onCurrencyChange={changeCurrencyFrom}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={UAH}
        onAmountChange={changeAmoutFrom2}
        onCurrencyChange={changeCurrencyFrom2}
      />
    </div>
  );
}

export default App;
