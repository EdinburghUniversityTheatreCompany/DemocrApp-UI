import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Loader from '../helpers/Loader';

class Start extends Component {
  render() {
    return (
      <div className="container">
        <h3>Let&#39;s get going.</h3>
        <p>
          Please enter your unique voting token in the box below.
        </p>
        <Input type="text" name="token" placeholder="your token" />
        <hr/>
        <div align="right">
          <Link className="btn btn-secondary btn-lg" to="/help">Help</Link>
          <Button color="primary" size='lg' onClick={Loader.Show}>Make Democracy</Button>
        </div>
      </div>
    );
  }
}

export default Start;
