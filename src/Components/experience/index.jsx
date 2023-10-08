import React from "react"
import AppBar from "@material-ui/core/AppBar"

import {TabsRow, TabItem} from "./style"
import ExpData from "data/experience"
import COLORS from "utils/Colors"
import TabPanel from "./TabPanel"
const Experience = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: COLORS.navy}}>
        <TabsRow
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable force tabs"
        >
          {ExpData.map((exp, index) => (
            <TabItem key={index} label={exp.company} {...a11yProps(index)} />
          ))}
        </TabsRow>
      </AppBar>

      {ExpData.map((exp, index) => (
        <TabPanel key={index} active={value === index} data={exp} />
      ))}
    </div>
  )
}

export default Experience

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}
