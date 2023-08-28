const React = require('react');
const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/flights" method="POST">
                    <fieldset>
                        <legend>Create a New Flight</legend>
                        <label>
                            Airline:<input type="text" name="name" placeholder="enter airline name" />
                        </label>
                        <label>
                            Flight Number:<input type="text" name="number" placeholder="enter fruit name" />
                        </label>
                        <label> Departure Date:<input type="datetime-local" /> </label>
                    </fieldset>
                    <input type="submit" value="create New Flight" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;