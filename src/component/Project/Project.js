import React from "react";
import "./Project.css";
import { Image, Button, Divider } from "semantic-ui-react";

export default class Project extends React.Component {
  render() {
    const { title, herokuLink, githubLink, image, info } = this.props;

    return (
      <div className="sectionArea">
        <div className="titleArea">
          <div className="titleItem">
            <h2 color="blue" style={{ margin: "auto", textAlign: "center" }}>
              {title}
            </h2>
          </div>
          <div className="titleItem">
            <Button
              size="mini"
              icon="world"
              primary
              href={herokuLink}
              target="blank"
            />
          </div>

          <div className="titleItem">
            <Button
              size="mini"
              icon="github"
              primary
              href={githubLink}
              target="blank"
            />
          </div>
        </div>

        <Image
          src={image}
          size="huge"
          alt="projectZeroImage"
          style={{ marginLeft: "3vh" }}
        />

        <ul>
          {/* <li>
            Web-based stock app with up-to-date pricing information reflecting
            performance of stocks.
          </li>
          <li>
            Ensure secure user authentication, a registered user can buy any
            share of the stock based on balance.
          </li>
          <li>Utilized the IEX API to ensure real-time stock information.</li>
          <li>
            Technology used:{" "}
            <b>JavaScript, React, Node.js, IEX API, PostgreSQL</b>
          </li> */}
          <p>{info}</p>
        </ul>
        <Divider section />
      </div>
    );
  }
}
