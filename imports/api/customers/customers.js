import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Customers = new Mongo.Collection('customers');

Customers.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Customers.schema = new SimpleSchema({
  Id: {
    type: Number
  },
  customerName: {
    type: String,
    regEx: /^[a-zA-Z_]{2,25}$/
  },
  customerContact: {
    type: String,
  },
  address: {
    type: Object
  },
  'address.address': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String
  },
  'address.state': {
    type: String,
    optional: true,
  },
  'address.zip': {
    type: Number,
    regEx: SimpleSchema.RegEx.ZipCode,
    optional: true
  },
  'address.country': {
    type: String,
    optional: true
  },
  contacts: {
    type: Object
  },
  'contacts.phone': {
    type: Number
  },
  'contacts.mobile': {
    type: Number,
    optional: true
  },
  'contacts.fax': {
    type: Number,
    optional: true
  },
  'contacts.email': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  notes: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      return new Date();
    }
  },
  exist: {
    type: String,
  },

});

Customers.attachSchema(Customers.schema);

