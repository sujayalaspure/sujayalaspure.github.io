import styled from "styled-components";

export const FeaturedProjectCardContainer = styled.div`
  /* border: 1px solid #eaeaea; */
  height: 500px;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--slate);

  @media (max-width: 768px) {
    margin-bottom: 70px;
    justify-content: center;
  }
`;

export const FeaturedProjectContent = styled.div`
  position: absolute;
  width: 60%;
  ${(_) => (_.right ? "right : 0" : "left:0")};
  text-align: ${(_) => (_.right ? "right" : "left")};
  @media (max-width: 768px) {
    width: 100%;
    padding: 4vh;
    z-index: 10;
    text-align: left;
  }
`;

export const Overline = styled.div`
  margin: 10px 0px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;

export const Title = styled.h3`
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);
  transition: var(--transition);
  cursor: pointer;
`;

export const Description = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  font-size: var(--fz-md);
  line-height: 25px;
  text-align: left;
  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: none;
    margin-top: 2rem;
    padding: 0px 0px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  justify-content: ${(_) => (_.right ? "flex-end" : "flex-start")};
  @media (max-width: 768px) {
    margin: 4vh 0;
  }
`;

export const Tag = styled.li`
  margin: 0px 10px 0px 0px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 10px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  justify-content: ${(_) => (_.right ? "flex-end" : "flex-start")};
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  .react-icons {
    width: 22px;
    height: 22px;
    margin-top: -4px;
  }
`;

export const Projectimage = styled.div`
  width: 60%;
  max-height: 340px;
  position: absolute;

  ${(_) => (_.right ? "left : 0" : "right:0")};
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  z-index: 1;
  overflow: hidden;
  border-radius: 0.5rem;
  /* border: 1px solid var(--slate); */
  cursor: pointer;
  img {
    width: 100%;
    /* height: auto; */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: var(--transition);
    border-radius: var(--border-radius);
    &:hover {
      -webkit-filter: none; /* Safari 6.0 - 9.0 */
      filter: none;
    }
    @media (max-width: 768px) {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(20%);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
    top: 0;
    bottom: 0;
    background-color: var(--navy);
    height: 100%;
    &::before {
      content: " ";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0px;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    /* img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(20%);
    } */
  }
`;
