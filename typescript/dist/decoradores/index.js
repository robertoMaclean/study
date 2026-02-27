"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Route(ruta) {
    return (constructor) => {
        console.log('Ejecutando el decorador de rutas');
        constructor.prototype.route = ruta;
    };
}
function Method(target, methodName, descriptor) {
    console.log(methodName, descriptor);
}
@Route('/productos')
class Productos {
    @Method
    find() {
        return 'Producto';
    }
}
//# sourceMappingURL=index.js.map