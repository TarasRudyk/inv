import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Billers } from './billers';

Meteor.methods({

createBiller(biller) {
	const billerName = biller.billerName;
	const address = biller.address;
	const contacts = biller.contacts;
	const invoiceFooter = biller.invoiceFooter;
	const notes = biller.notes;
	const enabled = Boolean(biller.enabled === 'true' ? true : false);

	check(billerName, String);
	check(address, Object);
	check(contacts, Object);
	check(invoiceFooter, String);
	check(notes, String);
	check(enabled, Boolean);

	const count = Billers.find().count()

	const Id = count ? Billers.findOne( {} , { sort: { Id: -1 }} ).Id + 1 : 1;

	Billers.insert({billerName, address, contacts, invoiceFooter, notes, enabled, Id});
  },

 editBiller(Id, biller) {
	const billerName = biller.billerName;
	const address = biller.address;
	const contacts = biller.contacts;
	const invoiceFooter = biller.invoiceFooter;
	const notes = biller.notes;
	const enabled = Boolean(biller.enabled === 'true' ? true : false);

	check(Id, String);
	check(billerName, String);
	check(address, Object);
	check(contacts, Object);
	check(invoiceFooter, String);
	check(notes, String);
	check(enabled, Boolean);


	const query = { $set: { billerName, address, contacts, invoiceFooter, notes, enabled } };

	Billers.update({_id: Id}, query);
 },

 removeBiller(id) {
 	check(id, String);

 	Billers.remove({_id: id})
 }

});
