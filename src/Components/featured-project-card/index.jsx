import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

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
  return (
    <FeaturedProjectCardContainer>
      <FeaturedProjectContent right={right}>
        <Overline>Featured Project</Overline>
        <Title>
          <a
            href={externalLink ? externalLink : `#/case/${slug}`}
            rel="noreferrer"
          >
            {title}
          </a>
        </Title>
        <Description>
          <p>{description}</p>
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
            href={externalLink ? externalLink : `#/case/${slug}`}
            rel="noreferrer"
            target={externalLink ? "_blank" : "_self"}
          >
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
  );
};

export default FeaturedProjectCard;
