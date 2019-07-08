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
                    src={me} size='small'
                    circular
                />

                <div className="social">
                    <a href="https://github.com/mingjingtang" target = "_blank">
                        <Icon
                            size="large"
                            name="github square"
                            onClick={this.handleClick}
                        ></Icon>
                    </a>

                    <a href="https://www.linkedin.com/in/mingjing/" target = "_blank">
                        <Icon
                            size="large"
                            name="linkedin"
                            onClick={this.handleClick}
                        >
                        </Icon>
                    </a>

                    <a href="https://www.instagram.com/mingjingtang/" target = "_blank">
                        <Icon
                            size="large"
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
