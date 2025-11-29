let message: string = "Hola Mundo";
message = "chanchito feliz"

console.log(message)
message = "chao mundo"
let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;

let mivariable
mivariable = "chanchito feliz"
mivariable = 42

function chanchitoFeliz(config: any): void {
    return config
}

let animales = ["chanchito", "feliz", "felipe"]
let nums: number[] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

let tupla: [number, string[]]= [1, ['chanchito feliz', 'chanchito felipe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla {
    Chicha = 's',
    Mediana = 'm',
    Grande = 'l',
    ExtraGrande = 'xl'
}
const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success
type Direccion = {
        numero: number,
        calle: string,
        pais: string
    }
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = { 
    id: 1, 
    nombre: "chanchito feliz", 
    talla: Talla.ExtraGrande, 
    direccion: 
    { 
        numero: 123, 
        calle: "av siempre viva", 
        pais: "chanchilandia" 
    } 
}

const arr: Persona[] = []

const fn: (a: number) => string = (edad: number) => {
    if(edad > 17) {
        return "puedes ingresar"
    }
    return "no puedes ingresar"
}

function validaEdad(edad: number, msg = 'Chanchito feliz'): string {
    if(edad > 17) {
        `puedes ingresar ${msg}`
    }
    return 'no puedes ingresar'
}

validaEdad(20, 'hola mundo')