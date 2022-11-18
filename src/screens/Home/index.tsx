import React, { useCallback, useState } from "react";
import { BalanceSvg, ExpenseSvg, IncomeSvg } from "../../assets";
import { CardTransactions, ViewInformation } from "../../components";
import {
  Wrapper,
  WrapperCards,
  Title,
  ButtonSignOut,
  ButtonSignOutText,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  COLLECTION_AMOUNTS,
  COLLECTION_TRANSACTIONS,
} from "../../utils/config/database";
import { theme } from "../../utils/theme/theme";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<UserAmountType>({
    income: 0,
    expense: 0,
    balance: 0,
  });
  const { handleSingOutWithGoogle } = useAuth();

  const deleteTransaction = async (id: TransactionType["id"]) => {
    Alert.alert("Delete", "Deseja realmente deletar?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          const response = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
          const storage: TransactionType[] = response
            ? JSON.parse(response)
            : [];
          const storage2 = storage.filter((item) => {
            return item.id !== id;
          });
          await AsyncStorage.setItem(
            COLLECTION_TRANSACTIONS,
            JSON.stringify(storage2)
          );
          await loadTransactions();
        },
      },
    ]);
  };

  const loadAmounts = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_AMOUNTS);
    const amounts = JSON.parse(response);
    setAmount({
      income: amounts.income,
      expense: amounts.expense,
      balance: amounts.balance,
    });
  };

  const loadTransactions = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
    const storage: TransactionType[] = response ? JSON.parse(response) : [];
    let newAmounts = {
      income: 0,
      expense: 0,
      balance: 0,
    } as UserAmountType;
    if (category) {
      setTransactions(storage.filter((item) => item.category === category));
    } else {
      setTransactions(storage);
    }
    setLoading(false);
    storage.map(({amount}) => {
      newAmounts = {
        income: amount >= 0 ? newAmounts.income + amount : newAmounts.income,
        expense: amount < 0 ? newAmounts.expense + amount : newAmounts.expense,
        balance: newAmounts.balance + amount,
      };
    });
    await AsyncStorage.setItem(COLLECTION_AMOUNTS, JSON.stringify(newAmounts));
    await loadAmounts();
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
      loadAmounts();
    }, [category])
  );

  return (
    <Wrapper>
      <ViewInformation
        title="Entradas"
        balance={amount.income}
        icon={<IncomeSvg />}
      />
      <ViewInformation
        title="Saídas"
        balance={amount.expense}
        icon={<ExpenseSvg />}
      />
      <ViewInformation
        title="Total"
        balance={amount.balance}
        icon={<BalanceSvg />}
        backgroundColor={true}
      />
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.secondary100} />
      ) : (
        <WrapperCards>
          <Title>Transações</Title>
          {transactions.map((data, index) => (
            <CardTransactions
              key={index}
              data={data}
              // onPress={() => handleTransactionDetails(item)}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </WrapperCards>
      )}
      <ButtonSignOut onPress={() => handleSingOutWithGoogle()}>
        <ButtonSignOutText>Sair</ButtonSignOutText>
      </ButtonSignOut>
    </Wrapper>
  );
};

export default Home;
