import React from 'react'
import '../Home/Home.css'
import { Divider} from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h2>
            Know more about me
        </h2>
        </div>

        <Divider section className="divider" />

        <div className="contactInfo">
          <div>
            <a href="mailto:tmjcsh@gmail.com" target="_blank">Mail to me</a>
          </div>
          <div>
            <a href="https://bit.ly/2XIdl1J" 
            target="_blank">Resume</a>
          </div>
        </div>

      </div>
    )
  }
}
export default Home