
import styled from "styled-components";
import { Button } from '@mui/material';


const StyledPrimaryButton = styled(Button)`
  && {
    background-color: var(--primary-color);
    color: white;
    border-radius: 0px;
    padding: 8px;
    font-size: 24px;
  }
`;


export const SecondaryButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const PrimaryButton = (props: {
  label: string,
  type?: "submit",
  disabled?: boolean
  onClick?: () => void
}) =>
  <StyledPrimaryButton
    type={props.type}
    variant="contained"
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.label}
  </StyledPrimaryButton>