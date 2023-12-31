const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    //make sure to receive the flights prop
    const { flights } = this.props;
    return (
      <DefaultLayout>
        <div>
            
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
            <div>
                <h2>Flight Details</h2>
                <p>Airline: {flight.airline}</p>
                <p>Flight Number: {flight.flightNo}</p>
        
                <h3>Destinations</h3>
                <ul>
                    {flight.destinations.map(destination => (
                    <li key={destination._id}>
                        {destination.airport} - {destination.arrival}
                    </li>
                    ))}
                </ul>
        
                <h3>Add Destination</h3>
                <form action={`/flights/${flight._id}/add-destination`} method="POST">
                    <label htmlFor="newAirport">New Destination Airport:</label>
                    <input type="text" name="newAirport" id="newAirport" />
                    <label htmlFor="newArrivalDate">New Arrival Date:</label>
                    <input type="datetime-local" name="newArrivalDate" id="newArrivalDate" />
                    <button type="submit">Add Destination</button>
                </form>
            </div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;