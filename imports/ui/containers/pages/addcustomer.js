import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Customers } from '/imports/api/customers/customers';
import Addcustomer from '/imports/ui/pages/addcustomer';


export default createContainer(({ id }) => {

	const customersHandle = Meteor.subscribe('customers');
	const customer = customersHandle.ready() ? Customers.findOne({_id: id}) : {};

  return {
  	customer,
  };
}, Addcustomer);
