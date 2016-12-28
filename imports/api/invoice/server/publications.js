import { Meteor } from 'meteor/meteor';

import { Invoices } from '../invoice';

Meteor.publish('invoices', function () {
	
  return Invoices.find({});
});

