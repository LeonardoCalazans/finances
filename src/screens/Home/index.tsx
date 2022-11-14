import React from "react";
import { View, Text } from "react-native";
import { BalanceSvg, ExpenseSvg, IncomeSvg } from "../../assets";
import { CardTransactions, ViewInformation } from "../../components";
import { Wrapper, WrapperCards, Title } from "./styles";

const Home = () => {
  const entradas = 200;
  const saidas = -5000.37;
  const saldo = entradas + saidas;

  const transactionsArray = [
    {
      title: "Salário",
      description: "Salarinho de cada mês",
      amount: 2900,
      date: new Date(),
      category: "income",
      location: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      title: "Aluguel",
      description: "Aluguel do apartamento do mês, que é caro demais :( ",
      amount: -550.9,
      date: new Date(),
      category: "Casa",
    },
    {
      title: "Salário",
      description: "Salarinho de cada mês",
      amount: 2900,
      date: new Date(),
      category: "income",
      location: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      title: "Aluguel",
      description: "Aluguel do apartamento do mês, que é caro demais :( ",
      amount: -550.9,
      date: new Date(),
      category: "Casa",
    },
    {
      title: "Salário",
      description: "Salarinho de cada mês",
      amount: 2900,
      date: new Date(),
      category: "income",
      location: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      title: "Aluguel",
      description: "Aluguel do apartamento do mês, que é caro demais :( ",
      amount: -550.9,
      date: new Date(),
      category: "Casa",
    },
  ];

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
        {transactionsArray.map(
          ({ title, description, amount, date, category }, index) => (
            <CardTransactions
              key={index}
              title={title}
              description={description}
              amount={amount}
              date={date}
              category={category}
            />
          )
        )}
      </WrapperCards>
    </Wrapper>
  );
};

export default Home;
