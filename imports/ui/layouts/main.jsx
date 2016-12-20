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
      <Tabs onSelect={this.handleSelect}>
        <TabList>
          <Tab>Money</Tab>
          <Tab>People</Tab>
          <Tab>Products</Tab>
        </TabList>
        <TabPanel>
          <span><a href="/">Invoice </a> \</span>
          <span>New invoice</span>
        </TabPanel>
        <TabPanel>
          <span><a href="/customers">Customer</a></span>
          <span><a href="/billers">Biller</a></span>
        </TabPanel>
        <TabPanel>
          <span><a href="/products">Add product</a></span>
        </TabPanel>
      </Tabs>
        {this.props.content}
      </div>
    );
  }
}

MainLayout.propTypes = {
  content: React.PropTypes.element
};
