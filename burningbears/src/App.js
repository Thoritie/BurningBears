import React, { Component } from 'react';
import './App.css';
import { Container, List, Grid, Menu, Segment, Card } from 'semantic-ui-react'

class App extends Component {
  state = { activeItem: 'home =' }

  handleClick = (e, { name }) => this.setState(
    {
      activeItem: name
    })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        {/* <Segment> */}
        <Menu>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onclick={this.handleClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              Platform Developments
                </Menu.Item>
          </Menu.Menu>

        </Menu>

        <Container>


          <Grid stackable columns={2}>
            <Grid.Column width={9}>
              <Card
                fluid
                header='Graph'
                meta='Hello'
                description='Dest'
              />
            </Grid.Column>
            <Grid.Column width={7}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Details</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <List selection verticalAlign='middle'>

                    <List.Item>
                      {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                      <List.Content>
                        <List.Header>Current Sprint Score</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                      <List.Content>
                        <List.Header>Total Card</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      {/* <Image avatar src='/images/avatar/small/christian.jpg' /> */}
                      <List.Content>
                        <List.Header>Doing</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      {/* <Image avatar src='/images/avatar/small/daniel.jpg' /> */}
                      <List.Content>
                        <List.Header>Code Review</List.Header>
                      </List.Content>
                    </List.Item>
                  </List>

                </Card.Content>
              </Card>

            </Grid.Column>
          </Grid>


          {/* </Segment> */}
        </Container>
      </div>
    );
  }
}

export default App;
