import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Customers } from '../customers';

Meteor.publish('customers', function () {
	
  return Customers.find({});
});

