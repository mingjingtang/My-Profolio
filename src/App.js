import React, { Component } from 'react'

import me from './image/me.jpg'
import './App.css';
import { Menu, Segment, Image} from 'semantic-ui-react'

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
          <Menu.Item 
            name='aboutMe' 
            active={activeItem === 'aboutMe'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name='myProjects' 
            active={activeItem === 'myProjects'} 
            onClick={this.handleItemClick} 
          />
        </Menu>

        <Segment attached='bottom'>
          <Image src={me} size='medium' circular />
        </Segment>
      </div>
    );
  }

}
