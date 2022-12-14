import React from "react";

import Svg, { Path } from "react-native-svg";

interface Props {
  height?: string | number;
  width?: string | number;
  fill?: string;
}

const ExpenseSvg = ({ height, width, fill }: Props): JSX.Element => {
  return (
    <Svg
      height={height || 36}
      viewBox="0 0 24 24"
      width={width || 36}
      fill={fill || "#ff0000"}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </Svg>
  );
};

export default ExpenseSvg;
