"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Caballo {
    name = 'Cocinante';
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    name = 'Chanchito feliz';
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'oing';
    }
}
class Perro {
    name = 'Firulais';
    caminar() {
        console.log('Perro caminando');
    }
    onomatopeya() {
        return 'guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
diccionarioUsuarios['a1'] = 'usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map