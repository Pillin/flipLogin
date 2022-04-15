import React from "react";
import styled from "styled-components";
import FlipBox from "./components/containers/FlipBox";
import LoginForm from "./components/forms/LoginForm";
import { SecondaryButton } from "./components/core/Button";

// TODO: mui uses emotion. So, in the future need to migrate styled-components to emotion.

const StyledBody = styled.main`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
`;

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <StyledBody>
      <SecondaryButton
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Open Login
      </SecondaryButton>
      <FlipBox onClose={() => setOpen(false)} open={open}>
        <LoginForm onSuccess={() => setOpen(false)} />
      </FlipBox>
    </StyledBody>
  );
}

export default App;
