interface Animal {
    name: string

    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal {
    name: string = 'Cocinante'

    caminar() {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito feliz'

    caminar() {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'oing'
    }
}

class Perro implements Animal {
    name: string = 'Firulais'

    caminar() {
        console.log('Perro caminando')
    }

    onomatopeya(): string {
        return 'guau'
    }
}

class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'usuario 1'
diccionarioUsuarios['a1'] = 'usuario 2'
console.log(diccionarioUsuarios)
