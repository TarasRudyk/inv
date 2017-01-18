import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Products } from '/imports/api/products/products';

import ProductsList from '/imports/ui/pages/products';
import { Invoices } from '/imports/api/invoice/invoice';

export default createContainer(({ sorted, sortToggle }) => {
	const sort= {}
	sort[sorted] = Number(sortToggle)

	const productsHandle = Meteor.subscribe('products');
	const products = productsHandle.ready() ? Products.find({}, { sort } ).fetch() : [];
	console.log(products)

  return {
  	products,
  };
}, ProductsList);
