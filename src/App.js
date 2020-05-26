import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe";
import MyProjects from "./component/MyProjects/MyProjects";
import ContactMe from "./component/ContactMe/ContactMe";
import "./App.css";
import { Menu } from "semantic-ui-react";

export default class extends Component {
  state = {
    activeItem: "aboutMe",
  };

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name,
    });

  render() {
    const { activeItem } = this.state;

    return (
      <main>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="aboutMe"
            className="menuItem"
            active={activeItem === "aboutMe"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/myProjects"
            name="myProjects"
            className="menuItem"
            active={activeItem === "myProjects"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/contactMe"
            name="contactMe"
            className="menuItem"
            active={activeItem === "contactMe"}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/contactMe" component={ContactMe} />
          <Route path="/myProjects" component={MyProjects} />
        </Switch>
      </main>
    );
  }
}
