import React from "react";
import { currencyFormat, dateFormat } from "../../utils/helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../utils/theme/theme";
import {
  Container,
  Amount,
  Description,
  Title,
  Wrapper,
  WrapperCategoryAmount,
  WrapperDescriptions,
} from "./styles";

type Props = {
  data: TransactionType;
  deleteTransaction?: (id: TransactionType["id"]) => void;
};

const CardTransactions = ({ data, deleteTransaction }: Props) => {
  //criar logica de toutchableOpacity para o usuário navegar abrir um janela (screens) nova com mais detalhes da transação onde o usuário pode editar ou deletar a transação ou editar. Parecida com a tela de nova transação.
  const { id, title, description, amount, category, date } = data;

  return (
    <Wrapper>
      <Container>
        <WrapperDescriptions>
          <Title>{title}</Title>
          <Description>{dateFormat(date)}</Description>
        </WrapperDescriptions>
        <Description>{description}</Description>
      </Container>
      <WrapperCategoryAmount onPress={() => deleteTransaction(id)}>
        <Amount amount={amount}>{currencyFormat(amount)}</Amount>
        <Description>{category}</Description>
        <Ionicons name="trash" color={theme.colors.red} size={18} />
      </WrapperCategoryAmount>
    </Wrapper>
  );
};

export default CardTransactions;
