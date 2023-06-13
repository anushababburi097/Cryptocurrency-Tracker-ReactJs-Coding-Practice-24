// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCurrencyHeader = () => (
    <div className="list-item-header">
      <p className="coin-type-heading">Coin Type</p>
      <div className="currency-items">
        <p className="coin-heading">USD</p>
        <p className="coin-heading">EURO</p>
      </div>
    </div>
  )

  renderCurrencyView() {
    const {currencyeList} = this.props
    return (
      <div className="currency-list-container">
        {this.renderCurrencyHeader()}
        <ul className="cryptocurrencies-list">
          {currencyeList.map(each => (
            <CryptocurrencyItem key={each.id} cryptocurrencyDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderCurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
