import { useState } from 'react';

const useColors = () => {
  const [colors, setColors] = useState({
    primary: '#7F1D1D', 
    text: '#FFFFFF',
    third: '#D1D5DB',
    gradientYellow : 'linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(245,158,11,1) 100%)',
    yellow500 : '#F6E05E'
  });

  return colors;
};

export default useColors;
