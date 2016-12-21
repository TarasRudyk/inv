import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Customers } from './customers';

Meteor.methods({
customersCreate(name, customerContact, address, contacts, notes) {
    check(name, String);
    check(customerContact, String);
    check(address, Object);
    check(contacts, Object);
    check(notes, String);

    Customers.insert({name, customerContact, address, contacts, notes});
  }
})

