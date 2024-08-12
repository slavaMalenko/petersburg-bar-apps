import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

export const WhitePlateStyles = css`
    font-size: 16px;
    max-width: 240px;
    margin: 40px auto 30px;
    font-weight: 900;
`;
export const Section = styled(motion.section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const borderBottomAnimation = (start: string, end: string) => keyframes`
  from {
    border-bottom: ${start} solid #fff;
  }
  to {
    border-bottom: ${end} solid #fff;
  }
`;

const marginBottomAnimation = (start: string, end: string) => keyframes`
  from {
    margin-bottom: ${start};
  }
  to {
    margin-bottom: ${end};
  }
`;

const heightAnimation = (start: string, end: string) => keyframes`
  from {
    height: ${start};
  }
  to {
    height: ${end};
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

export const Sale = styled(motion.div)<{ isShown: boolean }>`
    overflow: hidden;
    z-index: 100000;
    color: #fff;

    ${({ isShown }) =>
        isShown
            ? css`
                  animation:
                      ${heightAnimation('0px', '125px')} 0.3s linear forwards,
                      ${borderBottomAnimation('0px', '1px')} 0.3s linear forwards 0.8s,
                      ${marginBottomAnimation('0', '40px')} 0.2s linear forwards 0.8s,
                      ${pulseAnimation} 0.4s ease-in-out;
              `
            : css`
                  animation:
                      ${marginBottomAnimation('40px', '0px')} 0.2s linear forwards,
                      ${heightAnimation('125px', '0px')} 0.3s linear forwards 0.2s,
                      ${borderBottomAnimation('1px', '0px')} 0.5s linear forwards;
              `}
`;
