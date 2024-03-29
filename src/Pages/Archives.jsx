import {BiArrowBack} from "react-icons/bi"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

import COLORS from "../utils/Colors"
import projects from "../Projects"
import ArchiveTable from "../Components/project-archives/ArchiveTable"
import LeftSideBar from "../Components/Hero/LeftSideBar"
import {useEffect} from "react"

const tableHeading = [
  {
    label: "Project",
    key: "title",
  },
  {
    label: "Built with",
    key: "tags",
  },
  {
    label: "Made at",
    key: "madeAt",
  },
  {
    label: "Links",
    key: "links",
  },
]

function Archives() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = `Project Archives | Sujay Alaspure`
  }, [])
  return (
    <>
      <LeftSideBar isTop />
      <Container>
        <Back
          onClick={(e) => {
            e.stopPropagation()
            navigate(-1)
          }}
        >
          <BiArrowBack />
        </Back>
        <Heading>All Projects</Heading>
        <ArchiveTable tableHead={tableHeading} tableData={projects} />
      </Container>
    </>
  )
}

export default Archives

const Container = styled.div`
  margin: 180px auto;
  padding: 0 0 10%;
  max-width: 1200px;
`

const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1;
`

const Back = styled.div`
  color: ${COLORS.accent};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${COLORS.accent};
  }

  .react-icons {
    color: ${COLORS.accent};
    margin-right: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`
