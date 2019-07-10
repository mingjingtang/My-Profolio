import React from 'react'
import me from '../../image/me.jpg'

import '../AboutMe/AboutMe.css'
import { Image, Icon, Header, Card } from 'semantic-ui-react'


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

                <div className="contactInfo">
                    <div className="contactDetail">
                        <Header as='h4' color='grey' className="header">
                            ADDRESS
                    <div class="item"></div>
                            6020 Fresh Pond Rd
                            Maspeth, NY, 11378
                </Header>
                    </div>

                    <div className="contactDetail">
                        <Header as='h4' color='grey'>
                            PHONE
                    <div class="item"></div>
                            (917)690-2262
        
                </Header>
                    </div>

                    <div className="contactDetail">
                        <Header as='h4' color="grey">
                            EMAIL
                    <div class="item"></div>
                            tmjcsh@gmail.com
                </Header>
                    </div>

                </div>


                <Card className="card"
                    link
                    header='Mingjing Tang'
                    meta='Software Engineer / Front End Developer'
                    description={[
                        'Knowledgeable Front End Developer adept at creating successful websites that meet customer needs. Collaborating with different kinds of customers to gather requirements, produce plans and improve designs for usability and functionality. Fully proficient in JavaScript, HTML and React.',
                    ].join('')}
                />
            </div>
        )
    }
}
