# Access Modifiers (public, private, protected, and readonly) in TypeScript OOP

In TypeScript, access modifiers (public, private, protected, and readonly) control the visibility and mutability of class properties and methods.

## Public
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

const user = new User("alex_dev", "Admin");
console.log(user.username); // Allowed: "alex_dev"
user.role = "Editor";       // Allowed

```

`instanceof` is the check for class instances. A function may accept `Error | string`. Calling `error.message` is only safe after `value instanceof Error`. This matters in async code, where a rejected Promise often carries an `Error` but a caller might also pass a plain string.

```ts
function readMessage(value: Error | string): string {
  if (value instanceof Error) {
    return value.message;
  }

  return value;
}
```

The `in` operator narrows object unions by property names. If one shape has `students` and another has `salary`, checking `"students" in item` tells TypeScript which object you are holding. That is more precise than casting.

```ts
type Course = { title: string; students: number };
type Staff = { name: string; salary: number };

function label(item: Course | Staff): string {
  if ("students" in item) {
    return item.title;
  }

  return item.name;
}
```

Narrowing does not change the value at runtime. It only records the result of a check so later code can use the matching API. I now write the check first, then the operation, instead of forcing a type with `as`.
