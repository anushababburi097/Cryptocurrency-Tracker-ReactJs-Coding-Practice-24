// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {currencyeList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    console.log(this.props)
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    // console.log(data)

    const updatedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))

    this.setState({currencyeList: updatedData, isLoading: false})
  }

  renderCurrencyList() {
    const {currencyeList} = this.state

    return <CryptocurrenciesList currencyeList={currencyeList} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? this.renderLoader() : this.renderCurrencyList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
