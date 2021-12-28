import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
          aria-label="scrollable auto tabs example"
        >
          {ExpData.map((exp, index) => (
            <TabItem label={exp.company} {...a11yProps(index)} />
          ))}
        </TabsRow>
      </AppBar>

      {ExpData.map((exp, index) => (
        <TabPanel value={value} index={index}>
          {exp.title}
        </TabPanel>
      ))}
    </div>
  );
};

export default Experience;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
