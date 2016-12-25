import React from 'react';

import { createCustomer } from '/imports/api/customers/actions';
import { editCustomer } from '/imports/api/customers/actions';
	
export default class Addcustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	enabled: 'true',
    	customer: this.props.customer
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();

    const customer = {
    	customerName: this.refs.customerName.value.trim(),
			customerContact: this.refs.customerContact.value.trim(),
			address: {
				street: this.refs.street.value.trim(),
				city: this.refs.city.value.trim(),
				zip: this.refs.zip.value.trim(),
				country: this.refs.country.value,
			},
			contacts: {
				phone: this.refs.phone.value.trim(),
				mobile: this.refs.mob.value.trim(),
				fax: this.refs.fax.value.trim(),
				email: this.refs.email.value.trim(),
			},
			notes: this.refs.notes.value.trim(),
			enabled: this.state.enabled
    };

	  createCustomer(customer);
  };

  onCancel() {
	  this.refs.customerName.value = "";
		this.refs.customerContact.value = "";
		this.refs.street.value = "";
		this.refs.city.value = "";
		this.refs.zip.value = "";
		this.refs.country.value = "";
		this.refs.phone.value = "";
		this.refs.mob.value = "";
		this.refs.fax.value = "";
		this.refs.email.value = "";
		this.refs.notes.value = "";
  };

  handleChange(e) {
  	this.setState({ enabled: e.target.value })
	};

	onEdit() {
		const Id = this.state.customer._id;
    const customer = {
    	customerName: this.refs.customerName.value.trim(),
			customerContact: this.refs.customerContact.value.trim(),
			address: {
				street: this.refs.street.value.trim(),
				city: this.refs.city.value.trim(),
				zip: this.refs.zip.value.trim(),
				country: this.refs.country.value,
			},
			contacts: {
				phone: this.refs.phone.value.trim(),
				mobile: this.refs.mob.value.trim(),
				fax: this.refs.fax.value.trim(),
				email: this.refs.email.value.trim(),
			},
			notes: this.refs.notes.value.trim(),
			enabled: this.state.enabled
    };

	  editCustomer(Id, customer);
	};

  render() {
  	const { customer } = this.state;
  	const ObjLength = customer ? Object.keys(customer).length : null;

    return (
			<div className="container">
				<div className="row">
				<form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

					<div className="form-group">
						<label htmlFor="name" className="col-sm-3 control-label">* Customer name:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="customerName" id="name" 
								defaultValue={ObjLength ? customer.customerName : ''} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="contact" className="col-sm-3 control-label" >* Customer Contact (Attn):</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="customerContact" id="contact" 
								defaultValue={ObjLength ? customer.customerContact : ''} />
						</div>
					</div>

					<div className="form-group">	
						<label htmlFor="street" className="col-sm-3 control-label">Street address:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="street" id="street" 
								defaultValue={ObjLength ? customer.address.street :''} />
						</div>
					</div>
 
					<div className="form-group">
						<label htmlFor="city" className="col-sm-3 control-label" >* City:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="city" id="city"
								defaultValue={ObjLength ? customer.address.city : ''} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="zip" className="col-sm-3 control-label">Zip code:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="zip" id="zip" 
							 	defaultValue={ObjLength ? customer.address.zip : ''} />
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="country" className="col-sm-3 control-label">Country:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="country" id="country" 
								defaultValue={ObjLength ? customer.address.country : ''} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="phone" className="col-sm-3 control-label" >* Phone:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="phone" id="phone" 
								defaultValue={ObjLength ? customer.contacts.phone : ''} />
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="mob" className="col-sm-3 control-label" >Mobile:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="mob" id="mob" 
								defaultValue={ObjLength ? customer.contacts.mobile : ''} />
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="fax" className="col-sm-3 control-label" >Fax:</label>
						<div className="col-sm-6">
							<input className="form-control" type="text" ref="fax" id="fax" 
								defaultValue={ObjLength ? customer.contacts.fax : ''} /> 
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="email" className="col-sm-3 control-label">* Email:</label>
						<div className="col-sm-6">
							<input className="form-control" type="email" ref="email" id="email" 
								defaultValue={ObjLength ? customer.contacts.email : ''} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
						<div className="col-sm-6">
							<textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
								defaultValue={ObjLength ? customer.notes : ''} />
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-3"></div>
						<div className="col-sm-6">
            <select className="form-control" onChange={this.handleChange	}>
              <option value={true} default>Enabled</option>
              <option value={false}>Disabled</option>
            </select>
						</div>
					</div>

					{ (!this.props.customer) ?
						<div className="form-group buttons">
							<div className="col-sm-3"></div>
							<div className="col-sm-3">
								<button type="submit" className="btn btn-primary btn-custom">Save</button>
							</div>
							<div className="col-sm-3">
								<button type="button" onClick={this.onCancel} className="btn btn-danger btn-custom">Cancel</button>
							</div>
						</div> : 
						<div className="form-group buttons">
							<div className="col-sm-3"></div>
							<div className="col-sm-6">
								<button type="button" onClick={this.onEdit} className="btn btn-success btn-custom">Edit</button>
							</div>
						</div>
					}

				</form>
				</div>
			</div>
    );
  }
}