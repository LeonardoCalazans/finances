const currencyFormat = (num: number) => {
  return num ? num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00';
}

export default currencyFormat;
