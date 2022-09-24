import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CustomTabs = ({ tabs }) => (
  <Tabs>
    <TabList>
      {tabs.map((tabObj) => {
        return (
          <Tab key={tabObj.title}>
            <div className="text-xs">{tabObj.title}</div>
          </Tab>
        );
      })}
    </TabList>

    {tabs.map((tabObj) => {
      return <TabPanel key={tabObj.title}>{tabObj.content}</TabPanel>;
    })}
  </Tabs>
);

export default CustomTabs;
