import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Welcome to Project 4</h1>
                <p>This projects displays the data from CSE 681 Project 2 in a web page.
                    The application sends a Get request to the API using C# web api and then displays the information retrieved in a table on the page.
                    This project is to disply multicore and multithread programming. The logic behind is in the UI section, which is running react,
                    it will send a request to the back end to aquire data from the API. The back, which is using C# Web API, will sent a GET request
                    to the API adn the server will return the data. The front end thread will then handle displaying the data which the back end provides.
                </p>

                <p>The "Records" Page displays a table of 20202 Season record for each team.
                    The "Records Button" page has a button which when pressed on will change the loading text a table of each team season's record.
                    The "Record Filtered" page, contains a dropdown list which will filter the table depending on the team the user selects. This demonstrates
                    with each selection, the presentation thread will communicate with the fetch thread to gather data only for the team specified by the user's
                    dropdown selection.
                </p>
                    
            </div>
        );
    }
}
