const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    //make sure to receive the flights prop
    const { flights } = this.props;
    return (
      <DefaultLayout>
        <div>
            <a href='/flights/new'><button>Create a New Flight</button></a>
            <h1>All Flights</h1>
            <ul>
                {flights.map(flight => (
                    <li className={flight.departs < new Date() ? 'red-text' : ''} key={flight._id}>
                        {flight.airline} Flight {flight.flightNo} | Departure: {flight.departs}
                    </li>
                ))}
            </ul>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;