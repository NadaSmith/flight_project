const React = require('react');
const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>Add New Flight</h1>
                <form action="/flights" method="POST">
                    <label> Select Aiport:</label>
                        <select for='airport' id='airport'>
                            <option value="AUS">AUS</option>
                            <option value="DAL">DAL</option>
                            <option value="LAX">LAX</option>
                            <option value="SAN">SAN</option>
                            <option value="SEA">SEA</option>
                        </select>
                    <fieldset>
                        <legend>Create a New Flight</legend>
                        <label>
                            Airline:<input type="text" name="airline" placeholder="enter airline name" />
                        </label>
                        <label>
                            Flight Number:<input type="text" name="flightNo" placeholder="enter fruit name" />
                        </label>
                        <label> Departure Date:<input type="datetime-local" name='departs' /> </label>
                    </fieldset>
                    <input type="submit" value="create New Flight" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;