const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
            <a href='/flights/new'><button>Create a New Flight</button></a>
          {
            this.props.flights.map((flight) => (
              <article>
                <a href={`/flights/${flight._id}`}>
                  <h2>
                    { flight.name } costs { `$${flight.cost}` } and is { flight.calories } Calories!
                  </h2>
                </a>
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;