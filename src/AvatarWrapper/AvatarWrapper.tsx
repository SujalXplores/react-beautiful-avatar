import styled from 'styled-components';

interface WrapperProps {
  variant?: 'rounded' | 'squared';
  name?: string;
  alt?: string;
}

const AvatarWrapper = styled.div<WrapperProps>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;

export default AvatarWrapper;
