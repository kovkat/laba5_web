class Client {
    _login;
    _email;

    constructor(login, email) {
        this._login = login;
        this._email = email;
    }

    get login() {
        return this._login;
    }

    set login(newLogin) {
        this._login = newLogin;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }
}

// Приклад використання класу Client
const client1 = new Client('user123', 'user123@example.com');

console.log(client1.login); // Виведе 'user123'
console.log(client1.email); // Виведе 'user123@example.com'

client1.login = 'newuser'; // Змінимо логін
client1.email = 'newuser@example.com'; // Змінимо email

console.log(client1.login); // Виведе 'newuser'
console.log(client1.email); // Виведе 'newuser@example.com'