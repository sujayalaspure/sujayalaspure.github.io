import styled from "styled-components";

export const CaseStudyContainer = styled.div`
  /* background-color: aliceblue; */
  flex: 1;
`;

export const CaseFooter = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  /* scroll-snap-align: start; */
  color: var(--lightest-slate);
  text-align: center;
  position: relative;
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  .nextcase {
    margin-top: 45vh;
    font-size: 5vw;
  }
`;

export const Title = styled.div`
  padding: 4rem 10%;
  padding-top: 0;
  font-size: ${(_) => _.fontSize || `clamp(1rem, 2vw, 1.7rem)`};
  /* letter-spacing: 0.05em; */
  /* word-break: normal; */
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
  h2 {
    /* line-height: 10px; */
    font-weight: 500;
  }
`;
