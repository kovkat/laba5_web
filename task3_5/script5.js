function applyDiscount(fruits) {
    // Функція для обчислення ціни зі знижкою 20%
    const calculateDiscountPrice = price => price * 0.8;

    // Перетворюємо кожен об'єкт фрукта, застосовуючи знижку та додаючи ідентифікатор
    const discountedFruits = fruits.map((fruit, index) => {
        // Обчислюємо ціну зі знижкою
        const discountedPrice = calculateDiscountPrice(fruit.price);
        // Повертаємо новий об'єкт з ідентифікатором та новою ціною
        return {
            id: index + 1,
            name: fruit.name,
            price: discountedPrice
        };
    });

    // Виводимо кожний об'єкт фрукта із зниженими цінами у консоль
    discountedFruits.forEach(fruit => {
        console.log(`Назва: ${fruit.name}, Ціна зі знижкою: ${fruit.price}`);
    });
}

// Вихідний масив фруктів
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

// Викликаємо функцію та виводимо результати у консоль
applyDiscount(fruits);