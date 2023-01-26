import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getInitials, handleImageError } from './utils';
import AvatarWrapper from './AvatarWrapper/AvatarWrapper';
import Initials from './Initials/Initials';

interface Props {
  src?: string;
  fallback?: string;
  name?: string;
  alt?: string;
  charCount?: number;
  variant?: 'rounded' | 'squared';
}

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Avatar: React.FC<Props> = ({
  src,
  fallback,
  name,
  alt,
  charCount = 2,
  variant = 'rounded',
}) => {
  const [initials, setInitials] = useState(getInitials(name, alt, charCount));
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setInitials(getInitials(name, alt, charCount));
  }, [src, fallback, name, charCount]);

  return (
    <AvatarWrapper variant={variant}>
      {src && !imgError ? (
        <AvatarImg
          src={src}
          alt={name}
          onError={() => handleImageError(setImgError)}
        />
      ) : fallback && !imgError ? (
        <AvatarImg
          src={fallback}
          alt={name}
          onError={() => handleImageError(setImgError)}
        />
      ) : (
        <Initials>{initials}</Initials>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
