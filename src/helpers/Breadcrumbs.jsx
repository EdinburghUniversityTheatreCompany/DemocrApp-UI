import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>Start</BreadcrumbItem>
          <BreadcrumbItem>Vote</BreadcrumbItem>
          <BreadcrumbItem>Democracy</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default Breadcrumbs;