import React, {useState} from "react"
import ExpData from "data/experience"
import styled from "styled-components"
import COLORS from "../../utils/Colors"
import TabPanel from "./TabPanel"

const editorBGColor = "#121D30"

function ExperienceSectionV2() {
  console.log(ExpData)
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const setActiveTab = (e, index) => {
    e.stopPropagation()
    setActiveTabIndex(index)
  }
  return (
    <Container>
      <TabsContainer>
        <TabsRow>
          {ExpData.map((exp, index) => (
            <TabItem onClick={(e) => setActiveTab(e, index)} isActive={activeTabIndex === index} key={index}>
              {exp?.favicon && <img src={exp?.favicon} alt={exp.company} width="20" height="20" />}
              <span>{exp.company}</span>
            </TabItem>
          ))}
        </TabsRow>
      </TabsContainer>
      <EditorWindow>
        {ExpData.map((exp, index) => (
          <TabPanel key={index} active={activeTabIndex === index} data={exp} />
        ))}
      </EditorWindow>
    </Container>
  )
}

export default ExperienceSectionV2

const Container = styled.div`
  box-shadow: 0 2.74416px 2.74416px rgba(0, 0, 0, 0.0274351), 0 5.48831px 5.48831px rgba(0, 0, 0, 0.0400741),
    0 13.7208px 10.9766px rgba(0, 0, 0, 0.0499982), 0 20.5812px 20.5812px rgba(0, 0, 0, 0.0596004),
    0 41.1623px 41.1623px rgba(0, 0, 0, 0.0709366), 0 96.0454px 89.1851px rgba(0, 0, 0, 0.09);
  border: 1px solid ${COLORS.darkslate};
  border-radius: 4px;
  text-align: left;
  overflow: hidden;
`

const TabsContainer = styled.div`
  border-bottom: 1px solid #30363c;
  background-color: ${COLORS.navyshadow};
`

const TabsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding: 0.5rem 0.5rem 0;
  margin-bottom: -1px;
  /* gap: 20px; */

  &::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }
`

const TabItem = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(_) => (_.isActive ? editorBGColor : COLORS.transparent)};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #30363c;
  border-bottom: 0;
  ${(_) => !_.isActive && "border: 0;"}
  color: ${(_) => (_.isActive ? COLORS.lightestSlate : COLORS.slate)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  font-size: 0.9rem;
  line-height: 23px;
  cursor: pointer;
  transition: color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  min-width: 150px;

  &:hover {
    /* background-color: ${editorBGColor}; */
    color: ${COLORS.lightestSlate};
  }
`

const EditorWindow = styled.div`
  background-color: ${editorBGColor};
  padding: 0 1rem;
  transition: all 0.2s cubic-bezier(0.3, 0, 0.5, 1);
`
