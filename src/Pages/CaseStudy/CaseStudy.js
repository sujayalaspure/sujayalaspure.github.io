import React, {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import "styles/pages/CaseStudy.css"
import Banner from "./Banner"
import TopHead from "./TopHead"
import Brief from "./Brief"
import SplitShow from "./SplitShow"
import {useProject} from "Context/ProjectContext"
import Footer from "Components/atoms/Footer"
import {CaseFooter, CaseStudyContainer} from "./style"
import Fullimage from "./Fullimage"
import UseCasesScenarios from "./UseCasesScenarios"
import Screenshots from "./Screenshots"
import FeatureFlow from "./FeatureFlow"
import DesktopGallery from "./DesktopGallery"

export default function CaseStudy() {
  const [project, setProject] = useState(null)
  const {slug} = useParams()
  const {getProject} = useProject()
  let navigate = useNavigate()

  useEffect(() => {
    const pro = getProject(slug)
    if (pro) {
      setProject(pro)
      document.title = `${pro.title} | Sujay Alaspure`
    } else {
      navigate("/error")
    }
  }, [slug])

  const renderComponent = ({type, value}, index) => {
    switch (type) {
      case "bannerImage":
        return <Banner key={index} {...value} index={index} />
      case "tophead":
        return <TopHead key={index} {...value} />
      case "splitshow":
        return <SplitShow key={index} {...value} />
      case "brief":
        return <Brief key={index} {...value} />
      case "fullImage":
        return <Fullimage key={index} {...value} index={index} />
      case "usecaseScenarios":
        return <UseCasesScenarios key={index} {...value} />
      case "screenshots":
        return <Screenshots key={index} {...value} />
      case "featureFlow":
        return <FeatureFlow key={index} {...value} />
      case "desktopGallery":
        return <DesktopGallery key={index} {...value} />
      case "custom":
        return <React.Fragment key={index}>{value?.component}</React.Fragment>

      default:
        break
    }
  }

  const routeTo404Page = () => navigate("/error")

  return (
    <>
      <CaseStudyContainer id="fixed">
        {project?.data?.map((item, index) => renderComponent(item, index))}
      </CaseStudyContainer>
      <CaseFooter>
        <a href="/" className="link-item nextcase">
          Next Case...
        </a>
        <Footer showSocial />
      </CaseFooter>
    </>
  )
}
