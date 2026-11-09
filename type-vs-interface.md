# Type Aliases vs Interface in TypeScript

Type aliases and interfaces both describe the shape of data, but they are not interchangeable in every situation. I used to treat them as the same tool until a few assignment tasks forced me to look at what each one can actually do.

A type alias names any TypeScript type. That includes object shapes, unions, intersections, tuples, and primitives. An interface always describes an object-like contract. Both can describe a `User` with `id` and `name`, so the overlap is real.

```ts
type User = {
  id: number;
  name: string;
};

interface Product {
  id: number;
  title: string;
}

type Status = "draft" | "published";
```

The first practical difference is flexibility. `Status` cannot be written as an interface because a string union is not an object. Tuples and function types are also a better fit for `type`. Interfaces shine when you model classes, public APIs, and objects that may grow over time.

Declaration merging is the second difference. If I declare `interface Course` twice, TypeScript merges the properties. Type aliases do not merge; a second `type Course` is a conflict. Merging is useful in libraries, but it can hide mistakes in a small assignment file.

```ts
interface Logger {
  log(message: string): void;
}

interface Logger {
  warn(message: string): void;
}
```

Extending works on both sides, with slightly different syntax. An interface uses `extends`. A type alias uses `&`. I prefer `interface` for class-shaped objects and `type` for unions, tuples, and mapped combinations.

My rule is simple. Use `interface` for object contracts that other code should implement. Use `type` when the value might be a union, a tuple, or a computed type. That split keeps the code honest about what the data really is.
