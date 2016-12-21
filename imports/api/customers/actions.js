import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './methods'


export const createCustomer=(
	name, 
	customerContact, 
	address, 
	state, 
	city, 
	zip, 
	country, 
	phone, 
	mob, 
	fax, 
	email, 
	notes,
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
    mob,
    fax,
    email,
  }
	return Meteor.call('customersCreate', name, customerContact, address, contacts, notes, (err) => {
		if(err) {
			Bert.alert('Fill up required fields', 'danger', 'fixed-top', 'fa-frown-o')
		}
	})

};
