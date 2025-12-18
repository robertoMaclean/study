"use strict";
// function log<T, V>(a: T, b: V) {
//     console.log(a, b)
//     return b
// }
// log<string, number>('dato', 42)
// log<string, string>('dato', 'chanchito feliz')
Object.defineProperty(exports, "__esModule", { value: true });
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        value: 500
    };
}
class Usuario {
    id;
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
class Estado {
    data = [];
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data.filter(item => item.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasena() { }
}
const calendar = { id: 1, fuente: 'Google', dueno: 'yo' };
const KeyVal = {
    'soy un string': 42
};
const p = {
    x: 1
};
const p1 = {
    x: 1,
    y: 2
};
const readOnlyP = {
    x: 1,
    y: 3,
    desc: 'soy una descripcion'
};
//# sourceMappingURL=genericos.js.map