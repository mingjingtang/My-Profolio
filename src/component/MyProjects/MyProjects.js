import React from 'react'
import '../MyProjects/MyProjects.css'
import { List } from 'semantic-ui-react'
class MyProjects extends React.Component {
  render() {
    return (
      <div className = "projectList">
        <List divided relaxed>
          <List.Item className = "listItem">
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header className = "listHeader" as='a' href="https://mingjingtang.github.io/Word-Search/login.html" target = "_blank">Word Search</List.Header>
              <List.Description as='a'>A word search game which have two missions. Once you find all the words in the first mission,
              you can go to second mission.</List.Description>
            </List.Content>
          </List.Item>

          <List.Item className = "listItem">
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header className = "listHeader" as='a' href="https://github.com/mingjingtang/book-club" target = "_blank">Book Club</List.Header>
              <List.Description as='a'>Use GoodReads API, search any book by book title. Add and delete any book you like or dislike.</List.Description>
            </List.Content>
          </List.Item>

          <List.Item className = "listItem">
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header className = "listHeader" as='a' href= "https://github.com/mingjingtang/Trip-Plan" target = "_blank">Trip Plan</List.Header>
              <List.Description as='a'>Created all the places in the database, also user can create their own trip. Add any places they want into a specific trip,
              or delete any places from a specific trip if they change the mind. </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}
export default MyProjects