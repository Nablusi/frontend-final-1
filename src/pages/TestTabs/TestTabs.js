import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default stylesheet

const TestTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // For controlled mode

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
    // Any other logic you want to execute when a tab is selected
  };

  return (
    <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 3</Tab>
      </TabList>

      <TabPanel>
        <h2>A 1</h2>
      </TabPanel>
      <TabPanel>
        <h2> content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any  3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TestTabs;
