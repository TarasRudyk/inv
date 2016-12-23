import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Products } from '/imports/api/products/products';
import Addproduct from '/imports/ui/pages/addproduct';


export default createContainer(({ id }) => {

	const productHandle = Meteor.subscribe('products');
	const product = productHandle.ready() ? Products.findOne({_id: id}) : {};

  return {
  	product
  };
}, Addproduct);
