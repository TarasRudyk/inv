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
  },
  customerContact: {
    type: String,
    optional: true
  },
  address: {
    type: Object,
    optional: true
  },
  'address.street': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
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
    type: Object,
    optional: true
  },
  'contacts.phone': {
    type: Number,
    optional: true
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
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  vat: {
    type: String,
    regEx: /^[0-9]{11}$/,
    optional: true
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
  total: {
    type: String,
    optional: true
  },
  enabled: {
    type: Boolean,
  },

});

Customers.attachSchema(Customers.schema);

