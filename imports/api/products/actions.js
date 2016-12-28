import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import './methods'


export const createProduct = (product) => {

	return Meteor.call('createProduct', product, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the product hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The product is added successfully', 'success', 'fixed-top', 'fa-smile-o');
			FlowRouter.go('/products')
		}
	})

};

export const editProduct = (Id, product) => {

	return Meteor.call('editProduct', Id, product, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the product hasn\'t been edited', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The product is edited successfully', 'success', 'fixed-top', 'fa-smile-o');
			FlowRouter.go('/products')
		}
	})

};

export const removeProduct = (id) => {

	return Meteor.call('removeProduct', id, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the product hasn\'t been deleted', 'danger', 'fixed-top', 'fa-frown-o');
		}
	})

};	