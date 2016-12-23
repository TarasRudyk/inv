import { Meteor } from 'meteor/meteor';

import { Products } from '../products';

Meteor.publish('products', function () {
	
  return Products.find({});
});

