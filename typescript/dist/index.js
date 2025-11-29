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
//# sourceMappingURL=index.js.map