import React, { Component } from 'react';

export class Records extends Component {
    static displayName = Records.name;

    constructor(props) {
        super(props);
        this.state = { records: [], loading: true };
    }

    componentDidMount() {
        this.populateTable();
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
            : Records.renderRecordsTable(this.state.records);

        return (
            <div>
                <h1 id="tabelLabel" >Season Records</h1>
                <p>Here is listed the season records for each team.</p>
                {contents}
            </div>
        );
    }

    async populateTable() {
        const response = await fetch('records');
        const data = await response.json();
        this.setState({ records: data, loading: false });
    }
}
