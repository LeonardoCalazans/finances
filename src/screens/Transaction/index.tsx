import React, { useState } from "react";
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
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState(Number);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
      currency: currency,
      category: category,
      date: date,
      location: location,
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
      <Wrapper>
        <TextInputCurrency
          value={currency}
          onChangeValue={setCurrency}
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
              <Button onPress={() => setShowDatePicker(false)}>
                <TextButton>Confirmar</TextButton>
              </Button>
            )}
          </>
        )}
      </Wrapper>

      <LocationMap
        locations={location}
        setLocations={() => setLocation(location)}
      />
      <Button onPress={sendNewTransaction}>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Wrapper>
  );
};

export default Transaction;
