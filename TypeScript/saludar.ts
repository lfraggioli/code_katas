function saludar(persona: { name: string; age: number }) {
  console.log(`Hola soy ${persona.name}, tengo ${persona.age} años`);
}

saludar({ name: "Lucas", age: 25 });

function saludarReturn(persona: { name: string; age: number }): string {
  return `Hola soy ${persona.name}, tengo ${persona.age} años`;
}
