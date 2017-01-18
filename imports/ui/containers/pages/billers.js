import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Billers } from '/imports/api/billers/billers';

import BillersList from '/imports/ui/pages/billers';

export default createContainer(({ sorted, sortToggle }) => {
	const sort= {};
	sort[sorted] = Number(sortToggle);

	const billersHandle = Meteor.subscribe('billers');
	const billers = billersHandle.ready() ? Billers.find({}, { sort } ).fetch() : [];

  return {
  	billers,
  };
}, BillersList);
