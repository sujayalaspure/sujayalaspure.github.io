import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "styles/pages/CaseStudy.css";
import Banner from "./Banner";
import TopHead from "./TopHead";
import Brief from "./Brief";
import SplitShow from "./SplitShow";
import { useProject } from "Context/ProjectContext";
import Footer from "Components/atoms/Footer";
import { CaseFooter, CaseStudyContainer } from "./style";

export default function CaseStudy() {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  const { getProjectsFromJson } = useProject();
  let navigate = useNavigate();

  useEffect(() => {
    console.log("case");

    (async () => {
      const pp = await getProjectsFromJson(slug);
      // console.log(pp);
      setProject({ data: pp });
    })();
  }, []);

  const renderComponent = useCallback(({ type, value }, index, slug) => {
    switch (type) {
      case "bannerImage":
        return <Banner key={index} {...value} slug={slug} index={index} />;
      case "tophead":
        return <TopHead key={index} {...value} />;
      case "splitshow":
        return <SplitShow key={index} slug={slug} {...value} />;
      case "brief":
        return <Brief key={index} {...value} />;

      default:
        break;
    }
  }, []);

  const routeTo404Page = () => navigate("/error");

  return (
    <>
      <CaseStudyContainer>
        {project ? project?.data?.map((item, index) => renderComponent(item, index, slug)) : routeTo404Page()}
      </CaseStudyContainer>
      <CaseFooter>
        <a href="/" className="link-item nextcase">
          Next Case...
        </a>
        <Footer showSocial />
      </CaseFooter>
    </>
  );
}
