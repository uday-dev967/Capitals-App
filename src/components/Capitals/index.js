import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Opt = props => {
  const {city} = props
  const {id, capitalDisplayText} = city

  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {newCity: countryAndCapitalsList[0].id}

  onClikcUpdate = event => {
    this.setState({newCity: event.target.value})
  }

  render() {
    console.log(this.state)
    const {newCity} = this.state
    const cityDetails = countryAndCapitalsList.filter(
      each => each.id === newCity,
    )
    console.log(cityDetails)
    const {country} = cityDetails[0]
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select className="select" onChange={this.onClikcUpdate}>
              {countryAndCapitalsList.map(each => (
                <Opt
                  city={each}
                  key={each.id}
                  onClikcUpdate={this.onClikcUpdate}
                />
              ))}
            </select>
            <p className="para"> is Capital of which Country?</p>
          </div>
          <h1 className="heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
