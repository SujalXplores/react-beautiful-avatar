export function stringToHsl(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >> 6;
  }
  hash += hash << 3;
  hash ^= hash >> 11;
  hash += hash << 15;
  let h = hash % 360;
  return h;
}

export const getInitials = (name: string | undefined, alt: string | undefined, charCount: number) => {
  if (name) {
    const nameSplit = name.split(' ');
    let nameString = '';
    nameSplit.forEach((n) => (nameString += n[0]));
    return nameString.substring(0, charCount);
  } else if (alt) {
    return alt.substring(0, charCount);
  }
  return "";
}

export const getColor = (name?: string, alt?: string) => {
  if (name) {
    return stringToHsl(name);
  } else if (alt) {
    return stringToHsl(alt);
  } else {
    return '0,0,0';
  }
};

export const handleImageError = (setImgError: React.Dispatch<React.SetStateAction<boolean>>) => {
  setImgError(true);
};
