
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { logCreate, logEdit, logRemove } from '/imports/api/history/methods';

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
