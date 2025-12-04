"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatosBasicos {
    name;
    desc;
    created_at;
    created_by;
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear;
    }
    get fullDesc() {
        return `${this.name} - ${this.desc}`;
    }
}
class Producto extends DatosBasicos {
    stock;
    sku;
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Producto:' + super.fullDesc;
    }
}
class Categoria extends DatosBasicos {
    productos = [];
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDesc() {
        return 'Categoria:' + super.fullDesc;
    }
}
let producto1 = new Producto(100, 1, 'iPhhone', 'Un telefono de la marca Apple', new Date(), 1);
let categoria = new Categoria('Celulares', 'Categoria de telefonos', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDesc);
//# sourceMappingURL=herencia.js.map