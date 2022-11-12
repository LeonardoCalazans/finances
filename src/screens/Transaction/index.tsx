import React from "react";
import {
  Wrapper,
  Title,
  TextDescription,
  TextValue,
  Button,
  TextButton,
  Maps
} from "./styles";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Transaction = () => {
  const [date, setDate] = React.useState(new Date());
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");
  return (
    <Wrapper>
      <Title>Nova Transação {description}</Title>
      <TextDescription
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextValue
        placeholder="Valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <RNDateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || date;
          setDate(currentDate);
        }}
      />
      <Maps />
      <Button>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Wrapper>
  );
};

export default Transaction;
