import React, {useState} from "react"
import TagGroup from "../atoms/TagGroup"
import {FiExternalLink, FiGithub, FiYoutube} from "react-icons/fi"
import ReactHtmlParser from "react-html-parser"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

function TableRow({project}) {
  const [isOpen, setIsOpen] = useState(false)
  let linkValue = project?.externalLink
  if (linkValue?.includes("github.com")) {
    linkValue = "https://github.com"
  }
  const {title, tags} = project
  return (
    <>
      <Tr isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <td className="title">{title}</td>
        <td>
          <TagGroup tags={tags} />
        </td>
        <td className="link">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          )}
          {project.youtubeLink && (
            <a href={project.youtubeLink} target="_blank" rel="noreferrer">
              <FiYoutube />
            </a>
          )}
          {project.externalLink && (
            <a href={project.externalLink} className="external" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          )}
        </td>
      </Tr>
      <Description isOpen={isOpen}>
        <td colSpan={3}>
          <span>{ReactHtmlParser(project.description)}</span>
          {isOpen && <Arrow />}
        </td>
      </Description>
    </>
  )
}

export default TableRow

const Tr = styled.tr`
  border: 0px solid ${COLORS.slate}33;
  border-bottom-width: 1px;
  color: ${COLORS.slate};
  cursor: pointer;
  td {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.25rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .title {
    font-weight: 600;
    font-size: 1rem;
    color: ${COLORS.lightestSlate};
  }

  .link {
    a {
      cursor: pointer;
      color: ${COLORS.lightestSlate};
      transition: all 0.3s ease;
      margin: 0 0.5rem;
      &:hover {
        color: ${COLORS.accent};
        text-decoration: underline;
      }
    }
  }
`

const Arrow = styled.div`
  content: " ";
  /* background-color: red; */
  height: 10px;
  width: 10px;
  position: absolute;
  top: -10px;
  left: 20px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid ${COLORS.lightestnavy};
`

const Description = styled.tr`
  height: ${({isOpen}) => (isOpen ? "100px" : "0px")};
  width: 100%;
  transition: height 0.3s ease;
  overflow: hidden;
  td {
    position: relative;
    background-color: ${COLORS.lightnavy};
    padding: 0.3rem 2rem;
    ${({isOpen}) => !isOpen && `display: none; `}

    span {
      white-space: normal;
      overflow: hidden;
      max-height: 1.2em;
      min-width: 50px;
    }
  }
`
