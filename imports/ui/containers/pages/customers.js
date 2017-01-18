import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';

import CustomersList from '/imports/ui/pages/customers';

export default createContainer(({ sorted, sortToggle }) => {
	const sort= {};
	sort[sorted] = Number(sortToggle);

	const customersHandle = Meteor.subscribe('customers');
	const customers = customersHandle.ready() ? Customers.find({}, { sort } ).fetch() : [];

  return {
  	customers,
  };
}, CustomersList);
