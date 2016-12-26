import React from 'react';
import { getLocalState } from '/imports/startup/client/local-state';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	item: {
    		product: 'Select product',
    		price: '0',
	   		quantity: '1',
    	}
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }	

  handleSelect(e) {
  	const product = e.target.value;
  	const price = product === 'Select Poduct' ? "0" : 
  		this.props.products.find((item) => item.description === product).unitPrice;
  	const quantity = getLocalState().get('quantity') || 1;
  	const item = {
  			product,
  			price,
  			quantity
  	}
	  getLocalState().set('product', product);
	  getLocalState().set('price', price);
	  getLocalState().set('item', item)
  	this.setState({ 
  		item
		});
		this.props.callback({
			item
		});
  };
  

  handleQuantity() {
  	const quantity = this.refs.quantity.value;
  	const product = getLocalState().get('product');
  	const price = getLocalState().get('price');
  	const item = {
  		product,
  		price,
  		quantity
  	};
	  getLocalState().set('quantity', quantity);
	  getLocalState().set('item', item)

  	this.setState({ 
  		item
		});
		this.props.callback(item);
  };

  render() {
  	const { products } = this.props; 
  	console.log(this.state.item)
    return (
	   	<tr>
	      <td className="col-sm-2">
	        <input className="form-control col-sm-3" type="number" defaultValue="1" 
	          ref="quantity" onChange={this.handleQuantity} min='1' />
	      </td>
	      <td className="col-sm-4">
	        <select className="form-control" onChange={this.handleSelect}>
	          <option defaultValue="Select product">Select Poduct</option>
	          {products.map(item =>
	            <option key={item._id} value={item.description}>{item.description}</option>
	          )}
	        </select>
	      </td>
	      <td className="col-sm-2">
	      	<h5>$ {this.state.item.price || 0}</h5>
	      </td>
	    </tr>
    );
  }
}
