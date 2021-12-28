
import { ReactNode, useEffect } from "react";
import { Close } from '@mui/icons-material';
import styled from "styled-components";
import { motion, useAnimation, AnimationControls } from "framer-motion";


const StyledFlipBox = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

`;

const CloseIcon = styled(Close)`
  && {
    position: absolute;
    fill: var(--secondary-color);
    top: 8px;
    right: 8px;
  }

`;



const openAnimation = async (controls: AnimationControls) => {
  await controls.start({
    translateY: "0px",
    rotateX: "-360deg",
    scale: 0,
    transition: { duration: 0.0 }
  });
  await controls.start({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 }
  });
}


const closeAnimation = async (controls: AnimationControls) => {
  await controls.start({
    rotateX: "360deg",
    scale: 0.5,
    transition: { duration: 0.3 }
  });
  await controls.start({
    translateY: "-100%",
    opacity: 0,
    transition: { duration: 0.25 }
  });

}


const FlipBox = (props: {
  children: ReactNode
  open: boolean;
  onClose: () => void
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.stop();
    props.open ? openAnimation(controls) : closeAnimation(controls);
  }, [props.open, controls])

  return <StyledFlipBox animate={controls}>
    <CloseIcon onClick={() => props.onClose()} />
    {props.children}
  </StyledFlipBox>
}

export default FlipBox;