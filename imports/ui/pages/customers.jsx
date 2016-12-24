import React from 'react';

import {removeCustomer} from '/imports/api/customers/actions';

export default class Customers extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};

  }

  onRemove (id) {
  	if (confirm('Are you sure, delete permanently ?')) {
	  	removeCustomer(id)
  	}
  }

  render() {
  	const { customers } = this.props;
		return (
			<div className="container">
				<div className="row">
		  		<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Actions</th>
				        <th>ID</th>
				        <th>Name</th>
				        <th>e-mail</th>
				        <th>Total</th>
				        <th>Enabled</th>
				      </tr>
				    </thead>
				    <tbody>
				    {
				    	customers.map(item => (
				    		<tr key={item._id}>
				    			<td>
						        <a href={`/customers/addcustomer/${item._id}`}>
						          <span className="fa fa-pencil"></span>
						        </a>
  					        &nbsp;&nbsp;&nbsp;
						        <a href="" onClick={this.onRemove.bind(this, item._id)}>
						          <span className="fa fa-trash" aria-hidden="true"></span>
						        </a>
					        </td>
				    			<td>{item.Id}</td>
				    			<td>{item.customerName}</td>
				    			<td>{item.contacts.email}</td>
				    			<td></td>
				    			{item.enabled ? 
				    			<td><span className="glyphicon glyphicon-ok"></span></td> :
				    			<td><span className="glyphicon glyphicon-remove"></span></td> 
				    			}
				    		</tr>
				    		))
				    }
				    </tbody>
 				 	</table>
		  	</div>
			</div>
		);
  }
}
