import React, { useState, useEffect } from "react";
import "../styles/ViewStocks.css"; 
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ViewStocks = () => {
  const [stockData, setStockData] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [querySymbol, setQuerySymbol] = useState("");

  useEffect(() => {
    if (querySymbol) {
      fetchStockData(querySymbol)
        .then((data) => setStockData(data))
        .catch((error) => console.error(error));
    }
  }, [querySymbol]);

  const fetchStockData = async (symbol) => {
    const API_KEY = "2ICKGPN1O60RGDYN";
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

/*
Stock info comes from alpha vantage in the following format:
{
    "Global Quote": {
        "01. symbol": "TSLA",
        "02. open": "172.5500",
        "03. high": "174.4300",
        "04. low": "166.6800",
        "05. price": "168.5400",
        "06. volume": "119840693",
        "07. latest trading day": "2023-05-10",
        "08. previous close": "169.1500",
        "09. change": "-0.6100",
        "10. change percent": "-0.3606%"
    }
}
*/

    const stock = {
      symbol: data["Global Quote"]["01. symbol"],
      price: parseFloat(data["Global Quote"]["05. price"]).toFixed(2),
      change: parseFloat(data["Global Quote"]["09. change"]).toFixed(2),
    };

    return [stock];
  };

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleQuerySymbol = () => {
    if (symbol) {
      setQuerySymbol(symbol);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && symbol) {
      setQuerySymbol(symbol);
    }
  };

  return (
    <div className="viewStocks">
      <h1 className="StocksHeader">Stock Market</h1>

      <div className="inputContainer">
      <Nav className="me-auto">
        <Link className="linktoStocks" to="../StockList"> Stock Symbol </Link>
        </Nav>
      
        <input
          id="symbolInput"
          type="text"
          value={symbol}
          onChange={handleSymbolChange}
          onClick={handleKeyPress}
        />
        <button type="submit" onClick={handleQuerySymbol}>Submit</button>
      </div>

      <div className="stocksContainer">
        {stockData.map((stock) => (
          <div className="stock" key={stock.symbol}>
            <div className="stockSymbol">{stock.symbol}</div>
            <div className="stockPrice">{stock.price} USD</div>
            <div className="stockChange"> {stock.change}
              <div
                className={`arrow ${stock.change >= 0 ? "up" : "down"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewStocks;
