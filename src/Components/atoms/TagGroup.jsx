import React from "react"
import styled from "styled-components"

function TagGroup({ tags = [], right = false }) {
  return (
    <Tags right={right}>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  )
}

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  justify-content: ${(_) => (_.right ? "flex-end" : "flex-start")};
  font-style: italic;
  @media (max-width: 768px) {
    margin: 4vh 0;
    font-style: italic;
  }
`

export const Tag = styled.li`
  margin: 0px 10px 0px 0px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 10px;
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`

export default TagGroup
