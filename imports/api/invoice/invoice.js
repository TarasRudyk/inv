import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Invoices = new Mongo.Collection('invoices');

Invoices.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Invoices.schema = new SimpleSchema({
  Id: {
    type: Number
  },
  items: {
    type: Array,
  },
  'items.$': {
    type: Object,
  },
  'items.$.price': {
    type: String,
  },
  'items.$.product': {
    type: String,
  },
  'items.$.quantity': {
    type: String,
  },
  totalPrice: {
    type: String, 
  },
  date: {
    type: String,
  },
  customer: {
    type: String,
  },
  biller: {
    type: String,
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
  }

});

Invoices.attachSchema(Invoices.schema);

