import React, { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";

import {
  FeaturedProjectCardContainer,
  FeaturedProjectContent,
  Overline,
  Title,
  Description,
  Tags,
  Tag,
  ProjectLinks,
  Link,
  Projectimage,
} from "./style";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FeaturedProjectCard = ({
  title,
  slug,
  description,
  tags,
  githubLink,
  image,
  playStore,
  appStore,
  externalLink,
  right,
}) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      });
    }
  }, [inView]);
  return (
    <motion.div ref={ref}>
      <motion.div initial={{ y: 300 }} animate={animation}>
        <FeaturedProjectCardContainer>
          <FeaturedProjectContent right={right}>
            <Overline>Featured Project</Overline>
            <Title>
              <a href={externalLink ? externalLink : `/#/case/${slug}`} rel="noreferrer">
                {title}
              </a>
            </Title>
            <Description right={right}>
              <p>{ReactHtmlParser(description)}</p>
            </Description>
            <Tags right={right}>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <ProjectLinks right={right}>
              {githubLink && (
                <Link href={githubLink} target="_blank" rel="noreferrer">
                  <FiGithub />
                </Link>
              )}

              <Link
                href={externalLink ? externalLink : `/#/case/${slug}`}
                rel="noreferrer"
                target={externalLink ? "_blank" : "_self"}>
                <FiExternalLink />
              </Link>

              {playStore && (
                <Link href={playStore} className="external" rel="noreferrer">
                  <FaGooglePlay />
                </Link>
              )}
              {appStore && (
                <Link href={appStore} className="external" rel="noreferrer">
                  <FaAppStoreIos />
                </Link>
              )}
            </ProjectLinks>
          </FeaturedProjectContent>
          <Projectimage right={right}>
            <img src={image} alt={title} />
          </Projectimage>
        </FeaturedProjectCardContainer>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
