const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

// Отримання масиву лише з назвами препаратів
const medicineNames = Object.keys(medicines);

// Видалення медикаментів, у яких строк зберігання вже пройшов
const currentMedicines = medicineNames.filter(medicine => medicines[medicine] > new Date());

// Сортування медикаментів у хронологічному порядку
const sortedMedicines = currentMedicines.sort((a, b) => medicines[a] - medicines[b]);

// Виведення результату у консоль
console.log(sortedMedicines);