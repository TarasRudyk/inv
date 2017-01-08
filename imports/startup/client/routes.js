import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/layouts/main';

import Invoices from '/imports/ui/containers/pages/invoices';
import Addinvoice from '/imports/ui/containers/pages/addinvoice';

import Billers from '/imports/ui/containers/pages/billers';
import Addbiller from '/imports/ui/containers/pages/addbiller';

import Products from '/imports/ui/containers/pages/products';
import Addproduct from '/imports/ui/containers/pages/addproduct';

import Customers from '/imports/ui/containers/pages/customers';
import Addcustomer from '/imports/ui/containers/pages/addcustomer';

FlowRouter.route('/', {
  action(params, queryParams) {
    mount(MainLayout, {
      content: <Invoices {...queryParams}/>
    });
  }
});

FlowRouter.route('/addinvoice', {
  action() {
    mount(MainLayout, {
      content: <Addinvoice />
    });
  }
});

FlowRouter.route('/addinvoice/:id', {
  action(params) {
    mount(MainLayout, {
      content: <Addinvoice {...params}/>
    });
  }
});

FlowRouter.route('/billers', {
  action() {
    mount(MainLayout, {
      content: <Billers />
    });
  }
});

FlowRouter.route('/billers/addbiller', {
  action() {
    mount(MainLayout, {
      content: <Addbiller />
    });
  }
});

FlowRouter.route('/billers/addbiller/:id', {
  action(params) {
    mount(MainLayout, {
      content: <Addbiller {...params}  />
    });
  }
});

FlowRouter.route('/products', {
  action() {
    mount(MainLayout, {
      content: <Products />
    });
  }
});

FlowRouter.route('/products/addproduct', {
  action() {
    mount(MainLayout, {
      content: <Addproduct />
    });
  }
});

FlowRouter.route('/products/addproduct/:id', {
  action(params) {
    mount(MainLayout, {
      content: <Addproduct {...params}/>
    });
  }
});

FlowRouter.route('/customers', {
  action() {
    mount(MainLayout, {
      content: <Customers />
    });
  }
});


FlowRouter.route('/customers/addcustomer', {
  action() {
    mount(MainLayout, {
      content: <Addcustomer />
    });
  }
});

FlowRouter.route('/customers/addcustomer/:id', {
  action(params) {
    mount(MainLayout, {
      content: <Addcustomer {...params}/>
    });
  }
});
