import styled from "styled-components";
import COLORS from "../../utils/Colors";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export const ExperienceContainer = styled.div`
  color: ${COLORS.slate};
  display: flex;
  flex-direction: column;
`;

export const AppBar = styled.div`
  min-height: 50px;
  background-color: aliceblue;
  box-shadow: 0px 2px 5px 0px ${COLORS.navyshadow};
`;
export const TabsRow = styled(Tabs)`
  .MuiTabs-root {
    color: ${COLORS.slate};
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: ${COLORS.accent};
  }
  .MuiTab-textColorPrimary {
    color: ${COLORS.slate};
  }
  .MuiTabs-indicator {
    background-color: ${COLORS.accent};
  }
  .MuiTabs-scrollButtons {
    color: ${COLORS.slate};
  }
`;

export const TabItem = styled(Tab)`
  padding: 0 20px;
`;

export const Content = styled.div`
  padding: 20px 4px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.lightestSlate};
  font-size: 1.2rem;
  .company {
    color: ${COLORS.accent};
  }
`;

export const Timeline = styled.div`
  color: ${COLORS.slate};
  font-size: 13px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding-right: 2rem;
`;

export const ListItem = styled.li`
  color: ${COLORS.slate};
  /* display: list-item; */
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  text-align: -webkit-match-parent;
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${COLORS.accent};
  }
`;