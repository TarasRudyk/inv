import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';
import { Billers } from '/imports/api/billers/billers';
import { Invoices } from '/imports/api/invoice/invoice';

import InvoicesList from '/imports/ui/pages/invoices';

export default createContainer(({ sorted, sortToggle }) => {
	const sort= {}
	sort[sorted] = Number(sortToggle)

	const invoicesHandle = Meteor.subscribe('invoices');
	const invoices = invoicesHandle.ready() ? Invoices.find({}, { sort } ).fetch() : [];

	const billersHandle = Meteor.subscribe('billers');
	const billers = billersHandle.ready() ? Billers.find({}).fetch() : [];

	const customersHandle = Meteor.subscribe('customers');
	const customers = customersHandle.ready() ? Customers.find({}).fetch() : [];

  return {
  	invoices,
  	customers,
  	billers,
  };
  
}, InvoicesList);
