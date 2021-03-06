import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import InputField from '/imports/ui/components/inputField';
import { getLocalState } from '/imports/startup/client/local-state';
import { createInvoice } from '/imports/api/invoice/actions';
import { editInvoice } from '/imports/api/invoice/actions';

	
export default class Addinvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueDate: moment(),
      dueDate: moment().add(30, 'days'),
      date: undefined,
      items: [],
      invoice: this.props.invoice
    };

    this.handleDate = this.handleDate.bind(this);
    this.handleIssueDate = this.handleIssueDate.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
    this.getItem = this.getItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  };

  handleDate (date) {
    this.setState({ date })
  };

  handleIssueDate (date) {
    this.setState({ issueDate: date })
  };

  handleDueDate (date) {
    this.setState({ dueDate: date })
  }

  getItem(items) {
    const itemsArr = this.state.items;
    getLocalState().set('items', items);
  }

  onSubmit(e) {
    e.preventDefault();

    const items = getLocalState().get('items');
    const notes = this.refs.notes.value.trim();
    const dates = {
      date: this.state.date ? this.state.date._d : null,
      issueDate: this.state.issueDate._d,
      dueDate: this.state.dueDate._d,
    }
    const customer = this.refs.customer.value;
    const biller = this.refs.biller.value;

    createInvoice(items, notes, dates, customer, biller);
  }

  onEdit(e) {
    e.preventDefault();

    const id = this.state.invoice._id
    const items = getLocalState().get('items');
    const notes = this.refs.notes.value.trim();
    const dates = {
      date: this.state.date ? this.state.date._d : null,
      issueDate: this.state.issueDate._d,
      dueDate: this.state.dueDate._d,
    }
    const customer = this.refs.customer.value;
    const biller = this.refs.biller.value;

    editInvoice(id, items, notes, dates, customer, biller)
  }

  render() {

    const { billers, customers, products } = this.props;
    const { invoice, items } = this.state;
    const ObjLength = invoice ? Object.keys(invoice).length : null; 

    return (
      <div className="container">
        <div className="row">
          <form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

            <div className="form-group">
              <label className="col-sm-3 control-label">Biller:</label>
              <div className="col-sm-6">
                <select className="form-control" ref="biller">
                  { ObjLength ?
                    <option value={invoice.biller} default>{invoice.billerName}</option> : null
                  }
                  {
                    billers.map(item =>
                      <option key={item._id} value={item._id} >{item.billerName}</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-3 control-label" >Customer:</label>
              <div className="col-sm-6">
                <select className="form-control" ref="customer">
                  { ObjLength ?
                    <option value={invoice.customer} default>{invoice.customerName}</option> : null
                  }
                  {
                    customers.map(item =>
                      <option key={item._id} value={item._id}>{item.customerName}</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">  
              <label className="col-sm-3 control-label">Date of issue:</label>
              <div className="col-sm-6">
                <DatePicker className="form-control"
                            selected={this.state.issueDate }
                            onChange={this.handleIssueDate} />
                    &nbsp;&nbsp;&nbsp;
                <span className="fa fa-calendar" aria-hidden="true"></span>
              </div>
            </div>

            <div className="form-group">  
              <label className="col-sm-3 control-label">Due date:</label>
              <div className="col-sm-6">
                <DatePicker className="form-control" 
                    selected={this.state.dueDate} 
                    onChange={this.handleDueDate} />
                    &nbsp;&nbsp;&nbsp;
                <span className="fa fa-calendar" aria-hidden="true"></span>
              </div>
            </div>

            <div className="form-group">  
              <label htmlFor="cost" className="col-sm-3 control-label">Date:</label>
              <div className="col-sm-6">
                <DatePicker className="form-control"
                    selected={this.state.date} 
                    onChange={this.handleDate} />
                    &nbsp;&nbsp;&nbsp;
                <span className="fa fa-calendar" aria-hidden="true"></span>
              </div>
            </div>

            <div className="form-group"> 
            <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <table className="table col-sm-10">
                  <thead>
                    <tr>
                      <th>Quantity</th>
                      <th>Item</th>
                      <th>Unit Price</th>
                    </tr>
                  </thead>
                  {invoice ? 
                    <InputField  products={this.props.products} invoice={this.getItem} edit={invoice.items} /> :
                    <InputField  products={this.props.products} invoice={this.getItem} />
                  }
                </table>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
              <div className="col-sm-6">
                <textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
                defaultValue={ObjLength ? invoice.notes : ''} />
              </div>
            </div>

            <div className="form-group buttons">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
              { !ObjLength ?
                <button type="submit" className="btn btn-primary btn-custom">Save</button> :
                <button type="button" onClick={this.onEdit} className="btn btn-success btn-custom">Edit</button>
              }
              </div>
            </div> 

          </form>
        </div>
      </div>
    );
  }
}


     
