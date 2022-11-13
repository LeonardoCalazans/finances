import React from "react";
import { currencyFormat } from "../../utils/helpers";
import { Title, Value, Wrapper, WrapperInfo } from "./styles";

type Props = {
  title: string;
  balance: number;
  icon?: React.ReactNode;
  backgroundColor?: boolean;
};

const ViewInformation: React.FC<Props> = ({
  title,
  balance,
  icon,
  backgroundColor,
}: Props) => {
  return (
    <Wrapper backgroundColor={backgroundColor} balance={balance}>
      <WrapperInfo>
        <Title backgroundColor={backgroundColor}>{title}</Title>
        <Value backgroundColor={backgroundColor}>
          {balance ? currencyFormat(balance) : "R$ 0,00"}
        </Value>
      </WrapperInfo>
      {icon}
    </Wrapper>
  );
};

export default ViewInformation;
