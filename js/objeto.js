class Usuario {
    constructor(nombre,apellido,mail,clave,edad,tipo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.mail = mail,
        this.edad = edad,
        this.clave = clave
        this.tipo = tipo
    }
}

class Producto {

	constructor(nombre, precio) {
		this.nombre = nombre
		this.precio = precio
	}
}

const productosInicio = [   {nombre:"Coca",precio:200},
                            {nombre:"Fanta",precio:220},
                            {nombre:"Sprite",precio:250}
                        ]


const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let productos = JSON.parse(localStorage.getItem("productos")) || productosInicio
const carrito = []