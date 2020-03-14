import React from 'react';
// import Chart from './chart.js'
import SimpleMap from './map.js';
import CountyTable from './table.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Sick Chart Bro",
            positiveXValues: [],
            timeYValues: [],
        }
    }

    // https://www.cdc.gov/coronavirus/2019-ncov/cases-in-us.html - coronavirus in usa
    createCharTable() {
        const dict = require('./i20200313.json')

        const table = (
            <div>
                <table>
                    <tr>
                        <th>Characteristic</th>
                        <th>Count</th>
                    </tr>
                    <tr>
                        <th scope="col">Gender</th>
                    </tr>
                    <tr>
                        <th scope="row">Male</th>
                        <td>{dict["Male"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Female</th>
                        <td>{dict["Female"]}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                    </tr>
                    <tr>
                        <th scope="row">Under 20</th>
                        <td>{dict["Under 20"]}</td>

                    </tr>
                    <tr>
                        <th scope="row">20-29</th>
                        <td>{dict["20-29"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">30-39</th>
                        <td>{dict["Under 20"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">40-49</th>
                        <td>{dict["Under 20"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">50-59</th>
                        <td>{dict["50-59"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">60-69</th>
                        <td>{dict["60-69"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">70-older</th>
                        <td>{dict["70-older"]}</td>
                    </tr>
                </table>
            </div>
        )
        return (table)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <h1>Counties with Positive Cases as of March 13th, 2020</h1>
                <SimpleMap></SimpleMap>
                <CountyTable
                ></CountyTable>
                {/* {this.createCharTable()} */}
                {/* <Chart
                    title={this.state.title}
                    positiveXValues={this.state.positiveXValues}
                    timeYValues={this.state.timeYValues}
                ></Chart> */}
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        //temp
    }
}




export default App;
