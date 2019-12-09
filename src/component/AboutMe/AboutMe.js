import React from "react";
import me from "../../image/me.jpg";
import "../AboutMe/AboutMe.css";
import { Image, Icon } from "semantic-ui-react";
import Typewriter from "typewriter-effect";

export default class AboutMe extends React.Component {
  state = {
    clickedIcon: ""
  };

  handleClick = (e, { name }) => {
    this.setState({
      clickedIcon: name
    });
  };

  render() {
    return (
      <div className="aboutMe">
        <Image className="image" src={me} size="small" circular />

        <div className="social">
          <a href="https://github.com/mingjingtang" target="_blank">
            <Icon
              size="big"
              name="github square"
              onClick={this.handleClick}
            ></Icon>
          </a>

          <a href="https://www.linkedin.com/in/mingjingtang/" target="_blank">
            <Icon size="big" name="linkedin" onClick={this.handleClick}></Icon>
          </a>
        </div>

        <div className="card">
          <p className="name">
            <b className="large text">
              <Typewriter
                options={{
                  strings: ["Mingjing Tang", "Full Stack Developer"],
                  autoStart: true
                }}
                onInit={typewriter => {
                  typewriter
                    .typeString("Mingjing Tang | Full Stack Developer")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .start();
                }}
              />
            </b>
          </p>
        <p className="pitch">
            Grateful for creating successful
            applications that meet customer needs. Believed that collaborate
            with others is the best way to solve complex problems, also enjoy
            the processes of independent thinking when lack of supervising. Keep
            exploring new technologies from any reachable platform.
          </p>
          <p className="pitch">
            <b>Skills - </b>
            Java, JavaScript, HTML, CSS, React, Ruby on Rails, MySQL, Git, Spring Boot,
            Android development, Selenium WebDriver
          </p>
          <p className="pitch">
            <b>Interest - </b>
            Reading, exercise, travel
          </p>
        </div>
      </div>
    );
  }
}
