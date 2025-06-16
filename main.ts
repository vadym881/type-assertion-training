function fetchData(n: string = "", a: number = 0): unknown {
  return {
    name: n,
    age: a,
  };
}

function isPerson(obj: unknown): obj is { name: string; age: number } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    "age" in obj &&
    typeof (obj as any).name === "string" &&
    typeof (obj as any).age === "number"
  );
}

const data = fetchData("Vadym", 15);
let person: { name: string; age: number };

if (isPerson(data)) {
  person = data;
} else {
  throw new Error("Invalid data structure");
}
function printPersonInfo(name: string, age: number): void {
  console.log(`Name: ${name}, Age: ${age}`);
}

printPersonInfo(person.name, person.age);
