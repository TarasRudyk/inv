import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { base64ToBlob } from './base64-to-blob.js';
import fileSaver from 'file-saver';
import './methods';

export const createInvoice = (items, notes, dates, customer, biller) => {

	return Meteor.call('createInvoice', items, notes, dates, customer, biller, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the invoice hasn\'t been added', 'danger', 'fixed-top', 'fa-frown-o');
		}else{
			Bert.alert('The invoice is added successfully', 'success', 'fixed-top', 'fa-smile-o ');
			FlowRouter.go('/')
		}
	})

};

export const removeInvoice = (id) => {

	return Meteor.call('removeInvoice', id, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the invoice hasn\'t been deleted', 'danger', 'fixed-top', 'fa-frown-o');
		}
	})

};	

export const editInvoice = (id, items, notes, dates, customer, biller) => {

	return Meteor.call('editInvoice', id, items, notes, dates, customer, biller, (err) => {
		if(err) {
			Bert.alert(err.reason + ' the invoice hasn\'t been edited', 'danger', 'fixed-top', 'fa-frown-o');
		} else {
			Bert.alert('The invoice has been edited successfully', 'success', 'fixed-top', 'fa-smile-o ');
			FlowRouter.go('/')
		}
	})

};	

export const downloadPdf = (id) => {

	return Meteor.call('downloadPdf', { id }, (err, response) => {
		if(err) {
			Bert.alert(err.reason + ' the pdf hasn\'t been dowloaded', 'danger', 'fixed-top', 'fa-frown-o');
		} else {
      const blob = base64ToBlob(response.base64);
      fileSaver.saveAs(blob, response.fileName);
    }
	})

};	
