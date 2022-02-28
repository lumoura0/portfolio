import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";

// import Particles from "react-particles-js"
import Particles from "react-particles-js";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? ConfigLight : ConfigDark}
      />
    </Box>
  );
};

export default ParticlesComponent;
