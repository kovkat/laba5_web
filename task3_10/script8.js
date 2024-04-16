function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Приклади використання:

const code1 = 'function someFn() { console.log("Hello World!"); }';
console.log(checkBrackets(code1)); // Поверне true

const code2 = 'function someFn() { console.log("Hello World!" }';
console.log(checkBrackets(code2)); // Поверне false, брак закриваючої  дужки

const code3 = 'function someFn() { console.log["Hello World!" }';
console.log(checkBrackets(code2)); // Поверне false, брак закриваючої  дужки