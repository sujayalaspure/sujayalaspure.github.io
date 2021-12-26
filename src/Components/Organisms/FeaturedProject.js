import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import "styles/components/FeaturedProject.css";

/**
 *
 *
 * @export
 * @param {{title:string, slug:string, description:string, tags:Array, githubLink?:string, image:any, index, playStore?:string, appStore?:string}} props
 * @returns {import('react').ReactNode} - React Component
 */
export default function FeaturedProject(props) {
  const {
    title,
    slug,
    description,
    tags,
    githubLink,
    image,
    index,
    playStore,
    appStore,
    externalLink,
  } = props;
  return (
    <div className="featured-project">
      <div className="content">
        <div>
          <p className="overline">Featured Project</p>
          <h3 className="title">
            <a
              href={externalLink ? externalLink : `#/case/${slug}`}
              rel="noreferrer"
            >
              {title}
            </a>
          </h3>
          <div className="description">
            <p>{description}</p>
          </div>
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
            )}
            <a
              href={externalLink ? externalLink : `#/case/${slug}`}
              className="external"
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
            {playStore && (
              <a href={playStore} className="external" rel="noreferrer">
                <FaGooglePlay />
              </a>
            )}
            {appStore && (
              <a href={appStore} className="external" rel="noreferrer">
                <FaAppStoreIos />
              </a>
            )}
            {/* <a href={project.ExternalLink} target='_blank' className='demo' rel='noreferrer'>
						<FiMonitor />
					</a> */}
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <a href={`#/case/${slug}`} rel="noopener noreferrer">
          <img src={image} alt={`${title}_${index}`} />
        </a>
      </div>
    </div>
  );
}
