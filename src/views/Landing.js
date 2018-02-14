import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h3>Welcome to</h3>
        <h1>DemocrApp</h1>
        <p>
          Please collect a voting token from the event organiser to start
          your session.
        </p>
        <Button color="primary" size='lg' block>I've got my token!</Button>
      </div>
    );
  }
}

export default Landing;
