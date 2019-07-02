import React, { Component } from 'react'

import me from './image/me.jpg'
import './App.css';
import { Menu, Segment, Image, Icon} from 'semantic-ui-react'

export default class extends Component {
  state = { 
    activeItem: 'aboutMe',
    clickedIcon: '',
    clicked: false
  }

  handleItemClick = (e, { name }) => 
    this.setState({ 
      activeItem: name,
    }
  )

  handleClick = (e, {name}) => {
    this.setState({
      clickedIcon: name,
      clicked: true
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu tabular>
          <Menu.Item className = "menuItem"
            name='aboutMe' 
            active={activeItem === 'aboutMe'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item className = "menuItem"
            name='myProjects' 
            active={activeItem === 'myProjects'} 
            onClick={this.handleItemClick} 
          />
        </Menu>

        <Segment attached='bottom'>
          <Image className = "image" 
            src={me} size='medium' 
            circular 
          />

          <div className = "social">
          <a href="https://github.com/mingjingtang"> 
            <Icon 
              size = "huge"
              name = "github square"
              onClick={this.handleClick}
            ></Icon>
          </a>

          <a href="https://www.linkedin.com/in/mingjing/">
            <Icon
              size = "huge"
              name = "linkedin"
              onClick={this.handleClick}
            >
            </Icon>
          </a>

          <a href="https://www.instagram.com/mingjingtang/">
            <Icon 
              size = "huge"
              name = "instagram"
              onClick={this.handleClick}
            >
            </Icon>
          </a>

            
          </div>
          

          

        </Segment>
      </div>
    );
  }

}
