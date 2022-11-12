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
    value: number;
    category: category;
    created_at: Date;
};