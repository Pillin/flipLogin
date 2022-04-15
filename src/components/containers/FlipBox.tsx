import { ReactNode, useEffect } from "react";
import { Close } from "@mui/icons-material";
import styled from "styled-components";
import { motion, useAnimation, AnimationControls } from "framer-motion";

const StyledFlipBox = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: white;
  @media (min-width: 768px) {
    max-width: fit-content;
  }
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
  await controls.stop();
  await controls.start({
    translateY: "0px",
    rotateX: "0deg",
    scale: 0,
    transition: { duration: 0.2 }
  });
  await controls.start({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 }
  });
};

const closeAnimation = async (controls: AnimationControls) => {
  await controls.stop();

  await controls.start({
    scale: 0.75,
    rotateX: "180deg",
    transition: { duration: 0.2 }
  });
  await controls.start({
    scale: 0.5,
    rotateX: "360deg",
    transition: { duration: 0.2 }
  });
  await controls.start({
    translateY: "-100%",
    opacity: 0,
    transition: { duration: 0.25 }
  });
};

const FlipBox = (props: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.stop();
    props.open ? openAnimation(controls) : closeAnimation(controls);
  }, [props.open, controls]);

  return (
    <StyledFlipBox animate={controls} initial={false}>
      <CloseIcon onClick={() => props.onClose()} />
      {props.children}
    </StyledFlipBox>
  );
};

export default FlipBox;
