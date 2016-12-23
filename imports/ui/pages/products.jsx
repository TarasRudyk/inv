import React from 'react';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

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
				    {
				    	products.map(item => (
				    		<tr key={item._id}>
				    			<td>
						        <a href={`/products/addproduct/${item._id}`}>
						          <span className="glyphicon glyphicon-pencil"></span>
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
				    		))
				    }
				    </tbody>
 				 	</table>
		  	</div>
			</div>
    );
  }
}
