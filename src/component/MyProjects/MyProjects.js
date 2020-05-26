import React from "react";
import "../MyProjects/MyProjects.css";
import { Container, List } from "semantic-ui-react";
import project0 from "../../image/project0.png";
import project1 from "../../image/project1.png";
import project1_1 from "../../image/project1_1.png";
import project2 from "../../image/project2.png";
import project3 from "../../image/project3.png";
class MyProjects extends React.Component {
  render() {
    return (
      <Container>
        <List divided verticalAlign="middle">
          <List.Item className="listItem">
            <List.Content>
              <div className="title">
                <List.Header
                  className="listHeader"
                  as="a"
                  href="https://iex-stock.herokuapp.com/"
                  target="_blank"
                >
                  Stock
                </List.Header>
              </div>

              <img
                src={project0}
                style={{ height: "30%", width: "40%" }}
                alt="projectZeroImage"
              />
              <List.Description as="a">
                <ul>
                  <li>
                    Web-based stock app with up-to-date pricing information
                    reflecting performance of stocks
                  </li>
                  <li>
                    Ensure secure user authentication, a registered user can buy
                    any share of the stock based on balance.
                  </li>
                  <li>
                    Utilized the IEX API to ensure real-time stock information.
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item>

          <List.Item className="listItem">
            <List.Content>
              <div className="title">
                <List.Header
                  className="listHeader"
                  as="a"
                  href="https://github.com/mingjingtang/postit2"
                  target="_blank"
                >
                  PostIt
                </List.Header>
              </div>

              <img
                src={project1}
                style={{ height: "30%", width: "40%" }}
                alt="projectOneImage"
              />
              <List.Description as="a">
                <ul>
                  <li>
                    Built a Reddit-like application with SpringBoot and React.
                  </li>
                  <li>
                    Stored data in PostgreSQL database, which could be queried
                    and manipulated with different user roles.
                  </li>
                  <li>
                    Authenticate by JWT token, registered user can login, create
                    posts and leave comments, all users can view others’ posts.
                  </li>
                  <li>
                    More than 85%+ back-end code covered by Mockito unit tests,
                    which had been integrated with Jenkins jobs.
                  </li>
                  <li>
                    ELK Stack had been integrated for logging and monitoring.
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item>

          {/* <List.Item className="listItem">
            <List.Content>
              <div className="title">
                <List.Header
                  className="listHeader"
                  as="a"
                  href="https://mingjingtang.github.io/Word-Search/login.html"
                  target="_blank"
                >
                  Word Search
                </List.Header>
              </div>

              <img
                src={project1_1}
                style={{ height: "30%", width: "40%" }}
                alt="projectOneOneImage"
              />
              <List.Description as="a">
                <ul>
                  <li>A word search game which have two missions.</li>
                  <li>
                    Once you find all the words in the first mission, you can go
                    to the second mission.
                  </li>
                  <li>
                    Technology used: <b>JavaScript</b>
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item> */}

          <List.Item className="listItem">
            <List.Content>
              <div className="title"></div>
              <List.Header
                className="listHeader"
                as="a"
                href="https://book-club-sei-ga.herokuapp.com/"
                target="_blank"
              >
                Book Club
              </List.Header>
              <img
                src={project2}
                style={{ height: "30%", width: "50%" }}
                alt="projectTwoImage"
              />
              <List.Description as="a">
                <ul>
                  <li>
                    By using GoodReads API, given a integrate database. User can
                    search any book by book title.{" "}
                  </li>
                  <li>
                    User can add any book they like to their favoriate list, or
                    remote them from it.
                  </li>
                  <li>
                    Technology used: <b>React, Node.js, GoodReads API</b>
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item>

          <List.Item className="listItem">
            <List.Content>
              <List.Header
                className="listHeader"
                as="a"
                href="https://github.com/mingjingtang/Trip-Plan"
                target="_blank"
              >
                Trip Plan
              </List.Header>
              <img
                src={project3}
                style={{ height: "20%", width: "50%" }}
                alt="projectThreeImage"
              />
              <List.Description as="a">
                <ul>
                  <li>
                    Created all the places that user can visit in the database,
                    and user can create their own trip by select different
                    places.{" "}
                  </li>
                  <li>
                    User can ddd any places they want into a specific trip, or
                    delete any places from a specific trip if they changed their
                    mind.
                  </li>
                  <li>
                    Technology used: <b>Ruby on Rails, Express.js, MySQL</b>
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    );
  }
}
export default MyProjects;
