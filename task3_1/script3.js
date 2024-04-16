let totalCostAllProducts = 0;
// Функція для створення об'єкта товару з унікальним ідентифікатором і виклику колбека
function createProduct(obj, callback) {
    // Генеруємо випадковий ідентифікатор
    const id = Math.random().toString(36).substr(2, 9);
    // Додаємо ідентифікатор до об'єкта товару
    const product = {...obj, id: id };
    totalCostAllProducts += obj.price * obj.quantity;
    // Викликаємо колбек і передаємо йому створений об'єкт товару
    callback(product);
}

// Колбек для логування об'єкту товару в консоль
function logProduct(product) {
    console.log("Продукт:", product);
}

// Колбек для логування загальної вартості товару в консоль
function logTotalPrice(product) {
    let totalCostProduct = 0;
    // Обчислюємо вартість для поточного продукту
    if (product.price && product.quantity) {
        totalCostProduct = product.price * product.quantity;
    }
    // Виводимо вартість поточного продукту в консоль
    console.log("Загальна вартість поточного продукту:", totalCostProduct);
    // Виводимо загальну вартість всіх товарів в консоль
    console.log("Загальна вартість всіх товарів:", totalCostAllProducts);
}

// Приклади використання:

// Приклад 1: Створення продукту "Футболка"
const product1 = {
    name: "Футболка",
    price: 20,
    quantity: 3
};
createProduct(product1, logProduct);

// Виклик колбеку для логування загальної вартості продукту
logTotalPrice(product1);

// Приклад 2: Створення продукту "Книга"
const product2 = {
    name: "Книга",
    price: 15,
    quantity: 2
};
createProduct(product2, logProduct);

// Виклик колбеку для логування загальної вартості продукту
logTotalPrice(product2);