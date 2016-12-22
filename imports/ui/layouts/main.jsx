import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSelect = this.handleSelect.bind(this);         
  }

  handleSelect(index) {
    const tab = index;
    FlowRouter.setQueryParams({ tab });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <Tabs onSelect={this.handleSelect}>
              <TabList>
                <Tab>Money</Tab>
                <Tab>People</Tab>
                <Tab>Products</Tab>
              </TabList>
              <TabPanel>
                <span><a role="button" className="nav" href="/">Invoices </a></span>
                <span><a role="button" className="nav" href="/addinvoice">Add New Invoice</a></span>
              </TabPanel>
              <TabPanel>
                <span><a role="button" className="nav" href="/customers">Customer</a></span>
                <span><a role="button" className="nav" href="/billers">Biller</a></span>
                <span><a role="button" className="nav" href="/customers/addcustomer">Add New Customer</a></span>
                <span><a role="button" className="nav" href="/customers/addbiller">Add New Biller</a></span>
              </TabPanel>
              <TabPanel>
                <span><a className="nav" href="/products">Add product</a></span>
              </TabPanel>
            </Tabs>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  content: React.PropTypes.element
};
