import React, { useState } from "react";
import {
  Wrapper,
  TextInputTitle,
  TextInputDescription,
  TextInputAmount,
  Button,
  TextButton,
  TextInputDate,
  ButtonIOsDate,
  ButtonIcon,
  WrapperIcon,
} from "./styles";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  COLLECTION_AMOUNTS,
  COLLECTION_TRANSACTIONS,
} from "../../utils/config/database";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../utils/theme/theme";

const Transaction = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [category, setCategory] = useState("");

  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      setShowDatePicker(false);
    }
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (Platform.OS === "ios") {
      return;
    }
    setShowDatePicker(false);
  };

  const handleSaveTransaction = async () => {
    const newTransaction = {
      id: Math.random(),
      title: title,
      description: description,
      amount: amount,
      category: category,
      date: date,
    };

    //storage transações
    const storage = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
    const transactions = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_TRANSACTIONS,
      JSON.stringify([...transactions, newTransaction])
    );

    await handleSaveAmounts();

    setTitle("");
    setDescription("");
    setAmount(0);
    setCategory("");
    setDate(new Date());

    navigation.navigate("Home");
  };

  const handleSaveAmounts = async () => {
    //storage user
    const storageAmounts = await AsyncStorage.getItem(COLLECTION_AMOUNTS);
    const amounts = JSON.parse(storageAmounts);

    const newAmounts = {
      income: amount >= 0 ? amounts.income + amount : amounts.income,
      expense: amount < 0 ? amounts.expense + amount : amounts.expense,
      balance: amounts.balance + amount,
    } as UserAmountType;

    console.log("amountsTransactions", amounts);

    await AsyncStorage.setItem(COLLECTION_AMOUNTS, JSON.stringify(newAmounts));
  };

  const handleInverteSinal = () => {
    setAmount(amount * -1);
  };

  return (
    <Wrapper>
      <TextInputTitle
        placeholder="Título"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInputDescription
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <WrapperIcon>
        <TextInputAmount
          value={amount}
          amountPositive={amount >= 0}
          onChangeValue={setAmount}
          onChangeText={(formattedValue) => {}}
          placeholder="Valor"
        />
        {/* icone de sinal de negativo */}
        <ButtonIcon onPress={handleInverteSinal}>
          <Ionicons
            name={amount >= 0 ? "ios-add-circle" : "ios-remove-circle"}
            size={24}
            color={amount >= 0 ? theme.colors.green : theme.colors.red}
          />
        </ButtonIcon>
      </WrapperIcon>
      <TextInputDate
        value={date.toLocaleDateString()}
        onPressIn={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <>
          <RNDateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              onChange(event, currentDate);
            }}
          />
          {Platform.OS === "ios" && (
            <ButtonIOsDate onPress={() => setShowDatePicker(false)}>
              <TextButton>Confirmar</TextButton>
            </ButtonIOsDate>
          )}
        </>
      )}
      <Button onPress={handleSaveTransaction} disabled={!amount && !!title}>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Wrapper>
  );
};

export default Transaction;
