import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoreIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="M1.5 10L12 15l10.5-5"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default MoreIcon;
