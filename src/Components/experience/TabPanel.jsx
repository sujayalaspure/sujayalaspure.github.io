import React from "react"
import ReactHtmlParser from "react-html-parser"

import { Title, Content, Timeline, List, ListItem } from "./style"
import { Link } from "Components/atoms/Link"

const TabPanel = ({ data, active }) => {
  return (
    <Content show={active}>
      <Title>
        <span>{data.title}</span>{" "}
        <span className="company">
          &nbsp;@&nbsp;<Link href={data?.companyWebsite}>{data?.company}</Link>
        </span>
      </Title>
      <Timeline>
        {data?.start} - {data?.end}
      </Timeline>
      <List>
        {data?.details.map((item, index) => (
          <ListItem key={index}>{ReactHtmlParser(item.content)}</ListItem>
        ))}
      </List>
    </Content>
  )
}

export default TabPanel
