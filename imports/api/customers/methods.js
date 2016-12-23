import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Customers } from './customers';

Meteor.methods({

customersCreate(customer) {
    const customerName = customer.customerName;
    const customerContact = customer.customerContact;
    const address = customer.address;
    const contacts = customer.contacts;
    const notes = customer.notes;
    const enabled = Boolean(customer.enabled === 'true' ? true : false);

    check(customerName, String);
    check(customerContact, String);
    check(address, Object);
    check(contacts, Object);
    check(notes, String);
    check(enabled, Boolean);

    const Id = Customers.find().count() + 1;

    Customers.insert({customerName, customerContact, address, contacts, notes, enabled, Id});
  },

 editCustomer(Id,customer) {
    const customerName = customer.customerName;
    const customerContact = customer.customerContact;
    const address = customer.address;
    const contacts = customer.contacts;
    const notes = customer.notes;enabled
    const enabled = Boolean(customer.enabled==='true' ? true : false);

    check(Id, String);
    check(customerName, String);
    check(customerContact, String);
    check(address, Object);
    check(contacts, Object);
    check(notes, String);
    check(enabled, Boolean);

    const query = { $set: { customerName, customerContact, address, contacts, notes, enabled } };

    Customers.update({_id: Id}, query);
 }

});

