import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './methods';

export const createInvoice = (items, totalPrice, notes, date, customer, biller) => {

	return Meteor.call('createInvoice', items, totalPrice, notes, date, customer, biller, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the invoice hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The invoice is added successfully', 'success', 'fixed-top', 'fa-smile-o ');
			FlowRouter.go('/')
		}
	})

};

export const removeInvoice = (id) => {

	return Meteor.call('removeInvoice', id, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the invoice hasn\'t been deleted', 'danger', 'fixed-top', 'fa-frown-o');
		}
	})

};	


