function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando el decorador de rutas')
        constructor.prototype.route = ruta
    }

}

function Method(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(methodName, descriptor)
}

@Route('/productos')
class Productos {

    find() {
        return 'Producto'
    }
}