import React from "react";
import "./Project.css";
import { Image, Button, Grid, Divider } from "semantic-ui-react";

export default class Project extends React.Component {
  render() {
    const { title, herokuLink, githubLink, image, info } = this.props;

    const listItem = info.split("#");

    const lists = listItem.map((item, index) => {
      if (index === listItem.length - 1) {
        return (
          <li>
            <b>{item}</b>
          </li>
        );
      } else {
        return (
          <li>
            <p>{item}</p>
          </li>
        );
      }
    });

    return (
      <>
        <Grid centered stackable columns={2} style={{ marginTop: "3vh" }}>
          <Grid.Column width={4}>
            <Image src={image} size="huge" alt="projectZeroImage" />
          </Grid.Column>

          <Grid.Column width={5}>
            <div className="titleArea">
              <div style={{ marginRight: "1vh" }}>
                <h2 color="blue">{title}</h2>
              </div>

              <div>
                <Button
                  size="mini"
                  icon="world"
                  primary
                  href={herokuLink}
                  target="blank"
                />
              </div>

              <div>
                <Button
                  size="mini"
                  icon="github"
                  primary
                  href={githubLink}
                  target="blank"
                />
              </div>
            </div>

            <ul>{lists}</ul>
          </Grid.Column>
        </Grid>
        <Divider />
      </>
    );
  }
}
