#pragma warning disable

namespace Sobrino_Mario_Project4.Models
{
    //Game object class containing information per game
    public class Game
    {
        //property to determine if game is neutral
        public bool neutral { get; set; }
        //property containing Team name for the Visiting Team
        public string visTeamName { get; set; }
        //property containing the stats object for the visitng team
        public Stats visStats { get; set; }
        //property containing Team name for the home team
        public string homeTeamName { get; set; }
        //property containing the stats object for the home team
        public Stats homeStats { get; set; }
        //property determining if the stats are final
        public bool isFinal { get; set; }
        //property containing the date of the game
        public string date { get; set; }
    }
}
