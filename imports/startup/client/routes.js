import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/layouts/main';
import Invoice from '/imports/ui/containers/pages/invoice';
import Billers from '/imports/ui/containers/pages/billers';
import Customers from '/imports/ui/containers/pages/customers';
import Products from '/imports/ui/containers/pages/products';
import Addcustomer from '/imports/ui/containers/pages/addcustomer';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <Invoice />
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

FlowRouter.route('/customers', {
  action() {
    mount(MainLayout, {
      content: <Customers />
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