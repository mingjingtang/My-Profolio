import React from "react";
import MyPhoto from "../../image/me.jpg";
import "../AboutMe/AboutMe.css";
import { Container, Image, Icon, Segment } from "semantic-ui-react";
import Typewriter from "typewriter-effect";

export default class AboutMe extends React.Component {
  state = {
    clickedIcon: "",
  };

  handleClick = (e, { name }) => {
    this.setState({
      clickedIcon: name,
    });
  };

  render() {
    return (
      <Container className="ui two column centered grid">
        <div className="social">
          <Image className="image" src={MyPhoto} size="small" circular />

          <div className="socialIcon">
            <a
              href="https://github.com/mingjingtang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                size="big"
                name="github square"
                onClick={this.handleClick}
              ></Icon>
            </a>

            <a
              href="https://www.linkedin.com/in/mingjingtang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                size="big"
                name="linkedin"
                onClick={this.handleClick}
              ></Icon>
            </a>
          </div>
        </div>

        <Segment basic>
          <div className="typeWriter">
            <Typewriter
              options={{
                strings: ["Mingjing Tang", "Software Engineer"],
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Mingjing Tang | Software Engineer")
                  .start();
              }}
            />
          </div>

          <p className="pitch">
            Innovative software Engineer with over 2 years of experience in full
            software development lifecycle. Designed, developed, and maintained
            a B2B site for a startup company. Built multiple full-stack projects
            with authentication, database and interactive front end.
          </p>
          <p className="pitch">
            <b>Languages &ndash; </b>
            Java, JavaScript, PostgreSQL, MySQL, Bash Script
          </p>
          <p className="pitch">
            <b>Web Technologies &ndash; </b>
            HTML, CSS, React, Ruby on Rails, Node.js, Express.js
          </p>
          <p className="pitch">
            <b>Tools &ndash; </b>
            Git, IntelliJ IDEA, Visual Studio Code, SpringBoot, Jenkins, ELK
            Stack, RabbitMQ, Docker, Mockito
          </p>
        </Segment>
      </Container>
    );
  }
}
