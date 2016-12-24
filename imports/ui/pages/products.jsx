import React from 'react';

import {removeProduct} from '/imports/api/products/actions';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  onRemove (id) {
  	if (confirm('Are you sure, delete permanently ?')) {
	  	removeProduct(id)
  	}
  }

  render() {
  	const { products } = this.props;
    return (
			<div className="container">
				<div className="row">
		  		<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Action</th>
				        <th>ID</th>
				        <th>Description</th>
				        <th>Unit Price</th>
				        <th>Enabled</th>
				      </tr>
				    </thead>
				    <tbody>
				    {products.map(item => (
			    		<tr key={item._id}>
			    			<td>
					        <a href={`/products/addproduct/${item._id}`}>
					          <span className="fa fa-pencil"></span>
					        </a>
					        &nbsp;&nbsp;&nbsp;
					        <a href="" onClick={this.onRemove.bind(this, item._id)}>
					          <span className="fa fa-trash" aria-hidden="true"></span>
					        </a>
				        </td>
				        <td>{item.Id}</td>
			    			<td>{item.description}</td>
			    			<td>{item.unitPrice}</td>
			    			{item.enabled ? 
			    			<td><span className="glyphicon glyphicon-ok"></span></td> :
			    			<td><span className="glyphicon glyphicon-remove"></span></td> 
			    			}
			    		</tr>
			    		))}
				    </tbody>
 				 	</table>
		  	</div>
			</div>
    );
  }
}
