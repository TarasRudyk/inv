import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Invoices } from './invoice';
import { Customers } from '/imports/api/customers/customers';
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

    Invoices.insert({ items, totalPrice, notes, date, issueDate, dueDate, customer, biller, Id });

    const money = Customers.findOne({ customerName: customer }).total || 0;
    const total = (Number(money) + Number(totalPrice)).toFixed(2).toString()
    Customers.update({customerName: customer}, { $set: { total } });
  },

  removeInvoice(id) {
    check(id, String);
    
    Invoices.remove({_id: id})
  },

});

export const downloadPdf = new ValidatedMethod({
  name: 'downloadPdf',
  validate: new SimpleSchema({
    id: { type: String },
  }).validator(),
  run({ id }) {
    const invoice = Invoices.findOne({ _id: id });
    const fileName = `invoice_${invoice.Id}.pdf`;
    return generateComponentAsPDF({ component: PdfInvoice, props: { invoice }, fileName })
    .then((result) => result)
    .catch((error) => { /*throw new Meteor.Error('500', error); */});
  },
});
