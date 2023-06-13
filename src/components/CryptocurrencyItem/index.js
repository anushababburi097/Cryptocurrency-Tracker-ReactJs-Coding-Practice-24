// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="currency-items-list">
      <div className="currency-list-names">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
