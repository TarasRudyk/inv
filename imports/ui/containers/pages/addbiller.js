import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Billers } from '/imports/api/billers/billers';
import Addbiller from '/imports/ui/pages/addbiller';

export default createContainer(({ id }) => {

	const billerHandle = Meteor.subscribe('billers');
	const biller = billerHandle.ready() ? Billers.findOne({_id: id}) : {};

  return {
  	biller,
  };
}, Addbiller);
