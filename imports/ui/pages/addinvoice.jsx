import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

	
export default class Addinvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      item1: {
        description: '',
        unitPrice: '0'
      },
      item2: {
        description: '',
        unitPrice: '0'
      },
      item3: {
        description: '',
        unitPrice: '0'
      },
      item4: {
        description: '',
        unitPrice: '0'
      },
      item5: {
        description: '',
        unitPrice: '0'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect1 = this.handleSelect1.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.handleSelect3 = this.handleSelect3.bind(this);
    this.handleSelect4 = this.handleSelect4.bind(this);
    this.handleSelect5 = this.handleSelect5.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);

  };

  handleChange (date) {
    this.setState({ startDate: date })
  }

  handleSelect1(e) {
    const description = e.target.value;
    const item = this.props.products.find((item) => item.description === description);
    const unitPrice =  item ? item.unitPrice : 0
    if (item)
    this.setState({ 
      item1: {
        description,
        unitPrice,
      }
    });
  }

  handleSelect2(e) {
    const description = e.target.value;
    const item = this.props.products.find((item) => item.description === description);
    const unitPrice =  item ? item.unitPrice : 0;
    this.setState({ 
      item2: {
        description,
        unitPrice
        } 
      });
  }
  handleSelect3(e) {
    const description = e.target.value;
    const item = this.props.products.find((item) => item.description === description);
    const unitPrice =  item ? item.unitPrice : 0;
    this.setState({ 
      item3: {
        description,
        unitPrice
      } 
    });
  }
  handleSelect4(e) {
    const description = e.target.value;
    const item = this.props.products.find((item) => item.description === description);
    const unitPrice =  item ? item.unitPrice : 0;
    this.setState({ 
      item4: {
        description,
        unitPrice
        }
     });
  }
  handleSelect5(e) {
    const description = e.target.value;
    const item = this.props.products.find((item) => item.description === description);
    const unitPrice =  item ? item.unitPrice : 0;
    this.setState({ 
      item5: {
        description,
        unitPrice
      }
   });
  }
  handleChange1(e) {
    const unitPrice = e.target.value;
    this.setState({
      item1: {
        unitPrice
      }
    })
  }
  handleChange2(e) {
    const unitPrice = e.target.value;
    this.setState({
      item1: {
        unitPrice
      }
    })
  }
  handleChange3(e) {
    const unitPrice = e.target.value;
    this.setState({
      item1: {
        unitPrice
      }
    })
  }
  handleChange4(e) {
    const unitPrice = e.target.value;
    this.setState({
      item1: {
        unitPrice
      }
    })
  }
  handleChange5(e) {
    const unitPrice = e.target.value;
    this.setState({
      item1: {
        unitPrice
      }
    })
  }


  render() {

    const { billers, customers, products } = this.props;
    const { item1, item2, item3, item4, item5, invoice } = this.state;
    const ObjLength = invoice ? Object.keys(invoice).length : null;

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
                    <tr>
                      <td className="col-sm-2">
                        <input className="form-control col-sm-3" type="number" defaultValue={1} 
                          ref="quantity1" />
                      </td>
                      <td className="col-sm-4">
                        <select className="form-control" onChange={this.handleSelect1}>
                          <option defaultValue="Select product">Select Poduct</option>
                          {products.map(item =>
                            <option key={item._id} value={item.description}>{item.description}</option>
                          )}
                        </select>
                      </td>
                      <td className="col-sm-2">
                        <input className="form-control" type="string" ref="unitPrice1" 
                          value={item1.unitPrice} onChange={this.handleChange1} />
                      </td>
                    </tr>
                    <tr>
                      <td className="col-sm-2">
                        <input className="form-control col-sm-3" type="number" defaultValue={1} 
                          ref="quantity2" />
                      </td>
                      <td className="col-sm-4">
                        <select className="form-control" onChange={this.handleSelect2}>
                          <option defaultValue="Select product">Select Poduct</option>
                          {products.map(item =>
                            <option key={item._id} value={item.description}>{item.description}</option>
                          )}
                        </select>
                      </td>
                      <td className="col-sm-2">
                        <input className="form-control" type="string" ref="unitPrice2" 
                          value={item2.unitPrice} onChange={this.handleChange2} />
                      </td>
                    </tr>
                    <tr>
                      <td className="col-sm-2">
                        <input className="form-control col-sm-3" type="number" defaultValue={1} 
                          ref="quantity3" />
                      </td>
                      <td className="col-sm-4">
                        <select className="form-control" onChange={this.handleSelect3}>
                          <option defaultValue="Select product">Select Poduct</option>
                          {products.map(item =>
                            <option key={item._id} value={item.description}>{item.description}</option>
                          )}
                        </select>
                      </td>
                      <td className="col-sm-2">
                        <input className="form-control" type="string" ref="unitPrice3" 
                          value={item3.unitPrice} onChange={this.handleChange3} />
                      </td>
                    </tr>
                    <tr>
                      <td className="col-sm-2">
                        <input className="form-control col-sm-3" type="number" defaultValue={1} 
                          ref="quantity4" />
                      </td>
                      <td className="col-sm-4">
                        <select className="form-control" onChange={this.handleSelect4}>
                          <option defaultValue="Select product">Select Poduct</option>
                          {products.map(item =>
                            <option key={item._id} value={item.description}>{item.description}</option>
                          )}
                        </select>
                      </td>
                      <td className="col-sm-2">
                        <input className="form-control" type="string" ref="unitPrice4" 
                          value={item4.unitPrice} onChange={this.handleChange4} />
                      </td>
                    </tr>
                    <tr>
                      <td className="col-sm-2">
                        <input className="form-control col-sm-3" type="number" defaultValue={1} 
                          ref="quantity5" />
                      </td>
                      <td className="col-sm-4">
                        <select className="form-control" onChange={this.handleSelect5}>
                          <option defaultValue="Select product">Select Poduct</option>
                          {products.map(item =>
                            <option key={item._id} value={item.description}>{item.description}</option>
                          )}
                        </select>
                      </td>
                      <td className="col-sm-2">
                        <input className="form-control" type="string" ref="unitPrice5" 
                          value={item5.unitPrice} onChange={this.handleChange5} />
                      </td>
                    </tr>
                    <tr>
                      <td className="col-sm-2">
                      </td>
                      <td className="col-sm-4">
                       <h4>Total Price:</h4>
                      </td>
                      <td className="col-sm-2">
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
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