import React from 'react';

import {removeInvoice} from '/imports/api/invoice/actions';

export default class Invoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  onRemove (id) {
  	if (confirm('Are you sure, delete permanently ?')) {
	  	removeInvoice(id)
  	}
  }

  render() {
  	const { invoices } = this.props;

    return (
			<div className="container">
				<div className="row">
		  		<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Actions</th>
				        <th>ID</th>
				        <th>Biller</th>
				        <th>Customer</th>
				        <th>Date</th>
				        <th>Total</th>
				      </tr>
				    </thead>
				    <tbody>
				    {
				    	invoices.map(item => (
				    		<tr key={item._id}>
				    			<td>
						        <a href="">
						          <span className="fa fa-file-pdf-o" aria-hidden="true"></span>
						        </a>
  					        &nbsp;&nbsp;&nbsp;
						        <a href="" onClick={this.onRemove.bind(this, item._id)}>
						          <span className="fa fa-trash" aria-hidden="true"></span>
						        </a>
					        </td>
				    			<td>{item.Id}</td>
				    			<td>{item.biller}</td>
				    			<td>{item.customer}</td>
				    			<td>{item.date.slice(4, -24)}</td>
				    			<td>{item.totalPrice}</td>
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
