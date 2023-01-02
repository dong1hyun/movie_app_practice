import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [USD, setUSD] = useState(0);
  const onChange = (event) => setUSD(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json()) // JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다.
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : (
        <div>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))};
          </select>
          <h3>How much USD do you have</h3>
          <input onChange={onChange} placeholder="USD" />
          <h2>You can buy {Math.round(USD / coins[0].quotes.USD.price)} BTC</h2>
        </div>
      )}
    </div>
  );
}

export default App;