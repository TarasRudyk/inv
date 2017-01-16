import React from 'react';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	items: [],
    	itemPrice: [],
      edit: this.props.edit
    }

    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }	

  handleSelect(index) {
  	const product = this.refs['select-' + index].value;
  	const price = product === 'Select Poduct' ? "0" : 
  		this.props.products.find((item) => item.description === product).unitPrice;
  	const quantity = this.state.items[index].quantity || 1;
  	const items = this.state.items;
  	items.splice(index, 1, { quantity, price, product })
  	this.setState({ items });

  	const prices = this.state.itemPrice;
  	const itemPrice = ((parseInt(quantity, 10) * parseFloat(price, 10) * 10) / 10) || 0;	
  	if (prices.length) {
  		prices.splice(index, 1, itemPrice);
  	} else {
  		prices.push(itemPrice);
  	}
  	this.setState({ itemPrice: prices });
  };
  

  handleQuantity(index) {
  	const quantity = this.refs['quantity-' + index].value || 1;
  	const price = this.state.items[index].price;
  	const product = this.state.items[index].product;
  	const items = this.state.items;
  	items.splice(index, 1, { quantity, price, product });
  	this.setState({ items });

  	const prices = this.state.itemPrice
  	const itemPrice = ((parseInt(quantity, 10) * parseFloat(price, 10) * 10) / 10) || 0;	
  	if (prices.length) {
  		prices.splice(index, 1, itemPrice);
  	} else {
  		prices.push(itemPrice);
  	}
  	this.setState({ itemPrice: prices });
  }; 


  onAdd() {
  	const items = this.state.items;
  	const quantity = this.state.quantity;
  	const price = this.state.price;
  	const product = this.state.product
  	items.push({ quantity, price, product });
  	this.setState({ items });
  };

  onRemove() {
  	const items = this.state.items;
  	items.splice(items.length-1, 1);
  	this.setState({ items });
  };

  render() {
  	const { products } = this.props;
  	const { items, itemPrice, edit } = this.state;
    this.props.invoice(items, itemPrice);

    return (
    	<tbody>
      {edit ?
        edit.map((item, index) => 
        <tr key={index}>
          <td className="col-sm-2">
            {item.quantity}
          </td>
          <td className="col-sm-4">
            {item.product}
          </td>
          <td className="col-sm-4">
            {item.price}
          </td>
        </tr>
        )
      : null}
    		{this.state.items.map( (item, index) => {
    			const ref = "item_" + index;
    			return(
				   	<tr id="item" key={index} >
				      <td className="col-sm-2">
				        <input className="form-control col-sm-3" type="number" defaultValue="1" 
				          ref={`quantity-${index}`} onChange={this.handleQuantity.bind(this, index)} min='1' />
				      </td>
				      <td className="col-sm-4">
				        <select className="form-control" ref={`select-${index}`} onChange={this.handleSelect.bind(this, index)}>
				          <option defaultValue="Select product">Select Poduct</option>
				          {products.map(item =>
				            <option key={item._id} value={item.description}>{item.description}</option>
				          )}
				        </select>
				      </td>
				      <td className="col-sm-2">
				      	<h5>{this.state.items[index].price || 0}</h5>
				      </td>
				    </tr>
					)
    		})}

		    <tr>
		    	<td className="col-sm-2"></td>
		    	<td className="col-sm-4">
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
  		    </td>
  		    <td className="col-sm-2"></td>
	    	</tr>
		    <tr>
		    	<td className="col-sm-2"></td>
		    	<td className="col-sm-4">
	          <div className="form-group buttons">
	            <div className="col-sm-3"></div>
	            <div className="col-sm-6">
	             <h5><b>Total price:</b></h5>
	            </div>
	          </div>
  		    </td>
  		    <td className="col-sm-2"><h4><b>{(this.state.itemPrice.reduce((a, b) => a + b, 0)).toFixed(2)}<span>&nbsp;Kč</span></b></h4></td>
	    	</tr>
	    </tbody>
    );
  }
}
