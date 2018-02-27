import React, { Component } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import './App.css';

const data = [

  
]

class App extends Component {
  render() {
    return (
      <div>

      <Card
        centered
      >
          <Image src='https://www.velvetjobs.com/assets/noavatar-profile.jpg' />
          <Card.Content>
            <Card.Header>
              <Label centered size={'huge'} as='a' color='blue' image>                
                Veronika
                <Label.Detail>Friend</Label.Detail>
              </Label>

              {/*<div style={{marginTop: 20}}>&nbsp; </div>*/}              
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>

            <div>
              <Label as='a' color='blue' image>                
                email
                <Label.Detail>veronika@gmail.com</Label.Detail>
              </Label>
            </div>


              <div> 
                <Label as='a' color='blue' image>                
                  Phone Number
                  <Label.Detail>878-888-8888</Label.Detail>
                </Label>
              </div>
              <div> Phone Number: </div>
              <div> Address: </div>
              <div> Type: </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>

      </div>
    );
  }
}

export default App;
