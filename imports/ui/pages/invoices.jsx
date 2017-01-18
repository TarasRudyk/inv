import React from 'react';

import { removeInvoice, downloadPdf } from '/imports/api/invoice/actions';
import { PdfInvoice } from '/imports/ui/components/pdfdocument';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Invoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	sortToggle: 1
    };

  }

  onRemove (id) {
  	if (confirm('Are you sure, delete permanently ?')) {
	  	removeInvoice(id)
  	}
  }

  downloadPdf (id) {
  	downloadPdf(id)
  }

  handleSorting (sorted) {
  	this.state.sortToggle === 1 ? this.setState({ sortToggle: -1 }) : this.setState({ sortToggle: 1 });
  	let sortToggle = this.state.sortToggle

  	FlowRouter.setQueryParams({ sorted, sortToggle });
  }

  render() {
  	const { invoices, billers, customers } = this.props;

    return (
			<div className="container">
				<div className="row">

		  		<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Actions</th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'Id')}>ID</a></th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'billerName')}>Biller</a></th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'customerName')}>Customer</a></th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'issueDate')}>Date</a></th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'totalPrice')}>Total</a></th>
				      </tr>
				    </thead>
				    <tbody>
				    {
				    	invoices.map(item => (
				    		<tr key={item._id}>
				    			<td>
						        <a href="" onClick={this.downloadPdf.bind(this, item._id)}>
						          <span className="fa fa-file-pdf-o" aria-hidden="true"></span>
						          {false ? <PdfInvoice style="display:none" invoice={item} 
						          	biller={billers.find((i) => i._id === item.biller)} 
						          	customer={customers.find((i) => i._id === item.customer)} /> : null}
						        </a>
  					        &nbsp;&nbsp;&nbsp;
						        <a href={`/addinvoice/${item._id}`}>
						          <span className="fa fa-pencil"></span>
						        </a>
  					        &nbsp;&nbsp;&nbsp;
						        <a href="" onClick={this.onRemove.bind(this, item._id)}>
						          <span className="fa fa-trash" aria-hidden="true"></span>
						        </a>
					        </td>
				    			<td>{item.Id}</td>
				    			<td>{item.billerName}</td>
				    			<td>{item.customerName}</td>
				    			<td>{item.issueDate.toString().slice(4, -24)}</td>
				    			<td>{item.totalPrice}<span>&nbsp;Kč</span></td>
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
