import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Invoices } from './invoice';
import { Customers } from '/imports/api/customers/customers' 

Meteor.methods({

createInvoice(items, totalPrice, notes, date, customer, biller) {

    const dates = date.toString()
    check(totalPrice, String);
    check(notes, String);
    check(customer, String);
    check(biller, String);

    const count = Invoices.find().count();

    const Id = count ? Invoices.findOne( {} , { sort: { Id: -1 } } ).Id + 1 : 1;

    Invoices.insert({ items, totalPrice, notes, date, customer, biller, Id });


    const money = Customers.findOne({ customerName: customer }).total || 0;
    const total = (Number(money) + Number(totalPrice)).toString()
    Customers.update({customerName: customer}, { $set: { total } });
  },

  removeInvoice(id) {
    check(id, String);
    
    Invoices.remove({_id: id})
 }

});

