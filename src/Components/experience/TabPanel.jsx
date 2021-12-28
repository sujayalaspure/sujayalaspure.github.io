import React from "react";
import { Title, Content, Timeline, List, ListItem } from "./style";
import { Link } from "Components/atoms/Link";

const TabPanel = ({ data, value, ...other }) => {
  console.log("LOG> [experience/TabPanel.jsx:4] data --->", data);
  return (
    <Content
      role="tabpanel"
      id={`scrollable-auto-tabpanel-${value}`}
      aria-labelledby={`scrollable-auto-tab-${value}`}
      {...other}
    >
      <Title>
        <span>{data.title}</span>{" "}
        <span className="company">
          &nbsp;@&nbsp;<Link>{data.company}</Link>
        </span>
      </Title>
      <Timeline>
        {data.start} - {data.end}
      </Timeline>
      <List>
        {data.details.map((item) => (
          <ListItem>{item.content}</ListItem>
        ))}
      </List>
    </Content>
  );
};

export default TabPanel;
