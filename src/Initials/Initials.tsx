import styled, { css } from 'styled-components';
import { getColor } from '../utils';

const Initials = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    const color = getColor(props.children as string);
    return css`
      background: linear-gradient(
        135deg,
        hsl(${color}, 100%, 80%) 0%,
        hsl(${color}, 100%, 70%) 20%,
        hsl(${color}, 100%, 60%) 40%,
        hsl(${color}, 100%, 50%) 60%,
        hsl(${color}, 100%, 40%) 80%,
        hsl(${color}, 100%, 30%) 100%
      );
    `;
  }}
`;

export default Initials;
