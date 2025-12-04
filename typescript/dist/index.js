"use strict";
// let message: string = "Hola Mundo";
// message = "chanchito feliz"
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(message)
// message = "chao mundo"
// let extincionDinosaurios: number = 76_000_000;
// let dinosaurioFavorito: string = "T-Rex";
// let extintos: boolean = true;
// let mivariable
// mivariable = "chanchito feliz"
// mivariable = 42
// function chanchitoFeliz(config: any): void {
//     return config
// }
// let animales = ["chanchito", "feliz", "felipe"]
// let nums: number[] = [1,2,3]
// let checks: boolean[] = []
// let nums2: Array<number> = []
// let tupla: [number, string[]]= [1, ['chanchito feliz', 'chanchito felipe']]
// const chica = 's'
// const mediana = 'm'
// const grande = 'l'
// const extragrande = 'xl'
// enum Talla {
//     Chicha = 's',
//     Mediana = 'm',
//     Grande = 'l',
//     ExtraGrande = 'xl'
// }
// const variable1 = Talla.Grande
// console.log(variable1)
// const enum LoadingState { Idle, Loading, Success, Error }
// const estado = LoadingState.Success
// type Direccion = {
//         numero: number,
//         calle: string,
//         pais: string
//     }
// type Persona = {
//     readonly id: number,
//     nombre: string,
//     talla: Talla,
//     direccion: Direccion
// }
// const objeto: Persona = { 
//     id: 1, 
//     nombre: "chanchito feliz", 
//     talla: Talla.ExtraGrande, 
//     direccion: 
//     { 
//         numero: 123, 
//         calle: "av siempre viva", 
//         pais: "chanchilandia" 
//     } 
// }
// const arr: Persona[] = []
// const fn: (a: number) => string = (edad: number) => {
//     if(edad > 17) {
//         return "puedes ingresar"
//     }
//     return "no puedes ingresar"
// }
// function validaEdad(edad: number, msg = 'Chanchito feliz'): string {
//     if(edad > 17) {
//         `puedes ingresar ${msg}`
//     }
//     return 'no puedes ingresar'
// }
// validaEdad(20, 'hola mundo')
// function ErrorUsuario(): never {
//     throw new Error('Error en el usuario')
// }
// let puntaje: number | string = 98
// puntaje = 'hola mundo'
// type Animal = {
//     id: number,
//     estado: string
// }
// type Usuario = {
//     id: number,
//     name: string
// }
// let animal: Usuario | Animal = { id: 1, estado: '', name: '' }
// function sumaDos(n: number | string): number {
//     if(typeof n === 'number') { 
//         return n + 2;
//     }
//     return parseInt(n) + 2
// }
// sumaDos('2')
// console.log('suma de dos más dos', 2 + '2')
// type Audit = {
//     created_at: string,
//     modified_at: string
// }
// type Product = {
//     name: string,
// }
// const product: Audit & Product = {
//     name: '',
//     created_at: '',
//     modified_at: ''
// }
// type fibo = 0 | 2 | 3 | 5
// const nDeFibo: fibo = 5;
// function toNumber(s: string | null | undefined) {
//     if(!s) {
//         return 0
//     }
//     return parseInt(s)
// }
// const n = toNumber(null)
// function getUser(id: number) {
//     if(id < 0)
//         return null
//     return {
//         id: 1,
//         name: 'Felipe',
//         created_at: new Date()
//     }
// }
// const user = getUser(1)
// console.log('usuario', user?.created_at)
// if(user && user.created_at) {
//     console.log(user.created_at)
// }
// const arr1 = null
// console.log(arr1?.[0])
// const fn5: any = null
// console.log(fn5?.())
// const difficulty: number | null = 0
// const user2 = {
//     username: 'chanchito feliz',
//     difficulty: difficulty ?? 1
// }
// console.log('user2', user2)
// const elem: any = null;
// const elem1 = elem as number
// const input = <HTMLInputElement>document.getElementById('username');
// function Lala(x: string | number) {
//     if(typeof x === 'number') {
//     }
//     if(typeof x === 'string') {
//     }
// }
// function procesa(algo: unknown) {
//     if(typeof algo === 'string') {
//         return algo.toUpperCase()
//     }
//     if(typeof algo === 'number') {
//         return algo.toString
//     }
// }
class Personaje {
    id;
    name;
    nivel;
    hp;
    profesion;
    static equipo = 1;
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        return this.nivel += 1;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    cambiarHP(cantidad) {
        // no pasarse del maximo
        return this.hp += cantidad;
    }
    getHp() {
        return this.hp;
    }
    getEquipo() {
        return Personaje.equipo;
    }
}
const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.cambiarHP(-10);
const personaje1 = new Personaje(2, 'Chanchito', 1, 120);
Personaje.agregarPersonaje();
console.log(personaje.getEquipo());
//# sourceMappingURL=index.js.map