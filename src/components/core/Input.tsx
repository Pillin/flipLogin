import styled from "styled-components";
import { TextField } from '@mui/material';

const StyledInput = styled(TextField)`
 && {

 }
`


const Input = (props: {
  type: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: any;
  touch: boolean;
  error: string;
}) => {

  return <StyledInput
    type={props.type}
    helperText={props.touch && props.error ? props.error : ''}
    error={Boolean(props.touch && props.error ? props.error : '')}
    focused={Boolean(props.touch && !props.error)}
    color={Boolean(props.touch && !props.error) ? "success" : "error"}
    variant="standard"
    label={props.label}
    id={props.name}
    name={props.name}
    onChange={props.onChange}
    value={props.value}

  />
}


export default Input;