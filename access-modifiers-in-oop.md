# Access Modifiers (public, private, protected, and readonly) in TypeScript OOP

In TypeScript, access modifiers (public, private, protected, and readonly) control the visibility and mutability of class properties and methods.

## public

Any property or method without an explicit modifier defaults to public and has global reach. It can be modified accessed and modified from inside the class, inside the child classes and instantiated objects.

```ts
class User {
  public username: string;
  role: string; // Implicitly public

  constructor(username: string, role: string) {
    this.username = username;
    this.role = role;
  }

  public greet(): string {
    return `Hello, ${this.username}`;
  }
}

const user = new User("dhruba", "Admin");
console.log(user.username); // Allowed: "dhruba"
user.role = "Editor"; // Allowed
```

## private

Members marked as private are only accessible within the exact class where they are declared. Neither external code nor subclasses can read or modify them.

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount; // Allowed inside the class
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Allowed: 150
// console.log(account.balance);   // Error: Property 'balance' is private
```

## protected

Members marked as protected behave like private members to the outside world, but they remain accessible inside subclasses that inherit from the parent class.

```ts
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  public giveRaise(amount: number): void {
    this.salary += amount; // Allowed inside a subclass
  }

  public getSalary(): number {
    return this.salary;
  }
}

const mgr = new Manager(80000);
mgr.giveRaise(5000);
console.log(mgr.getSalary()); // Allowed: 85000
// console.log(mgr.salary);   // Error: Property 'salary' is protected
```

## readonly

The readonly modifier prevents a property from being reassigned after it is initialized. It can only be assigned a value at declaration or inside the class constructor, and it can be combined with public, private, or protected.

```ts
class ServerConfig {
  public readonly host: string;
  private readonly apiKey: string;

  constructor(host: string, apiKey: string) {
    this.host = host; // Allowed in constructor
    this.apiKey = apiKey; // Allowed in constructor
  }

  public updateHost(newHost: string): void {
    // this.host = newHost; // Error: Cannot assign to 'host' because it is a read-only property
  }
}

const config = new ServerConfig("localhost", "secret_123");
console.log(config.host); // Allowed: "localhost"
// config.host = "127.0.0.1"; // Error: Read-only property
```

TypeScript’s access modifiers establish clear boundaries around your class data to protect internal state and enforce clean object-oriented architecture. Together, these modifiers catch unintended mutations and unauthorized access at compile time, making codebase more predictable, secure, and easier to refactor.
