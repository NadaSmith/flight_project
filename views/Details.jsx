const React = require('react');
const DefaultLayout = require('../Default');

class Details extends React.Component {
  render() {
    //make sure to receive the flights prop
    const { flights } = this.props;
    return (
      <DefaultLayout>
        <div>
            
            <div>
                <h2>Flight Details</h2>
                <p>Airline: {flight.airline}</p>
                <p>Flight Number: {flight.flightNo}</p>
        
                <h3>Destinations</h3>
                <ul>
                    {flight.destinations.slice().sort((a, b) => a.arrival - b.arrival).map(destination => (
                    <li key={destination._id}>
                        {destination.airport} - {destination.arrival}
                    </li>
                    ))}
                </ul>
        
                <h3>Add Destination</h3>
                <form action={`/flights/${flight._id}/add-destination`} method="POST">
                    <label htmlFor="newAirport">New Destination Airport:</label>
                    <select name="newAirport" id="newAirport">
                        <option value="AUS" disabled={flight.destinations.some(dest => dest.airport === 'AUS')}>AUS</option>
                        <option value="DAL" disabled={flight.destinations.some(dest => dest.airport === 'DAL')}>DAL</option>
                        <option value="LAX" disabled={flight.destinations.some(dest => dest.airport === 'LAX')}>LAX</option>
                        <option value="SAN" disabled={flight.destinations.some(dest => dest.airport === 'SAN')}>SAX</option>
                        <option value="SEA" disabled={flight.destinations.some(dest => dest.airport === 'SEA')}>SEA</option>
                    </select>
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

module.exports = Details;