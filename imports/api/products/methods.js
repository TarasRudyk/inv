import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Products } from './products';

Meteor.methods({

  createProduct(product) {
    const description = product.description;
    const unitPrice = Number(Number(product.unitPrice).toFixed(2));
    const cost = Number(Number(product.cost).toFixed(2));
    const customField = product.customField;
    const notes = product.notes;
    const enabled = Boolean(product.enabled === 'true' ? true : false);

    check(description, String);
    check(unitPrice, Number);
    check(cost, Number);
    check(customField, String);
    check(notes, String);
    check(enabled, Boolean);

    const count = Products.find().count();
    const Id = count ? Products.findOne( {} , { sort: { Id: -1 }} ).Id + 1 : 0;

    Products.insert({ description, unitPrice, cost, customField, notes, enabled, Id });
          
  },

  editProduct(product, Id) {
    const description = product.description;
    const unitPrice = Number(Number(product.unitPrice).toFixed(2));
    const cost = Number(Number(product.cost).toFixed(2));
    const customField = product.customField;
    const notes = product.notes;
    const enabled = Boolean(product.enabled === 'true' ? true : false);

    check(description, String);
    check(unitPrice, Number);
    check(cost, Number);
    check(customField, String);
    check(notes, String);
    check(enabled, Boolean);
    check(Id, String);

    const query = { $set: { description, unitPrice, cost, customField, notes, enabled } };

    Products.update({_id: Id}, query);
  },

  removeProduct(id) {
    check(id, String);

    Products.remove({_id: id})
 }


});