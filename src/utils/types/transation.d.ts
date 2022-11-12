const category = {
    income: 'renda',
    expense: 'despesa',
    food: 'comida',
    entertainment: 'entretenimento',
    clothing: 'roupas',
    medical: 'medico',
    house: 'casa',
    digital: 'digital',
    other: 'outros',
};

declare type Transaction = {
    id: string;
    title: string;
    description: string;
    currency: number;
    date: Date;
    category: category;
    location: string;
};