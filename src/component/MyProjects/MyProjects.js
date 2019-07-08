import React from 'react'
import '../MyProjects/MyProjects.css'
import { List } from 'semantic-ui-react'
class MyProjects extends React.Component {
  render() {
    return (
      <div className = "projectList">
        <h1>My Projects</h1>
        <List divided relaxed>
          <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href="https://github.com/mingjingtang/Word-Search">Word Search</List.Header>
              <List.Description as='a'>Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href="https://github.com/mingjingtang/book-club">Book Club</List.Header>
              <List.Description as='a'>Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href= "https://github.com/mingjingtang/Trip-Plan">Trip Plan</List.Header>
              <List.Description as='a'>Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}
export default MyProjects