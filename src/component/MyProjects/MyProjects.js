import React from "react";
import "../MyProjects/MyProjects.css";
import { List } from "semantic-ui-react";
import project1 from "../../image/project1.png";
import project2 from "../../image/project2.png";
import project3 from "../../image/project3.png";
class MyProjects extends React.Component {
  render() {
    return (
      <div className="projectList">
        <List divided relaxed>
          <List.Item className="listItem">
            {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
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
                {/* <List.Header
                  className="listHeader"
                  as="a"
                  href="https://mingjingtang.github.io/Word-Search/login.html"
                  target="_blank">
                  Github
                </List.Header> */}
            </div>
              
              <img src={project1} style={{ height: "30%", width: "40%" }} />
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
          </List.Item>

          <List.Item className="listItem">
            {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
            <List.Content>
            <div className="title">
            <List.Header
                className="listHeader"
                as="a"
                href="https://book-club-sei-ga.herokuapp.com/"
                target="_blank"
              >
                Book Club
              </List.Header>
            </div>
              <List.Header
                className="listHeader"
                as="a"
                href="https://book-club-sei-ga.herokuapp.com/"
                target="_blank"
              >
                Book Club
              </List.Header>
              <img src={project2} style={{ height: "30%", width: "50%" }} />
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
            {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
            <List.Content>
              <List.Header
                className="listHeader"
                as="a"
                href="https://github.com/mingjingtang/Trip-Plan"
                target="_blank"
              >
                Trip Plan
              </List.Header>
              <img src={project3} style={{ height: "20%", width: "50%" }} />
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
                    Technology used: <b>Ruby on Rails, MySQL</b>
                  </li>
                </ul>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default MyProjects;
