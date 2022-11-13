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

declare type TransactionType = {
    title: string;
    description?: string;
    amount: number;
    date: Date;
    category?: category;
    location?: Location;
};