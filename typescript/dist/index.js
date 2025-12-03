"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hola Mundo";
message = "chanchito feliz";
console.log(message);
message = "chao mundo";
let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
mivariable = "chanchito feliz";
mivariable = 42;
function chanchitoFeliz(config) {
    return config;
}
let animales = ["chanchito", "feliz", "felipe"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ['chanchito feliz', 'chanchito felipe']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chicha"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Idle"] = 0] = "Idle";
    LoadingState[LoadingState["Loading"] = 1] = "Loading";
    LoadingState[LoadingState["Success"] = 2] = "Success";
    LoadingState[LoadingState["Error"] = 3] = "Error";
})(LoadingState || (LoadingState = {}));
const estado = LoadingState.Success;
const objeto = {
    id: 1,
    nombre: "chanchito feliz",
    talla: Talla.ExtraGrande,
    direccion: {
        numero: 123,
        calle: "av siempre viva",
        pais: "chanchilandia"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17) {
        return "puedes ingresar";
    }
    return "no puedes ingresar";
};
function validaEdad(edad, msg = 'Chanchito feliz') {
    if (edad > 17) {
        `puedes ingresar ${msg}`;
    }
    return 'no puedes ingresar';
}
validaEdad(20, 'hola mundo');
function ErrorUsuario() {
    throw new Error('Error en el usuario');
}
let puntaje = 98;
puntaje = 'hola mundo';
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
console.log('suma de dos más dos', 2 + '2');
const product = {
    name: '',
    created_at: '',
    modified_at: ''
};
const nDeFibo = 5;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0)
        return null;
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    };
}
const user = getUser(1);
console.log('usuario', user?.created_at);
if (user && user.created_at) {
    console.log(user.created_at);
}
const arr1 = null;
console.log(arr1?.[0]);
const fn5 = null;
console.log(fn5?.());
const difficulty = 0;
const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty ?? 1
};
console.log('user2', user2);
//# sourceMappingURL=index.js.map