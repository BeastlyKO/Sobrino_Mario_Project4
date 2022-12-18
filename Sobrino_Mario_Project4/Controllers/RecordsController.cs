using Microsoft.AspNetCore.Mvc;
using Sobrino_Mario_Project4.Models;
using System.Net.Http.Headers;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sobrino_Mario_Project4.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class RecordsController : ControllerBase
    {
        // GET: <RecordsController>
        [HttpGet]
        public async Task<IEnumerable<TeamRecord>> Get()
        {   
            List<TeamRecord> records = new List<TeamRecord>();

            for (int i = 1; i < 33; i++) {
                records.Add(await processTeamSeasonRecord(i));
            }

            return records;
        }

        // GET <RecordsController>/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<TeamRecord>> Get(int id)
        {
            List<TeamRecord> records = new List<TeamRecord>();
            records.Add(await processTeamSeasonRecord(id));
            return records;
        }


        private static async Task<GamesList> getGames(int teamCode)
        {

            GamesList games = null;

            // block whichs sends HTTP GET request to API using the HttpClient Object which makes connection
            using (HttpClient client = new HttpClient())
            {
                //intialize the response object
                HttpResponseMessage response = new HttpResponseMessage();

                //sets the json type to be expected from GET request
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                //sends GET to API to retrieve a response
                //the await is used to suspend the method until the client has received something back from the API.
                //This prevents the use of response in the case the client has not yet retrieved it's information.
                response =
                      await client.GetAsync("https://sports.snoozle.net/search/nfl/searchHandler?fileType=inline&statType=teamStats&season=2020&teamName=" +
                      teamCode).ConfigureAwait(false);

                //confirms if it was able to successfully obtain response
                if (response.IsSuccessStatusCode)
                {
                    //Read reponse and convert to string
                    string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);

                    // parses json
                    games = JsonSerializer.Deserialize<GamesList>(json);

                }
                    //prints error message in case the API call was unsuccessful
                else
                {
                    Console.WriteLine("Was unable to obtain information from API");
                }
                

                return games;
            }
        }




        //method which processes and prints out tema information gained from API
        private async Task<TeamRecord> processTeamSeasonRecord(int teamNumber)
        {
            TeamRecord team = new TeamRecord();

            //counter to track the amount of wins a Team has gathered for a season
            int winCounter = 0;

            GamesList games = await getGames(teamNumber);

            
            //checks if home team code matches with the team number passed through
            if (games.matchUpStats[0].homeStats.teamCode == teamNumber)
            {
                team.teamName = games.matchUpStats[0].homeTeamName;
                team.teamCode = games.matchUpStats[0].homeStats.teamCode;
            }
            // checks if visiting team's code matches with the Team number which was passed through
            else
            {
                team.teamName = games.matchUpStats[0].visTeamName;
                team.teamCode = games.matchUpStats[0].visStats.teamCode;
            }

            //For loop gonig through each game to confirm if the team has won
            foreach (var game in games.matchUpStats)
            {
                //gets stats for home team
                Stats home = game.homeStats;
                //gets stats for visiting team
                Stats visitor = game.visStats;

                //checks if the home team won and is the team with the team code which was passed through
                if (home.score > visitor.score && home.teamCode == teamNumber)
                {
                    winCounter++;
                }
                //checks if the vising team won and is the team with the team code which was passed through
                else if (home.score < visitor.score && visitor.teamCode == teamNumber)
                {
                    winCounter++;
                }
            }
            team.totalGames = games.matchUpStats.Count;

            team.wins = winCounter;

            return team;

        }

    }
}
