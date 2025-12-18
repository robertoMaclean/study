abstract class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number
    ) { }

    get fullYear() {
        return this.created_at.getFullYear
    }

    get fullDesc() {
        return `${this.name} - ${this.desc}`
    }

    abstract guardar(): void;
}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, desc, created_at, created_by)

    }

    override get fullDesc() {
        return 'Producto:' + super.fullDesc
    }

    guardar() {
        console.log('Guardando producto...')
    }
}

class Categoria extends DatosBasicos {
    public productos: Producto[] = []

    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, desc, created_at, created_by)

    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    override get fullDesc() {
        return 'Categoria:' + super.fullDesc
    }
    guardar() {
        console.log('Guardando categoria...')
    }
}

let producto1 = new Producto(
    100,
    1,
    'iPhhone',
    'Un telefono de la marca Apple',
    new Date(),
    1
)

let categoria = new Categoria(
    'Celulares',
    'Categoria de telefonos',
    new Date(),
    1
)

categoria.agregarProducto(producto1)
console.log(producto1.fullDesc)
