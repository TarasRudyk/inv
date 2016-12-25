import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';

import Invoices from '/imports/ui/pages/invoices';

export default createContainer(() => {

	const customersHandle = Meteor.subscribe('customers');
	const customers = customersHandle.ready() ? Customers.find({}).fetch() : [];

	console.log(customers)

  return {
  	customers,
  };
  
}, Invoices);
