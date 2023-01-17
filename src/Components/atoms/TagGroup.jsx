import React from "react"
import styled from "styled-components"

function TagGroup({ tags = [], right = false }) {
  return (
    <Tags right={right}>
      {tags.map((tag, index) => (
        <>
          <Tag key={index}>{tag}</Tag>
          <span>&bull;</span>
        </>
      ))}
    </Tags>
  )
}

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 10px 0px 10px;
  padding: 0px;
  list-style: none;
  justify-content: ${(_) => (_.right ? "flex-end" : "flex-start")};
  font-style: italic;
  @media (max-width: 768px) {
    margin: 12px 0;
    font-style: italic;
  }
  span {
    color: var(--light-slate);
    // remove last dot
    &:last-of-type {
      display: none;
    }
  }
`

export const Tag = styled.li`
  margin: 0px 5px;
  /* background-color: yellow; */
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  white-space: nowrap;
  padding: 2px 2px;
  border-radius: 10px;
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
  // add dot between tags
  /* &:not(:last-of-type):after {
    content: "•";
    margin: 0 2px;
    color: var(--light-slate);
  } */
`

export default TagGroup
