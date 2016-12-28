import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';
import { Invoices } from '/imports/api/invoice/invoice';

import InvoicesList from '/imports/ui/pages/invoices';

export default createContainer(() => {

	const invoicesHandle = Meteor.subscribe('invoices');
	const invoices = invoicesHandle.ready() ? Invoices.find({}).fetch() : [];

  return {
  	invoices,
  };
  
}, InvoicesList);
