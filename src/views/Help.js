import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Help extends Component {
  render() {
    return (
      <div className="container">
        <h3>About DemocrApp</h3>
        <p>
          Heh look about things.
        </p>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>
        <Button onClick={() => this.props.history.goBack()}>Thanks, take me back.</Button>
      </div>
    );
  }
}

export default Help;
