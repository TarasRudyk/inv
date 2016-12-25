import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';
import { Billers } from '/imports/api/billers/billers';
import { Products } from '/imports/api/products/products';

import Addinvoice from '/imports/ui/pages/addinvoice';

export default createContainer(() => {

	const customersHandle = Meteor.subscribe('customers');
	const customers = customersHandle.ready() ? Customers.find({}).fetch() : [];

	const billerHandle = Meteor.subscribe('billers');
	const billers = billerHandle.ready() ? Billers.find({}).fetch() : [];

	const productsHandle = Meteor.subscribe('products');
	const products = productsHandle.ready() ? Products.find({}).fetch() : [];

  return {
  	customers,
  	billers,
  	products
  };
}, Addinvoice);
