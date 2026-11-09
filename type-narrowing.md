# Type Narrowing in TypeScript

Type narrowing is how TypeScript turns a wide type into a smaller, safer type after a runtime check. Union parameters stay unsafe until the compiler knows which member you currently have. The `processInput` task is a direct example: the value may be a string, a number, or a boolean.

`typeof` is the first tool. After `typeof input === "string"`, TypeScript treats `input` as a string inside that block, so `trim()` is legal. In the number branch, multiplication is legal. Without those checks, the same operations would be type errors.

```ts
function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  return input * 10;
}
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
