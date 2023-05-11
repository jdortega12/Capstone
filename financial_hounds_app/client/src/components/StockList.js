import React, { useState } from "react";
import "../styles/StockList.css"; 
const ViewStocks = () => {
  const [stockData] = useState([
    { symbol: "AAPL", companyName: "Apple", industry: "Consumer Electronics", marketCap: "2,729.79B" },
    { symbol: "MSFT", companyName: "Microsoft", industry: "Software - Infrastructure", marketCap: "2,322.18B" },
    { symbol: "GOOG", companyName: "Alphabet", industry: "Internet Content & Information", marketCap: "1,422.30B" },
    { symbol: "GOOGL", companyName: "Alphabet", industry: "Internet Content & Information", marketCap: "1,421.75B" },
    { symbol: "AMZN", companyName: "Amazon.com", industry: "Internet Retail", marketCap: "1,130.59B" },
    { symbol: "NVDA", companyName: "NVIDIA", industry: "Semiconductors", marketCap: "713.46B" },
    { symbol: "BRK.B", companyName: "Berkshire Hathaway", industry: "Insurance - Diversified", marketCap: "706.47B" },
    { symbol: "BRK.A", companyName: "Berkshire Hathaway", industry: "Insurance - Diversified", marketCap: "706.18B" },
    { symbol: "META", companyName: "Meta Platforms", industry: "Internet Content & Information", marketCap: "597.32B" },
    { symbol: "TSLA", companyName: "Tesla", industry: "Auto Manufacturers", marketCap: "534.19B" },
    { symbol: "V", companyName: "Visa Inc.", industry: "Credit Services", marketCap: "484.37B" },
    { symbol: "UNH", companyName: "UnitedHealth Group", industry: "Healthcare Plans", marketCap: "456.27B" },
    { symbol: "TSM", companyName: "Taiwan Semiconductor Manufacturing Company", industry: "Semiconductors", marketCap: "440.30B" },
    { symbol: "XOM", companyName: "Exxon Mobil", industry: "Oil & Gas Integrated", marketCap: "435.59B" },
    { symbol: "JNJ", companyName: "Johnson & Johnson", industry: "Drug Manufacturers - General", marketCap: "420.08B" },
    { symbol: "LLY", companyName: "Eli Lilly and Company", industry: "Drug Manufacturers - General", marketCap: "413.81B" },
    { symbol: "WMT", companyName: "Walmart", industry: "Discount Stores", marketCap: "411.48B" },
    { symbol: "JPM", companyName: "JPMorgan Chase & Co.", industry: "Banks - Diversified", marketCap: "398.83B" },
    { symbol: "NVO", companyName: "Novo Nordisk", industry: "Biotechnology", marketCap: "376.60B" },
    { symbol: "PG", companyName: "The Procter & Gamble Company", industry: "Household & Personal Products", marketCap: "363.04B" },
    { symbol: "MA", companyName: "Mastercard", industry: "Credit Services", marketCap: "359.66B" },
    { symbol: "MRK", companyName: "Merck & Co.", industry: "Drug Manufacturers - General", marketCap: "299.16B" },
    { symbol: "CVX", companyName: "Chevron", industry: "Oil & Gas Integrated", marketCap: "297.63B" },
  ]);

  return (
    <div className="viewStocks">
      <h1 className="StocksHeader">Stock Market</h1>

      <table className="stockTable">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Industry</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.companyName}</td>
              <td>{stock.industry}</td>
              <td>{stock.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStocks;
