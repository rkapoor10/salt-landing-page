import { useState } from "react";
import "./CurrencyConvertor.css";
import { BsArrowRightShort } from "react-icons/bs";
import { conversionApi } from "../../utilities/conversionApi";
import { Loader } from "../../utilities/Components/Loader/Loader";

export const CurrencyConvertor = () => {
  const [inputs, setInputs] = useState({ to: "INR", from: "INR", amt: "" });
  const [response, setResponse] = useState({
    to: "",
    from: "",
    result: "",
    rate: "",
  });
  const [loading, setLoading] = useState(false);
  const requestApiHandler = async () => {
    setLoading("block");
    const { to, from, result, rate } = await conversionApi(inputs);
    setResponse({ to, from, result, rate });
    setLoading(false);
  };
  return (
    <div className="currency-convertor-container">
      <div className="convertor-container">
        <div className="flex flex-center flex-gap-1rem">
          <div className="input-group">
            <label htmlFor="input">Amount</label>
            <input
              type="number"
              min="0"
              id="input"
              name="input"
              placeholder="Enter Amount"
              onChange={(event) =>
                setInputs({ ...inputs, amt: event.target.value })
              }
            />
          </div>
          <select
            name="currency"
            id="currency"
            className="currency-dropdown"
            onChange={(event) =>
              setInputs({ ...inputs, from: event.target.value })
            }
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <button onClick={requestApiHandler}>
          {loading ? <Loader /> : <BsArrowRightShort className="blue-arrow" />}
        </button>
        <div className="flex flex-center flex-gap-1rem">
          <select
            name="currency"
            id="currency"
            className="currency-dropdown"
            onChange={(event) =>
              setInputs({ ...inputs, to: event.target.value })
            }
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          <div className="output-group">
            <label>Amount</label>
            <div className="output-amount">{response.result}</div>
          </div>
        </div>
      </div>
      <div className="conversion-rate">
        <img src="./assets/sheildicon.svg" alt="sheild" />
        {response.rate && (
          <p>
            Conversion rate of : 1 {response.from} = {response.rate}{" "}
            {response.to}
          </p>
        )}
      </div>
    </div>
  );
};
