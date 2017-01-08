import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Invoices } from './invoice';
import { Customers } from '/imports/api/customers/customers';
import { Billers } from '/imports/api/billers/billers';
import { PdfInvoice } from '/imports/ui/components/pdfdocument';
import { generateComponentAsPDF } from './generate-pdf';


Meteor.methods({

createInvoice(items, totalPrice, notes, dates, customer, biller) {

    check(dates, Object)
    check(totalPrice, String);
    check(notes, String);
    check(customer, String);
    check(biller, String);

    const date = dates.date;
    const issueDate = dates.issueDate;
    const dueDate = dates.dueDate;

    const count = Invoices.find().count();

    const Id = count ? Invoices.findOne( {} , { sort: { Id: -1 } } ).Id + 1 : 1;
    const customerName = Customers.findOne({_id: customer}).customerName;
    const billerName = Billers.findOne({_id: biller}).billerName;

    Invoices.insert({ items, totalPrice, notes, date, issueDate, dueDate, customer, biller, customerName, billerName, Id });

    const money = Customers.findOne({ _id: customer }).total || 0;
    const total = (Number(money) + Number(totalPrice)).toFixed(2).toString();
    Customers.update({_id: customer}, { $set: { total } });
  },

  removeInvoice(id) {
    check(id, String);
    
    Invoices.remove({_id: id})
  },

  editInvoice(id, items, totalPrice, notes, dates, customer, biller) {

    check(id, String);
    check(dates, Object);
    check(totalPrice, String);
    check(notes, String);
    check(customer, String);
    check(biller, String);

    const date = dates.date;
    const issueDate = dates.issueDate;
    const dueDate = dates.dueDate;
    
    const customerName = Customers.findOne({_id: customer}).customerName;
    const billerName = Billers.findOne({_id: biller}).billerName;

    const query = { $set: { items, totalPrice, notes, date, issueDate, dueDate, customer, biller, customerName, billerName } };

    Invoices.update({_id: id}, query);

  }

});

export const downloadPdf = new ValidatedMethod({
  name: 'downloadPdf',
  validate: new SimpleSchema({
    id: { type: String },
  }).validator(),
  run({ id }) {
    const invoice = Invoices.findOne({ _id: id });
    const biller = Billers.findOne({ _id: invoice.biller });
    const customer = Customers.findOne({ _id: invoice.customer })
    const fileName = `invoice_${invoice.Id}.pdf`;
    return generateComponentAsPDF({ component: PdfInvoice, props: { invoice, biller, customer }, fileName })
    .then((result) => result)
    .catch((error) => { /*throw new Meteor.Error('500', error);*/ });
  },
});
