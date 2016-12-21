
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Billers = new Mongo.Collection('billers');

Billers.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Billers.schema = new SimpleSchema({
  //add schema
});

Billers.attachSchema(Billers.schema);
