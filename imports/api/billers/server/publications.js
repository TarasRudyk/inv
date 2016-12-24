import { Meteor } from 'meteor/meteor';

import { Billers } from '../billers';

Meteor.publish('billers', function () {
	
  return Billers.find({});
});
