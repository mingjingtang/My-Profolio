import React from "react";
import "../MyProjects/MyProjects.css";
import { Container, Item } from "semantic-ui-react";
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
      "Web-based stock app with up-to-date pricing information reflecting performance of stocks.Ensure secure user authentication, a registered user can buy any share of the stock based on balance.Utilized the IEX API to ensure real-time stock information.Technology used: JavaScript, React, Node.js, IEX API, PostgreSQL.",
  },
  {
    title: "PostIt",
    herokuLink: "",
    githubLink: "https://github.com/mingjingtang/postit2",
    image: postIt,
    info:
      "Built a Reddit-like application with SpringBoot and React.Stored data in PostgreSQL database, which could be queried and manipulated with different user roles.Authenticate by JWT token, registered user can login, create posts and leave comments, all users can view others’ posts.More than 85%+ back-end code covered by Mockito unit tests, which had been integrated with Jenkins jobs.ELK Stack had been integrated for logging and monitoring.Technology used: Java, JavaScript, React, Mockito, Junit, Jenkins, ELK Stack, Docker, PostgreSQL.",
  },
  {
    title: "Word Search",
    herokuLink: "https://word-search-ga.herokuapp.com/",
    githubLink: "https://github.com/mingjingtang/Word-Search",
    image: wordSearch,
    info:
      "A word search game developed base on serials of algorithm which to know if the user inputs the right word or not.Once user find all the words the first mission, they could go to the next one.Technology used: Algorithm, JavaScript, CSS, HTML.",
  },
  {
    title: "Book Club",
    herokuLink: "https://book-club-sei-ga.herokuapp.com/",
    githubLink: "https://github.com/mingjingtang/book-club",
    image: bookClub,
    info:
      "By using GoodReads API, given a integrate database. User can search any book by book title.User can add any book they like to their favoriate list, or remote them from it.Technology used:JavaScript, React, Node, GoodReads API.",
  },
  {
    title: "Trip Plan",
    herokuLink: "",
    githubLink: "https://github.com/mingjingtang/Trip-Plan",
    image: tripPlan,
    info:
      "Created all the places that user can visit in the database, and user can create their own trip by select different places.User can ddd any places they want into a specific trip, or delete any places from a specific trip if they changed their mind.Technology used: React, Ruby on Rails, PostgreSQL.",
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
    const project = objects.map((item) => {
      return (
        <Project
          title={item.title}
          herokuLink={item.herokuLink}
          githubLink={item.githubLink}
          image={item.image}
          info={item.info}
        />
      );
    });

    return <Container style={{ marginTop: "4vh" }}>{project}</Container>;
  }
}
export default MyProjects;
