import styled from "styled-components";
import LogoComponent from "./LogoComponent";
import PowerButton from "./PowerButton";

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  z-index: 10;
  background: inherit;
`;
const TopBar = () => {
  return (
    <Box>
      <LogoComponent />
      <PowerButton />
    </Box>
  );
};

export default TopBar;
