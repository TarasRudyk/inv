import React from 'react';

export default class Customers extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};

  }



  render() {
		return (
			<div>
		  	<h1>Customers</h1>
		  	<a href='/customers/add' role="button">Add New Customer</a>
			</div>
		);
  }
}
