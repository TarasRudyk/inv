import React from 'react';

import { createProduct } from '/imports/api/products/actions';
import { editProduct } from '/imports/api/products/actions'
	
export default class Addproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: 'true',
      product: this.props.product
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();
    const product = {
      description: this.refs.description.value.trim(),
      unitPrice: this.refs.unitPrice.value.trim(),
      cost: this.refs.cost.value.trim(),
      customField: this.refs.customField.value.trim(),
      notes: this.refs.notes.value.trim(),
      enabled: this.state.enabled
    };

    createProduct(product);
    
  };

  onCancel() {
    this.refs.description.value = '';
    this.refs.unitPrice.value = '';
    this.refs.cost.value = '';
    this.refs.customField.value = '';
    this.refs.notes.value = '';
  };

  onEdit() {
    const Id = this.state.product._id;
    const product = {
      description: this.refs.description.value.trim(),
      unitPrice: this.refs.unitPrice.value.trim(),
      cost: this.refs.cost.value.trim(),
      customField: this.refs.customField.value.trim(),
      notes: this.refs.notes.value.trim(),
      enabled: this.state.enabled
    };
    editProduct(product, Id)

  };

  handleChange(e) {
    this.setState({ enabled: e.target.value })
  };


  render() {  
  const { product } = this.state;
  const ObjLength = product ? Object.keys(product).length : null;

    return (
    	<div className="container">
        <div className="row">
        <form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

          <div className="form-group">
            <label htmlFor="description" className="col-sm-3 control-label">* Description:</label>
            <div className="col-sm-6">
            { ObjLength ?
              <input className="form-control" type="text" ref="description" id="description" 
               defaultValue={product.description} /> :
              <input className="form-control" type="text" ref="description" id="description" />
            }
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="unitPrice" className="col-sm-3 control-label" >* Unit Price:</label>
            <div className="col-sm-6">
            { ObjLength ?
              <input className="form-control" type="text" ref="unitPrice" id="unitPrice" 
               defaultValue={product.unitPrice} /> :
              <input className="form-control" type="text" ref="unitPrice" id="unitPrice" />
            }
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>

          <div className="form-group">  
            <label htmlFor="cost" className="col-sm-3 control-label">Cost:</label>
            <div className="col-sm-6">
            { ObjLength ?
              <input className="form-control" type="text" ref="cost" id="cost" 
                defaultValue={product.cost} /> :
              <input className="form-control" type="text" ref="cost" id="cost" />
            }
              <span className="tip">Numbers are allowed only</span>
            </div>
          </div>
 
          <div className="form-group">
            <label htmlFor="customField" className="col-sm-3 control-label" >Custom Field:</label>
            <div className="col-sm-6">
            { ObjLength ?
              <input className="form-control" type="text" ref="customField" id="customField"
                defaultValue={product.customField} /> :
              <input className="form-control" type="text" ref="customField" id="customField" />
            }
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
            <div className="col-sm-6">
            { ObjLength ?
              <textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
               defaultValue={product.notes} /> :
              <textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" />
            }
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <select onChange={this.handleChange }>
              <option value={true} default>Enabled</option>
              <option value={false}>Disabled</option>
            </select>
            </div>
          </div>
          { (!this.props.product) ?
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
