# Type Aliases vs Interface in TypeScript

Type aliases and interfaces both describe the shape of data. Although both provide type safety and largely interchangable but they are not interchangable in every scenario.

A type alias names any TypeScript type. That includes object shapes, unions, intersections, tuples, and primitives. An interface always describes an object-like contract.

The first diffenrece is declaration merging. Interfaces are "open", meaning if you declare an interface `User` twice in the same scope, TypeScript merges their properties into a single definition. Type aliases are "closed" and cannot be modified or re-declared after creation.

```ts
interface User {
  id: number;
  name: string
}

interface User {
  age: number
}
```

Another one is type versality of type aliases. Type aliases offer broader utility because they can represent non-object shapes like union types (type Status = "open" | "closed"), tuples (type Pair = [string, number]), and primitive aliases (type ID = string), which interfaces cannot express directly.

## When we should choose one over the other
Interfaces are primarily designed for defining object shapes and support extension and declaration merging.
Type Aliases are suitable for unions, tuples, primitive types, function types, and object types.

We should use interfaces wherever we can, specifically defining object shapes, and if we can't use interface then we should use type aliases.
