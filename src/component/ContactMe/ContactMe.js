import React from "react";
import "./ContactMe.css";
import { Divider, Container } from "semantic-ui-react";
import cat from "../../image/cat.jpg";

class Home extends React.Component {
  render() {
    return (
      <Container className="containerOfCat">
        <div className="contactInfo">
          <div className="contentTitle">
            <p>Know more about me</p>
          </div>

          <Divider section />

          <div className="contentLink">
            <a
              href="mailto:tmjcsh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail to me
            </a>
          </div>
          <div className="contentLink">
            <a
              href="https://drive.google.com/file/d/11W6AT7765cXgoRVGdvOFccbzA2TnQNPc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div>
          <img src={cat} alt="cat" className="responsive" />
        </div>
      </Container>
    );
  }
}
export default Home;
