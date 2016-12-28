import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './methods'


export const createCustomer = (customer) => {

	return Meteor.call('createCustomer', customer, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the customer hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The customer is added successfully', 'success', 'fixed-top', 'fa-smile-o ');
			FlowRouter.go('/customers')
		}
	})

};

export const editCustomer = (Id, customer) => {

	return Meteor.call('editCustomer', Id, customer, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the customer hasn\'t been edited', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The customer is edited successfully', 'success', 'fixed-top', 'fa-smile-o');
			FlowRouter.go('/customers')
		}
	})

};

export const removeCustomer = (id) => {

	return Meteor.call('removeCustomer', id, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the customer hasn\'t been deleted', 'danger', 'fixed-top', 'fa-frown-o');
		}
	})

};	