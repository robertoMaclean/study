// function log<T, V>(a: T, b: V) {
//     console.log(a, b)
//     return b
// }
// log<string, number>('dato', 42)
// log<string, string>('dato', 'chanchito feliz')

// log(1, 2)
// log("Saluda", "Hola Mundo")

// async function fetchData<T>(recurso: string) {
//     const respuesta = await fetch(`${recurso}`)
//     return respuesta.json
// }

// type User = {
//     id: string,
//     name: string
// }

// async function main() {
//     const user = await fetchData<User>('/usuarios')
// }

// type computador = {
//     encender: () => void
//     apagar: () => void
// }

// class Programador<T> {
//     computador: T;
//     constructor(computador: T) {
//         this.computador = computador
//     }

// }

// const programador = new Programador({
//     encender: () => {},
//     apagar: () => {}
// })
// const programador1 = new Programador<string>('hola mundo')

interface KeyValue<T, V> {
    key: T,
    value: V
}

interface Product {
    id: string
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id de producto',
        value: 500
    }
}

class Usuario {
    constructor(public id: string) { }
}

function print<T extends Usuario>(t: T): T {
    console.log(t)
    return t
}

class Estado<T> {
    protected data: T[] = []

    agregar(t: T) {
        this.data.push(t)
    }

    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id: string
}
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string) {
        this.data.filter(item => item.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuario> {
    reiniciarContrasena() { }
}

type Calendar = {
    id: number,
    fuente: string,
    dueno: string
}

const calendar: Calendar = { id: 1, fuente: 'Google', dueno: 'yo' }

// function getProp<T>(objeto: T, property: keyof T):unknown {}

type Punto = {
    x: number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto>
type PuntoRequerido = Required<Punto>

const KeyVal: Record<string, number> = {
    'soy un string': 42
}

type kv = { [key: string]: number }

const p: Omit<Punto, 'desc' | 'y'> = {
    x: 1
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
}

const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 3,
    desc: 'soy una descripcion'
}
