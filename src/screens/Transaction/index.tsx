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
} from "./styles";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

const Transaction = () => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(Number);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [category, setCategory] = useState("");

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    if (Platform.OS === "ios") {
      return;
    }
    setShowDatePicker(false);
  };

  const sendNewTransaction = () => {
    const newTransaction = {
      title: title,
      description: description,
      amount: amount,
      category: category,
      date: date,
      location: location,
    };

    console.log(newTransaction);
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
      <TextInputAmount
        value={amount}
        onChangeValue={setAmount}
        onChangeText={(formattedValue) => {
          console.log(formattedValue); // R$ +2.310,46
        }}
        placeholder="Valor"
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
            <ButtonIOsDate onPress={() => setShowDatePicker(false)}>
              <TextButton>Confirmar</TextButton>
            </ButtonIOsDate>
          )}
        </>
      )}
      <Button onPress={sendNewTransaction}>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Wrapper>
  );
};

export default Transaction;
