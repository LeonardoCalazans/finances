import React from "react";
import { Title, Value, Wrapper, WrapperInfo } from "./styles";

type Props = {
  title: string;
  value: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
};

const ViewInformation: React.FC<Props> = ({
  title,
  value,
  icon,
  backgroundColor,
}: Props) => {
  return (
    //passando propriedade backgroundColor para o componente Wrapper
    <Wrapper backgroundColor={backgroundColor}>
      <WrapperInfo>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </WrapperInfo>
      {icon}
    </Wrapper>
  );
};

export default ViewInformation;
