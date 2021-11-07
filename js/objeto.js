class Usuario {
	constructor(mail,clave,tipo){
		this.mail = mail,
		this.clave = clave
		this.tipo = tipo
	}
}

class Producto {
	constructor(nombre, precio, imagen, id, vendedor = 0, marca = "") {
		this.nombre = nombre,
		this.precio = precio,
		this.imagen = imagen,
		this.id = id,
		this.usuario = vendedor,
		this.marca = marca
	}
}

const productosInicio = [
	{nombre:"Qiyi Mofangge Warrior 3x3x3 Speedcube",precio:4.98,imagen:"./img/qiyi/warrior-3x3x3-speedcube-stickerless.jpg",id:1},
	{nombre:"Gan 356 R 3x3×3 Stickerless",precio:23.32,imagen:"./img/gancube/356-r-3x3x3-stickerless.jpg",id:2},
	{nombre:"MoYu MFJS Axis Stickerless",precio:3.32,imagen:"./img/moyu/mfjs-axis-stickerless.jpg",id:3},
	{nombre:"MoYu MeiLong 3×3 Stickerless",precio:3.32,imagen:"./img/moyu/meilong-3x3x3-stickerless.jpg",id:4}
											]


const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let productos = JSON.parse(localStorage.getItem("productos")) || productosInicio
const carrito = []