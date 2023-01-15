import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { stringToHsl } from './utils';

interface WrapperProps {
  variant?: 'rounded' | 'squared';
  name?: string;
  alt?: string;
}

const getColor = (name?: string, alt?: string) => {
  if (name) {
    return stringToHsl(name);
  } else if (alt) {
    return stringToHsl(alt);
  } else {
    return '0,0,0';
  }
};

const AvatarWrapper = styled.div<WrapperProps>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Initials = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ children }) => {
    const color = getColor(children as string);
    return css`
      background: linear-gradient(
        135deg,
        hsl(${color}, 100%, 70%),
        hsl(${color}, 100%, 40%),
        hsl(${color}, 100%, 70%)
      );
    `;
  }}
`;

interface Props {
  src?: string;
  fallback?: string;
  name?: string;
  alt?: string;
  charCount?: number;
  variant?: 'rounded' | 'squared';
}

const Avatar: React.FC<Props> = ({
  src,
  fallback,
  name,
  alt,
  charCount = 2,
  variant = 'rounded',
}) => {
  const [initials, setInitials] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let nameString = '';
    const nameSplit = name?.split(' ');
    nameSplit?.forEach((n) => (nameString += n[0]));
    const initials = nameString.substring(0, charCount);
    setInitials(initials);
  }, [src, fallback, name, charCount]);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <AvatarWrapper variant={variant}>
      {src && !imgError ? (
        <AvatarImg src={src} alt={name} onError={handleImageError} />
      ) : fallback && !imgError ? (
        <AvatarImg src={fallback} alt={name} onError={handleImageError} />
      ) : (
        <Initials>
          {initials ||
            alt?.substring(0, charCount) ||
            name?.substring(0, charCount)}
        </Initials>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
