import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
        <Link className="btn btn-primary btn-lg btn-block" to="/start">I&#39;ve got my token!</Link>
      </div>
    );
  }
}

export default Landing;
