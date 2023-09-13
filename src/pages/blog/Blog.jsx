import React from "react";
import "./blog.scss";

const data = [
  {
    id: 1,
    heading: "",
    desc: "The world's biggest Pac-Man video games are back. The Pacman arcade game is well recognised with the Pac-man logo and Pac-man ghost.",
  },
  {
    id: 2,
    heading: "About the Game",
    desc: "Holding various Guinness world records, this iconic arcade game is listed as one of the greatest video games of all time",
  },
  {
    id: 3,
    heading: "Characters",
    desc: "This maze action video game is easy for everyone to play. This game has the characters; Pac-man, and the four colored ghosts.",
  },
  {
    id: 4,
    heading: "Pac-Man",
    desc: "The protagonist of the game appears in different roles and in special character designs in more than 30 licensed sequels and spin-offs for multiple platforms",
  },
  {
    id: 5,
    heading: "",
    desc: "Being the official mascot of Bandai Namco Entertainment, his image is used for a mass amount of merchandise and is even included in TV series and singles.",
  },
  {
    id: 6,
    heading: "Ghosts",
    desc: "With the power to end the game with a single touch, four primary ghosts play the role of antagonists in the game. The four named Blinky, Pinky, Inky and Clyde are chaser, speedy, stylist, and pokey respectively",
  },
  {
    id: 7,
    heading: "",
    desc: "The list of ghosts is extended in new versions and sequels of the original game to enhance the game's experience",
  },
  {
    id: 8,
    heading: "How To Play",
    desc: "The player while controlling the protagonist must eat all the dots inside the enclosed maze while avoiding the Pac-Man ghost. By eating large flashing dots, which are called “Power Pellets”, the player gets the advantage of eating the ghosts which temporarily turn into blue for bonus points",
  },
  {
    id: 9,
    heading: "Ms. Pac-Man",
    desc: "As the first sequel to the original game (1980), this game was developed by General Computer Corporation and published by Midway in 1982. Here the player of the game is the former protagonist’s wife. Having a female protagonist and improvements to the original gameplay brought in superior comments than the male protagonist for Ms. Pac-Man.",
  },
  {
    id: 10,
    heading: "",
    desc: "With very similar gameplay and rules as the former game, this game differs from the original game with small enhancements in character designs, maze configurations, sound effects and music",
  },
  {
    id: 11,
    heading: "Google Pac-man",
    desc: "Google is famous for its doodles. The Pacman Doodle by Google for the Pacman 30th anniversary full screen of the game is an interactive game that was released in 2010. This is one of the best and most popular games to play for free.",
  },
  {
    id: 12,
    heading: "",
    desc: "The fully functional HTML5 game is designed in a charming and playful art style that stays true to the original game and gives joy to the players with the faithfully recreated music and sound effects of the classic game",
  },
  {
    id: 12,
    heading: "Release Date",
    desc: "May 2010",
  },
  {
    id: 13,
    heading: "Developer",
    desc: "Google",
  },
  {
    id: 14,
    heading: "Developer",
    desc: "Google",
  },
  {
    id: 15,
    heading: "Platform",
    desc: "Web browser (PC, Mobile, Tablet)",
  },
  {
    id: 16,
    heading: "Platform",
    desc: "Web browser (PC, Mobile, Tablet)",
  },
  {
    id: 17,
    heading: "Controls",
    desc: "Arrow keys to move the player",
  },
  {
    id: 18,
    heading: "Price",
    desc: "Free to play",
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="titles">
          <h1>Pac-Man: The Classic Arcade Game with pac-man ghost</h1>
        </div>
        <div className="content">
          {data.map((article) => (
            <div className="para" key={article.id}>
              {article.heading.length > 0 && <h4>{article.heading}</h4>}
              <p>{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
