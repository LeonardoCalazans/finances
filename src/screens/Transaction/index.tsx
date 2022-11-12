import React from "react";
import {
  Wrapper,
  Title,
  TextInputTitle,
  TextInputDescription,
  TextInputCurrency,
  Button,
  TextButton,
  Maps,
  TextInputDate,
} from "./styles";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { LocationMap } from "../../components";

const Transaction = () => {
  const [date, setDate] = React.useState(new Date());
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [currency, setCurrency] = React.useState(Number);
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    if (Platform.OS === "ios") {
      return;
    }
    setShowDatePicker(false);
  };

  const sendNewTransaction = (transaction: Transaction) => {
    const newTransaction = {
      id: Math.random(),
      title: transaction.title,
      description: transaction.description,
      currency: transaction.currency,
      category: transaction.category,
      date: transaction.date,
      location: transaction.location,
    };

    console.log(newTransaction);
  };

  return (
    <Wrapper>
      <Title>Nova Transação {description}</Title>
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
      <TextInputCurrency
        value={currency}
        onChangeValue={setCurrency}
        onChangeText={(formattedValue) => {
          console.log(formattedValue); // R$ +2.310,46
        }}
      />
      <TextInputDate
        value={date.toLocaleDateString()}
        onPressIn={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <>
          <RNDateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={(event, selectedDate) => {
              const type = event.type;
              const currentDate = selectedDate || date;
              onChange(type, currentDate);
            }}
          />
          {Platform.OS === "ios" && (
            <Button onPress={() => setShowDatePicker(false)}>
              <TextButton>Confirmar</TextButton>
            </Button>
          )}
        </>
      )}
      <LocationMap />
      <Button>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Wrapper>
  );
};

export default Transaction;
