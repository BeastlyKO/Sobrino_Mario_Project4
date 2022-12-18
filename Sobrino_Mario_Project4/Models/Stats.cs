#pragma warning disable


namespace Sobrino_Mario_Project4.Models
{
    //Stats object class contains information of each team per game
    public class Stats
    {
        //property containing stat ID code
        public string statIDCode { get; set; }
        //property containing game code
        public string gameCode { get; set; }
        //property containing team code
        public int teamCode { get; set; }
        //property containing the date of the game
        public string gameDate { get; set; }
        //property containing rush yards
        public int rushYds { get; set; }
        //property containing the rush attempts
        public int rushAtt { get; set; }
        //property containing the passing yards
        public int passYds { get; set; }
        //property containing passing attempts
        public int passATT { get; set; }
        //property containing passing completions
        public int passComp { get; set; }
        //property containing number of penalities
        public int penalties { get; set; }
        //property containing pentaly yards
        public int penaltYds { get; set; }
        //property containing the amount of times the team lost a fumble
        public int fumblesLost { get; set; }
        //property containing number of times team throw was intercepted
        public int interceptionsThrown { get; set; }
        //property containing first downs
        public int firstDowns { get; set; }
        //property containing third down attempts
        public int thirdDownAtt { get; set; }
        //property containing third down conversions
        public int thirdDownConver { get; set; }
        //property containing fourth down attempts
        public int fourthDownAtt { get; set; }
        //property containing fourth down conversions
        public int fourthDownConver { get; set; }
        //proptery containing time which team possessed ball
        public int timePoss { get; set; }
        //property containing score
        public int score { get; set; }
    }
}
