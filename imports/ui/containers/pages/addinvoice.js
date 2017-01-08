import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';
import { Billers } from '/imports/api/billers/billers';
import { Products } from '/imports/api/products/products';
import { Invoices } from '/imports/api/invoice/invoice';

import Addinvoice from '/imports/ui/pages/addinvoice';

export default createContainer(({ id }) => {

	const customersHandle = Meteor.subscribe('customers');
	const customers = customersHandle.ready() ? Customers.find({}).fetch() : [];

	const billerHandle = Meteor.subscribe('billers');
	const billers = billerHandle.ready() ? Billers.find({}).fetch() : [];

	const productsHandle = Meteor.subscribe('products');
	const products = productsHandle.ready() ? Products.find({}).fetch() : [];

	const invoicesHandle = Meteor.subscribe('invoices');
	const invoice = invoicesHandle.ready() ? Invoices.findOne({ _id: id }) : {};

  return {
  	customers,
  	billers,
  	products,
  	invoice
  };
}, Addinvoice);
