import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <Path d="M15.853 16.56A9.458 9.458 0 019.5 19C4.257 19 0 14.743 0 9.5S4.257 0 9.5 0 19 4.257 19 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zM9.5 1C14.191 1 18 4.809 18 9.5S14.191 18 9.5 18 1 14.191 1 9.5 4.809 1 9.5 1z" />
    </Svg>
  );
}

export default SearchIcon;
