import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Products = new Mongo.Collection('products');

Products.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Products.schema = new SimpleSchema({
  Id: {
    type: Number,
  },
  description: {
    type: String,
  },
  unitPrice: {
    type: String
  },
  cost: {
    type: String,
    optional: true
  },
  customField: {
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

Products.attachSchema(Products.schema);

