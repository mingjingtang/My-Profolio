import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import Home from './component/Home/Home'
import AboutMe from './component/AboutMe/AboutMe'
import MyProjects from './component/MyProjects/MyProjects'
import { Menu } from 'semantic-ui-react'

export default class extends Component {
  state = {
    activeItem: 'home',
  }

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name,
    }
    )

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Router>
          <div>
            <Menu className="ui tabular menu">
              <Menu.Item as={Link} to='/'
                className="menuItem"
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />

              <Menu.Item as={Link} to='/contactMe'
                className="menuItem"
                name='contactMe'
                active={activeItem === 'contactMe'}
                onClick={this.handleItemClick}
              />


              <Menu.Item as={Link} to='/myProjects'
                className="menuItem"
                name='myProjects'
                active={activeItem === 'myProjects'}
                onClick={this.handleItemClick}
              />
            </Menu>


            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/myProjects" component={MyProjects} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }

}
