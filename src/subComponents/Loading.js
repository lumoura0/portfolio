import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default Loading;
