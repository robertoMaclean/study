const myName = 'Rob'
const myAge = 12
const suma = (a: number, b: number) => {
  return a + b
}
suma(12, 12)

class Persona {
  private age
  private name

  constructor(age: number, name: string) {
    this.age = age
    this.name = name
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`
  }
}

const rob = new Persona(35, 'Rob')
console.log(rob.getSummary())
