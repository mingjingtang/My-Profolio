import React from 'react'
import me from '../../image/me.jpg'

import '../AboutMe/AboutMe.css'
import { Image, Icon } from 'semantic-ui-react'


export default class AboutMe extends React.Component {
    state = {
        clickedIcon: ''
    }


    handleClick = (e, { name }) => {
        this.setState({
            clickedIcon: name,
        })
    }


    render() {
        return (
            <div className="aboutMe">
                <Image className="image"
                    src={me} size='medium'
                    circular
                />

                <div className="social">
                    <a href="https://github.com/mingjingtang">
                        <Icon
                            size="huge"
                            name="github square"
                            onClick={this.handleClick}
                        ></Icon>
                    </a>

                    <a href="https://www.linkedin.com/in/mingjing/">
                        <Icon
                            size="huge"
                            name="linkedin"
                            onClick={this.handleClick}
                        >
                        </Icon>
                    </a>

                    <a href="https://www.instagram.com/mingjingtang/">
                        <Icon
                            size="huge"
                            name="instagram"
                            onClick={this.handleClick}
                        >
                        </Icon>
                    </a>
                </div>
            </div>
        )
    }
}
