import React from "react";
import styled from "styled-components";

export default function SectionHeading({ number, title }) {
  return (
    <StyledSectionHeading>
      {/* <StyledNumber>{number}.</StyledNumber> */}
      <StyledTitle>{title}</StyledTitle>
    </StyledSectionHeading>
  );
}

const StyledSectionHeading = styled.div`
  color: var(--slate);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  /* background-color: red; */
`;

const StyledTitle = styled.h4`
  display: flex;
  /* align-items: center; */
  /* position: relative; */
  /* width: 100%; */
  font-size: clamp(12px, 2vw, 18px);
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  /* background-color: yellow; */

  &:before {
    content: "/";
    /* display: block; */
    /* position: relative; */
    /* font-size: clamp(12px, 2vw, 18px); */
    color: var(--accent);
    /* font-size: 14px; */
    font-weight: 600;
  }

  /* &:after {
    content: "";
    display: block;
    position: relative;
    width: 30%;
    height: 3px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  } */
`;
