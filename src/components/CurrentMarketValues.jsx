import React from 'react';

const CurrentMarketValues = (props) => {
    const {data} = props;
    return(
        <div id="current-market">
            <h1 className="page-title">
                Top 20 Currencies
            </h1>
            <ul className="coin-list">
                {data.map((coin, i)=>{
                    return(
                        <li key={i} className="single-coin">
                            <div className="top-text">
                                <p className="name">{coin.name} ({coin.symbol})</p>
                                <p className="price-change" style={{color: coin.percent_change_1h > 0 ? 'green' : '#e74c3c'}}>{coin.percent_change_1h}%</p>
                            </div>
                            <div className="bottom-text">
                                <p className="price-btc">Price In BTC: {coin.price_btc}</p>
                                <p className="price">USD: ${coin.price_usd}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CurrentMarketValues;