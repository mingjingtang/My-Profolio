import React from 'react'
import me from '../../image/me.jpg'

import '../AboutMe/AboutMe.css'
import { Image, Icon} from 'semantic-ui-react'


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
                    <a href="https://github.com/mingjingtang" target="_blank">
                        <Icon
                            size="large"
                            name="github square"
                            onClick={this.handleClick}
                        ></Icon>
                    </a>

                    <a href="https://www.linkedin.com/in/mingjing/" target="_blank">
                        <Icon
                            size="large"
                            name="linkedin"
                            onClick={this.handleClick}
                        >
                        </Icon>
                    </a>

                    <a href="https://www.instagram.com/mingjingtang/" target="_blank">
                        <Icon
                            size="large"
                            name="instagram"
                            onClick={this.handleClick}
                        >
                        </Icon>
                    </a>
                </div>


                <div className="card">
                    <p>
                    <b>
                        Mingjing Tang - 
                    </b>
                        Knowledgeable Front End Developer adept at creating successful websites that meet customer needs. Collaborating with different kinds of customers to gather requirements, produce plans and improve designs for usability and functionality. Fully proficient in JavaScript, HTML and React.
                    </p>
                    <p>
                        <b>
                            Skills - 
                        </b>
                        JavaScript, java, HTML,CSS, React, Ruby on Rails, MySQL, Git, Android development, Selenium WebDriver
                    </p>
                    <p>
                        <b>
                        Interest -
                        </b>
                        Reading, gym, travel
                    </p>

                </div>
            </div>
        )
    }
}
