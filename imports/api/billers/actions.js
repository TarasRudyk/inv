import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './methods'


export const createBiller = (biller) => {

	return Meteor.call('createBiller', biller, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the biller hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The biller is added successfully', 'success', 'fixed-top', 'fa-smile-o');
			FlowRouter.go('/billers')
		}
	})

};

export const editBiller = (Id, biller) => {

	return Meteor.call('editBiller', Id, biller, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the biller hasn\'t been edited', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The biller is edited successfully', 'success', 'fixed-top', 'fa-smile-o ');
			FlowRouter.go('/billers')
		}
	})

};

export const removeBiller = (id) => {

	return Meteor.call('removeBiller', id, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the biller hasn\'t been deleted', 'danger', 'fixed-top', 'fa-frown-o');
		}
	})

};