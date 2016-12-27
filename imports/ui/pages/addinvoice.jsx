import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputField from '/imports/ui/components/inputField';
import 'react-datepicker/dist/react-datepicker.css';

	
export default class Addinvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      invoices: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.getItem = this.getItem.bind(this); 
  };

  handleChange (date) {
    this.setState({ startDate: date })
  };

  getItem(state) {
    console.log(state)
  }


  onAdd() {
    const invoices = this.state.invoices;
    invoices.push(
      <InputField key={invoices.length} products={this.props.products} callback={this.getItem}  />
    );

    this.setState({invoices});

  };

  onRemove() {
    const invoices = this.state.invoices
    invoices.splice(invoices.length-1, 1)

    this.setState({invoices})
  }


  render() {

    const { billers, customers, products } = this.props;
    const { invoice } = this.state;
    const ObjLength = invoice ? Object.keys(invoice).length : null;
    console.log(this.state.invoices)
    console.log(this.refs.bill)
    
    return (
      <div className="container">
        <div className="row">
          <form className="form-horizontal col-sm-9" onSubmit={this.onSubmit}>

            <div className="form-group">
              <label htmlFor="description" className="col-sm-3 control-label">Biller:</label>
              <div className="col-sm-6">
                <select className="form-control">
                  {
                    billers.map(item =>
                      <option key={item._id} value={item.billerName.bind}>{item.billerName}</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="unitPrice" className="col-sm-3 control-label" >Customer:</label>
              <div className="col-sm-6">
                <select className="form-control">
                  {
                    customers.map(item =>
                      <option key={item._id} value={item.customerName}>{item.customerName}</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">  
              <label htmlFor="cost" className="col-sm-3 control-label">Date:</label>
              <div className="col-sm-6">
                <DatePicker className="form-control" selected={this.state.startDate} 
                    onChange={this.handleChange} />
                    &nbsp;&nbsp;&nbsp;
                <span className="fa fa-calendar" aria-hidden="true"></span>
              </div>
            </div>

            <div className="form-group"> 
            <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Quantity</th>
                      <th>Item</th>
                      <th>Unit Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  <InputField  products={this.props.products} ref="bill" callback={this.getItem}  />
                     {this.state.invoices.map((input, index) => input)}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="form-group buttons">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <a href="" onClick={this.onAdd}>
                  <span className="fa fa-plus" aria-hidden="true"></span>
                </a>
              </div>
              <div className="col-sm-3">
                <a href="" onClick={this.onRemove}>
                  <span className="fa fa-minus" aria-hidden="true"></span>
                </a>
              </div>
            </div>

            <div className="form-group buttons">
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <h5><b>Total Price:</b></h5>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="col-sm-3 control-label">Notes:</label>
              <div className="col-sm-6">
                <textarea className="form-control" rows="5" cols="45" type="text" ref="notes" id="notes" 
                 defaultValue={ObjLength ? product.notes : ''} />
              </div>
            </div>

            { (!this.props.invoice) ?
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


     
