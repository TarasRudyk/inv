import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './methods'


export const createCustomer=(
	customerName, 
	customerContact, 
	address, 
	state, 
	city, 
	zip, 
	country, 
	phone, 
	mobile, 
	fax, 
	email, 
	notes,
	exist
	) => {
	address = {
    address,
    state, 	
    city, 
    zip,
    country,  
	};
	contacts = {
    phone,
    mobile,
    fax,
    email,
  };
	return Meteor.call('customersCreate', customerName, customerContact, address, contacts, notes, exist, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the customer hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The customer is added successfully', 'success', 'fixed-top', 'fa-frown-o');
			FlowRouter.go('/')
		}
	})

};

export const editCustomer = (
	Id,
	customerName, 
	customerContact, 
	address, 
	state, 
	city, 
	zip, 
	country, 
	phone, 
	mobile, 
	fax, 
	email, 
	notes,
	exist
	) => {
	address = {
    address,
    state, 	
    city, 
    zip,
    country,  
	};
	contacts = {
    phone,
    mobile,
    fax,
    email,
  };
	return Meteor.call('editCreate', Id, customerName, customerContact, address, contacts, notes, exist, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the customer hasn\'t been edited', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The customer is edited successfully', 'success', 'fixed-top', 'fa-frown-o');
			FlowRouter.go('/')
		}
	})

};