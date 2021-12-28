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

export const TabItem = styled(Tab)``;

export const Title = styled.div``;

export const timeline = styled.div``;

export const TabPanel = styled.div``;
export const List = styled.ul``;

export const ListItem = styled.li``;
