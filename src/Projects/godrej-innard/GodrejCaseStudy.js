import React from "react"
import { CaseFooter, CaseStudyContainer } from "../../Pages/CaseStudy/style"
import { Footer } from "../../Components/atoms"
import Banner from "../../Pages/CaseStudy/Banner"
import { GodrejInnardStructure } from "."
import Brief from "../../Pages/CaseStudy/Brief"
import TopHead from "../../Pages/CaseStudy/TopHead"
import SplitShow from "../../Pages/CaseStudy/SplitShow"
import Fullimage from "../../Pages/CaseStudy/Fullimage"
import "styles/pages/CaseStudy.css"
import UseCasesScenarios from "../../Pages/CaseStudy/UseCasesScenarios"

function GodrejCaseStudy() {
  const renderComponent = ({ type, value }, index) => {
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

      default:
        break
    }
  }
  return (
    <>
      <CaseStudyContainer>
        {GodrejInnardStructure.map((item, index) => renderComponent(item, index))}
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

export default GodrejCaseStudy
