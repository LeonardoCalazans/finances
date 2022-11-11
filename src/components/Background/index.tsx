import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../utils/theme/theme";

type Props = {
  children: React.ReactNode;
  onLayout?: () => void;
};

const Background: React.FC<Props> = ({ children, onLayout }) => {
  const { background100, on } = theme.colors;
  return (
    <LinearGradient
      testID="background"
      style={styles.container}
      colors={[background100, on]}
      onLayout={onLayout}
      children={children as any}
    />
  );
};

export default Background;
