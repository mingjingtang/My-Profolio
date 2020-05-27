import React from "react";
import "../MyProjects/MyProjects.css";
import Project from "../Project/Project";
import stock from "../../image/stockImage.png";
import postIt from "../../image/postItImage.png";
import wordSearch from "../../image/wordSearchImage.png";
import tripPlan from "../../image/tripPlanImage.png";
import bookClub from "../../image/bookClubImage.png";

let objects = [
  {
    title: "Stock",
    herokuLink: "https://iex-stock.herokuapp.com/",
    githubLink: "https://github.com/mingjingtang/Stock",
    image: stock,
    info:
      "Web-based stock app with up-to-date pricing information reflecting performance of stocks#Ensure secure user authentication, a registered user can buy any share of the stock based on balance#Utilized the IEX API to ensure real-time stock information#Technology used: JavaScript, React, Node.js, IEX API, PostgreSQL",
  },
  {
    title: "PostIt",
    herokuLink: "",
    githubLink: "https://github.com/mingjingtang/postit2",
    image: postIt,
    info:
      "Built a Reddit-like application with SpringBoot and React#Stored data in PostgreSQL database, which could be queried and manipulated with different user roles#Authenticate by JWT token, registered user can login, create posts and leave comments, all users can view others’ posts#More than 85%+ back-end code covered by Mockito unit tests, which had been integrated with Jenkins jobs#ELK Stack had been integrated for logging and monitoring#Technology used: Java, JavaScript, React, Mockito, Junit, Jenkins, ELK Stack, Docker, PostgreSQL",
  },
  {
    title: "Word Search",
    herokuLink: "https://word-search-ga.herokuapp.com/",
    githubLink: "https://github.com/mingjingtang/Word-Search",
    image: wordSearch,
    info:
      "A word search game developed with algorithms that can identify if the user inputs the right word or not#Once users find all the words in the mission, they could go to the next one#The technology used: Algorithm, JavaScript, CSS, HTML",
  },
  {
    title: "Book Club",
    herokuLink: "https://book-club-sei-ga.herokuapp.com/",
    githubLink: "https://github.com/mingjingtang/book-club",
    image: bookClub,
    info:
      "By using GoodReads API, the application gave an integrated database#Users can search for any book by book title or author#Users can add any book they like to their favorite list, or remove them from it#The technology used: JavaScript, React, Node.js, GoodReads API.",
  },
  {
    title: "Trip Plan",
    herokuLink: "",
    githubLink: "https://github.com/mingjingtang/Trip-Plan",
    image: tripPlan,
    info:
      "Created all the places information that users can visit in the database#Users can create their own trips by select different places#Users can add any places they want into a specific trip, or delete any places from a specific trip if they changed their mind#The technology used: React, Ruby on Rails, PostgreSQL.",
  },
];

class MyProjects extends React.Component {
  state = {
    title: "",
    herokuLink: "",
    githubLink: "",
    image: "",
    info: [],
  };

  render() {
    const project = objects.map((item, index) => {
      return (
        <Project
          key={index}
          title={item.title}
          herokuLink={item.herokuLink}
          githubLink={item.githubLink}
          image={item.image}
          info={item.info}
        />
      );
    });

    return (
      <main>
        <div>{project}</div>
      </main>
    );
  }
}
export default MyProjects;
