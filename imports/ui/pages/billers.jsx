import React from 'react';

import {removeBiller} from '/imports/api/billers/actions';

export default class Billers extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};

  }

  onRemove (id) {
  	if (confirm('Are you sure, delete permanently ?')) {
	  	removeBiller(id)
  	}
  }

  handleSorting (sorted) {
  	this.state.sortToggle === 1 ? this.setState({ sortToggle: -1 }) : this.setState({ sortToggle: 1 });
  	let sortToggle = this.state.sortToggle

  	FlowRouter.setQueryParams({ sorted, sortToggle });
  }

  render() {
  	const { billers } = this.props;
		return (
			<div className="container">
				<div className="row">
		  		<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Actions</th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'Id')}>ID</a></th>
				        <th><a href="" className="sort" onClick={this.handleSorting.bind(this, 'billerName')}>Name</a></th>
				        <th>e-mail</th>
				        <th>Enabled</th>
				      </tr>
				    </thead>
				    <tbody>
				    {billers.map(item => (
			    		<tr key={item._id}>
			    			<td>
					        <a href={`/billers/addbiller/${item._id}`}>
					          <span className="fa fa-pencil" aria-hidden="true"></span>
					        </a>
					        &nbsp;&nbsp;&nbsp;
					        <a href="" onClick={this.onRemove.bind(this, item._id)}>
					          <span className="fa fa-trash" aria-hidden="true"></span>
					        </a>
				        </td>
			    			<td>{item.Id}</td>
			    			<td>{item.billerName}</td>
			    			<td>{item.contacts.email}</td>
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
