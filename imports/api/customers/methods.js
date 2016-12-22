import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Customers } from './customers';

Meteor.methods({

customersCreate(customerName, customerContact, address, contacts, notes, exist) {
    check(customerName, String);
    check(customerContact, String);
    check(address, Object);
    check(contacts, Object);
    check(notes, String);
    check(exist, String);

    const Id = Customers.find().count() + 1;

    Customers.insert({customerName, customerContact, address, contacts, notes, exist, Id});
  },

 editCreate(Id,customerName, customerContact, address, contacts, notes, exist) {
    check(customerName, String);
    check(customerContact, String);
    check(address, Object);
    check(contacts, Object);
    check(notes, String);
    check(exist, String);

    const query = { $set: { customerName, customerContact, address, contacts, notes, exist } }

    Customers.update({_id: Id}, query);
 }

});

