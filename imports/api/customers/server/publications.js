import { Meteor } from 'meteor/meteor';

import { Customers } from '../customers';

Meteor.publish('customers', function () {
	
  return Customers.find({});
});

