import React from "react";
import { View, Text } from "react-native";
import { ExpenseSvg, IncomeSvg, LightModeSvg } from "../../assets";
import { ViewInformation } from "../../components";

const Home = () => {
  return (
    <View>
      <Text> Bem vindo a Home</Text>
      <ViewInformation title="Entradas" value="R$ 2,00" icon={<IncomeSvg />} />
      <ViewInformation title="Saídas" value="- R$ 5,20" icon={<ExpenseSvg />} />
      <ViewInformation
        title="Total"
        value="R$ -3,20"
        backgroundColor="#fff000"
      />
    </View>
  );
};

export default Home;
