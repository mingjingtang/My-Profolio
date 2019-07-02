import React, { Component } from 'react'

import me from './image/me.jpg'
import './App.css';
import { Menu, Segment, Image, Icon} from 'semantic-ui-react'

export default class extends Component {
  state = { activeItem: 'aboutMe' }

  handleItemClick = (e, { name }) => 
    this.setState({ activeItem: name }
  )

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
            <Icon 
              size = "huge"
              name = "github square"
            ></Icon>

            <Icon
              size = "huge"
              name = "linkedin"
            >
            </Icon>

            <Icon 
              size = "huge"
              name = "instagram"
            >
            </Icon>


            
          </div>
          

          

        </Segment>
      </div>
    );
  }

}
