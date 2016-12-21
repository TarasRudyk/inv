import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Customers = new Mongo.Collection('customers');

Customers.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Customers.schema = new SimpleSchema({
  name: {
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
    optional: true
  },
  'address.zip': {
    type: Number,
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
    type: String
  },
  'contacts.mob': {
    type: String,
    optional: true
  },
  'contacts.fax': {
    type: String,
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

});

Customers.attachSchema(Customers.schema);

