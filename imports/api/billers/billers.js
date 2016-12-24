
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Billers = new Mongo.Collection('billers');

Billers.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Billers.schema = new SimpleSchema({
  Id: {
    type: Number
  },
  billerName: {
    type: String
  },
  address: {
    type: Object
  },
  'address.street': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String
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
	invoiceFooter: {
    type: String,
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
  enabled: {
    type: Boolean,
  },	
});

Billers.attachSchema(Billers.schema);
