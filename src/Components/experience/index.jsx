import React from "react";
import AppBar from "@material-ui/core/AppBar";

import {
  ExperienceContainer,
  Title,
  Timeline,
  List,
  ListItem,
  TabsRow,
  TabItem,
} from "./style";
import ExpData from "../../data/experience";
import COLORS from "../../utils/Colors";
import TabPanel from "./TabPanel";
const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: COLORS.navy }}>
        <TabsRow
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs"
        >
          {ExpData.map((exp, index) => (
            <TabItem label={exp.company} {...a11yProps(index)} />
          ))}
        </TabsRow>
      </AppBar>

      <TabPanel value={value} data={ExpData[value]} />
      {/* 
      {ExpData.map((exp, index) => (
        <TabPanel value={value} index={index}>
          {exp.title}
        </TabPanel>
      ))} */}
    </div>
  );
};

export default Experience;

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
