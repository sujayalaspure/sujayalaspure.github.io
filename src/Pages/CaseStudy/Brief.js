import React from "react";
import styled from "styled-components";

export default function Brief({ briefTitle, content, links }) {
  return (
    <BriefContainer>
      <BriefTitleWrapper>
        <h2>{briefTitle}</h2>
      </BriefTitleWrapper>
      <BriefContentWrapper>
        <p>{content}</p>
        {links && (
          <BriefLinks>
            {links.map(({ linkName, src }) => (
              <a key={src} className="underline--magical" href={src} target="_blank" rel="noopener noreferrer">
                {linkName}
              </a>
            ))}
          </BriefLinks>
        )}
      </BriefContentWrapper>
    </BriefContainer>
  );
}

export const BriefContainer = styled.div`
  color: var(--slate);
  width: 100%;
  padding: 10% 10%;

  @media (min-width: 768px) {
    display: flex;
    padding: 10%;
  }
`;

export const BriefTitleWrapper = styled.div`
  padding: 0 7% 30px 0;
  h2 {
    color: var(--light-slate);
    font-size: clamp(22px, 1.6vw, 3rem);
    font-weight: 500;
  }
`;

export const BriefContentWrapper = styled.div`
  max-width: 92%;

  p {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    line-height: 150%;
    font-weight: 300;
    color: var(--slate);
  }
`;

export const BriefLinks = styled.div`
  position: relative;
  display: inline-block;
  padding: 3vw 0 0 0;
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: capitalize;
`;
