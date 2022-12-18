import React, { Component } from 'react';

export class RecordsFiltered extends Component {
    static displayName = RecordsFiltered.name;

    constructor(props) {
        super(props);
        this.state = { records: [], loading: true, value: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.populateTable();
    }

    componentDidUpdate(preProps, prevState) {

        if (prevState.value != this.state.value) {
            if (this.state.value == 0) {
                this.populateTable();
            }
            else {
                this.populateFilteredTable(this.state.value);
            }
       }
    }

    handleChange(event) {
        this.setState({ records: [], loading: true, value: event.target.value })
    }

    static renderRecordsTable(records) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Team Code</th>
                        <th>Total Games Played</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(records =>
                        <tr>
                            <td>{records.teamName}</td>
                            <td>{records.teamCode}</td>
                            <td>{records.totalGames}</td>
                            <td>{records.wins}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : RecordsFiltered.renderRecordsTable(this.state.records);

        return (
            <div>
                <h1 id="tabelLabel" >Season Records</h1>
                <p>Here is listed the season records for each team. You can use the drop down to filter which team record you would like to see.</p>

                <label>
                    <select onChange={this.handleChange}>
                        <option value="0">All</option>
                        <option value="1">Cardinals</option>
                        <option value="2">Falcons</option>
                        <option value="3">Ravens</option>
                        <option value="4">Bills</option>
                        <option value="5">Panthers</option>
                        <option value="6">Bears</option>
                        <option value="7">Browns</option>
                        <option value="8">Cowboys</option>
                        <option value="9">Broncos</option>
                        <option value="10">Lions</option>
                        <option value="11">Packers</option>
                        <option value="12">Giants</option>
                        <option value="13">Colts</option>
                        <option value="14">Jaguars</option>
                        <option value="15">Chiefs</option>
                        <option value="16">Dolphins</option>
                        <option value="17">Vikings</option>
                        <option value="18">Patriots</option>
                        <option value="19">Saints</option>
                        <option value="20">Jets</option>
                        <option value="21">Raiders</option>
                        <option value="22">Eagles</option>
                        <option value="23">Steelers</option>
                        <option value="24">Chargers</option>
                        <option value="25">Seahawks</option>
                        <option value="26">49ers</option>
                        <option value="27">Rams</option>
                        <option value="28">Buccaneers</option>
                        <option value="29">Titans</option>
                        <option value="30">Washington</option>
                        <option value="31">Bengals</option>
                        <option value="32">Texans</option>

                    </select>
                </label>

                {contents}
            </div>
        );
    }

    async populateFilteredTable(id) {
        const response = await fetch('records/' + id);
        const data = await response.json();
        this.setState({ records: data, loading: false });
    }

    async populateTable() {
        const response = await fetch('records');
        const data = await response.json();
        this.setState({ records: data, loading: false });
    }
}
