import React, { Component } from 'react';
import './App.css';
import { Menu, Segment, Card } from 'semantic-ui-react'

class App extends Component {
  state = { activeItem: 'home =' }

  handleClick = ( e, { name } ) => this.setState(
    {
      activeItem: name
    })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <Segment>
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

            <Card
              fluid
              header='Graph'
              meta='Hello'
              description='Dest'
            />


        </Segment>
      </div>
    );
  }
}

export default App;
