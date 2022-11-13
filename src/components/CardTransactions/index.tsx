import React from "react";
import { currencyFormat, dateFormat } from "../../utils/helpers";
import {
  Container,
  Amount,
  Description,
  Title,
  Wrapper,
  WrapperCategoryAmount,
  WrapperDescriptions,
} from "./styles";

const CardTransactions = ({
  title,
  description,
  amount,
  date,
  category,
}: TransactionType) => {
  //criar logica de toutchableOpacity para o usuário navegar abrir um janela (screens) nova com mais detalhes da transação onde o usuário pode editar ou deletar a transação ou editar. Parecida com a tela de nova transação.

  return (
    <Wrapper>
      <Container>
        <WrapperDescriptions>
          <Title>{title}</Title>
          <Description>{dateFormat(date)}</Description>
        </WrapperDescriptions>
        <Description>{description}</Description>
      </Container>
      <WrapperCategoryAmount>
        <Amount amount={amount}>{currencyFormat(amount)}</Amount>
        <Description>{category}</Description>
      </WrapperCategoryAmount>
    </Wrapper>
  );
};

export default CardTransactions;
