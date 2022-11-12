import React from "react";
import { View, Text } from "react-native";
import { BalanceSvg, ExpenseSvg, IncomeSvg } from "../../assets";
import { ViewInformation } from "../../components";
import { Wrapper, WrapperCards, Title } from "./styles";

const Home = () => {
  const entradas = 2.0;
  const saidas = -5.3;
  const saldo = entradas + saidas;

  return (
    <Wrapper>
      <ViewInformation title="Entradas" balance={2.0} icon={<IncomeSvg />} />
      <ViewInformation title="Saídas" balance={-5.3} icon={<ExpenseSvg />} />
      <ViewInformation
        title="Total"
        balance={saldo}
        icon={<BalanceSvg />}
        backgroundColor={true}
      />
      <WrapperCards>
        <Title>Transações</Title>
      </WrapperCards>
    </Wrapper>
  );
};

export default Home;
