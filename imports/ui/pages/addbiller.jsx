import React from 'react';

import { createBiller } from '/imports/api/billers/actions';
import { editBiller } from '/imports/api/billers/actions';
	
export default class Addbiller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: 'true',
      biller: this.props.biller
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();
    const biller = {
      billerName: this.refs.billerName.value.trim(),
      address: {
        street: this.refs.address.value.trim(),
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
      invoiceFooter: this.refs.invoiceFooter.value.trim(),
      notes: this.refs.notes.value.trim(),
      enabled: this.state.enabled
    };

    createBiller(biller);
  };

  onCancel() {
    this.refs.billerName.value = '';
    this.refs.customerContact.value = '';
    this.refs.address.value = '';
    this.refs.city.value = '';
    this.refs.zip.value = '';
    this.refs.country = '';
    this.refs.phone.value = '';
    this.refs.mob.value = '';
    this.refs.fax.value = '';
    this.refs.email.value = '';
    this.refs.invoiceFooter.value = '';
    this.refs.notes.value = '';
  };

  onEdit() {
    const Id = this.state.biller._id;
    const biller = {
      billerName: this.refs.billerName.value.trim(),
      address: {
        street: this.refs.address.value.trim(),
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
      invoiceFooter: this.refs.invoiceFooter.value.trim(),
      notes: this.refs.notes.value.trim(),
      enabled: this.state.enabled
    };

    editBiller(Id, biller);
  };

  handleChange(e) {
    this.setState({ enabled: e.target.value })
  }

  render() {
    const { biller } = this.state;
    const ObjLength = biller ? Object.keys(biller).length : null;

    return (
    	<div className="container">
        <div className="row">
        <form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-3 control-label">* Biller Name:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="billerName" id="name" 
                defaultValue={ObjLength ? biller.billerName : ''} />
            </div>
          </div>

          <div className="form-group">  
            <label htmlFor="address" className="col-sm-3 control-label">Street address:</label>
            <div className="col-sm-6">
               <input className="form-control" type="text" ref="address" id="address" 
                defaultValue={ObjLength ? biller.address.street : ''} />
            </div>
          </div>
 
          <div className="form-group">
            <label htmlFor="city" className="col-sm-3 control-label" >* City:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="city" id="city"  
                defaultValue={ObjLength ? biller.address.city : ''} />
            </div>
          </div>  

          <div className="form-group">
            <label htmlFor="zip" className="col-sm-3 control-label">Zip code:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="zip" id="zip" 
                defaultValue={ObjLength ? biller.address.zip : ''} />
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country" className="col-sm-3 control-label">Country:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="country" id="country"  
                defaultValue={ObjLength ? biller.address.country : ''} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="col-sm-3 control-label" >* Phone:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="phone" id="phone" 
                defaultValue={ObjLength ? biller.contacts.phone : ''} />
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mob" className="col-sm-3 control-label" >Mobile:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="mob" id="mob"  
                defaultValue={ObjLength ? biller.contacts.mobile : ''} />
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fax" className="col-sm-3 control-label" >Fax:</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" ref="fax" id="fax"  
                defaultValue={ObjLength ? biller.contacts.fax : ''} />
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">* Email:</label>
            <div className="col-sm-6">
              <input className="form-control" type="email" ref="email" id="email"  
                defaultValue={ObjLength ? biller.contacts.email : ''} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="invoiceFooter" className="col-sm-3 control-label">Invoice footer:</label>
            <div className="col-sm-6">
              <textarea className="form-control" rows="5" cols="45" type="text" ref="invoiceFooter" 
               id="invoiceFooter" defaultValue={ObjLength ? biller.invoiceFooter : ''} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
            <div className="col-sm-6">
              <textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
                defaultValue={ObjLength ? biller.notes : ''} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <select onChange={this.handleChange}>
              <option value={true} default>Enabled</option>
              <option value={false}>Disabled</option>
            </select>
            </div>
          </div>

          { (!this.props.biller) ?
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