import React from 'react';

import { createCustomer } from '/imports/api/customers/actions';
import { editCustomer } from '/imports/api/customers/actions';
	
export default class Addcustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	exist: "Enabled",
    	customer: this.props.customer
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();

		const customerName = this.refs.customerName.value.trim();
		const customerContact = this.refs.customerContact.value.trim();
		const address = this.refs.straddress.value.trim();
		const state =this.refs.state.value.trim();
		const city = this.refs.city.value.trim();
		const zip = this.refs.zip.value.trim();
		const country = this.refs.country.value;
		const phone = this.refs.phone.value.trim();
		const mobile = this.refs.mob.value.trim();
		const fax = this.refs.fax.value.trim();
		const email = this.refs.email.value.trim();
		const notes = this.refs.notes.value.trim();
		const exist = this.state.exist;

	  createCustomer(
	    customerName,
			customerContact,
			address,
			state,
			city,
			zip,
			country,	     
			phone,
			mobile,
			fax,
			email,
			notes,
			exist
	  	)
  };

  onCancel() {
	  this.refs.customerName.value = "";
		this.refs.customerContact.value = "";
		this.refs.straddress.value = "";
		this.refs.state.value = "";
		this.refs.city.value = "";
		this.refs.zip.value = "";
		this.refs.country.value = "";
		this.refs.phone.value = "";
		this.refs.mob.value = "";
		this.refs.fax.value = "";
		this.refs.email.value = "";
		this.refs.notes.value = "";
  }

  handleChange(e) {
  	this.setState({ exist: e.target.value })
	}

	onEdit() {
		const Id = this.state.customer._id;
		const customerName = this.refs.customerName.value.trim();
		const customerContact = this.refs.customerContact.value.trim();
		const address = this.refs.straddress.value.trim();
		const state =this.refs.state.value.trim();
		const city = this.refs.city.value.trim();
		const zip = this.refs.zip.value.trim();
		const country = this.refs.country.value;
		const phone = this.refs.phone.value.trim();
		const mobile = this.refs.mob.value.trim();
		const fax = this.refs.fax.value.trim();
		const email = this.refs.email.value.trim();
		const notes = this.refs.notes.value.trim();
		const exist = this.state.exist;

	  editCustomer(
	  	Id,
	    customerName,
			customerContact,
			address,
			state,
			city,
			zip,
			country,	     
			phone,
			mobile,
			fax,
			email,
			notes,
			exist
	  	)
	}

  render() {
  	const { customer } = this.state;

    return (
			<div className="container">
				<div className="row">
				<form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

					<div className="form-group">
						<label htmlFor="name" className="col-sm-3 control-label">* Customer name:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="text" ref="customerName" id="name" 
								defaultValue={customer.customerName} /> :
							<input className="form-control" type="text" ref="customerName" id="name" />
						}
							<span className="tip">[a-zA-Z, min 2 chars]</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="contact" className="col-sm-3 control-label" >* Customer Contact (Attn):</label>
						<div className="col-sm-6">
						{ customer ?
							<input className="form-control" type="text" ref="customerContact" id="contact" 
								defaultValue={customer.customerContact} /> :
							<input className="form-control" type="text" ref="customerContact" id="contact" />
						}
						</div>
					</div>

					<div className="form-group">	
						<label htmlFor="address" className="col-sm-3 control-label">Street address:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="text" ref="straddress" id="straddress" 
								defaultValue={customer.address.address} /> :
							<input className="form-control" type="text" ref="straddress" id="straddress" />
						}
						</div>
					</div>
 
					<div className="form-group">
						<label htmlFor="city" className="col-sm-3 control-label" >* City:</label>
						<div className="col-sm-6">
						{ customer ?
							<input className="form-control" type="text" ref="city" id="city"
								defaultValue={customer.address.city} /> : 
							<input className="form-control" type="text" ref="city" id="city" />
						}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="state" className="col-sm-3 control-label">State:</label>
						<div className="col-sm-6">
						{ customer ?
							<input className="form-control" type="text" ref="state" id="state" 
								defaultValue={customer.address.state} /> :
							<input className="form-control" type="text" ref="state" id="state" /> 
						}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="zip" className="col-sm-3 control-label">Zip code:</label>
						<div className="col-sm-6">
						{ customer ?
							<input className="form-control" type="text" ref="zip" id="zip" 
							 	defaultValue={customer.address.zip} /> :
						  <input className="form-control" type="text" ref="zip" id="zip" />
					  }
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="country" className="col-sm-3 control-label">Country:</label>
						<div className="col-sm-6">
						{ customer ?
							<input className="form-control" type="text" ref="country" id="country" 
								defaultValue={customer.address.country} /> :
							<input className="form-control" type="text" ref="country" id="country" />
						}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="phone" className="col-sm-3 control-label" >* Phone:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="text" ref="phone" id="phone" 
								defaultValue={customer.contacts.phone} /> :
							<input className="form-control" type="text" ref="phone" id="phone" />
						}
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="mob" className="col-sm-3 control-label" >Mobile:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="text" ref="mob" id="mob" 
								defaultValue={customer.contacts.mobile} /> :
							<input className="form-control" type="text" ref="mob" id="mob" />
						}
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="fax" className="col-sm-3 control-label" >Fax:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="text" ref="fax" id="fax" 
								defaultValue={customer.contacts.fax} /> :
							<input className="form-control" type="text" ref="fax" id="fax" />
						}
							<span className="tip">Numbers are allowed only</span>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="email" className="col-sm-3 control-label">* Email:</label>
						<div className="col-sm-6">
						{ customer ? 
							<input className="form-control" type="email" ref="email" id="email" 
								defaultValue={customer.contacts.email} /> : 
							<input className="form-control" type="email" ref="email" id="email" />
						}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
						<div className="col-sm-6">
						{ customer ? 
							<textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
								defaultValue={customer.notess} /> :
							<textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" />
						}
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-3"></div>
						<div className="col-sm-6">
            <select onChange={this.handleChange	}>
              <option value="Enabled" default>Enabled</option>
              <option value="Disabled" >Disabled</option>
            </select>
						</div>
					</div>

					{ (!this.props.customer) ?
						<div className="form-group buttons">
							<div className="col-sm-3"></div>
							<div className="col-sm-3">
								<button type="button" type="submit" className="btn btn-primary btn-custom">Save</button>
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