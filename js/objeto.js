class Usuario {
	constructor(mail,clave,username,tipo){
		this.mail = mail,
		this.clave = clave,
		this.username = username,
		this.tipo = tipo
	}
}

class Producto {
	constructor(nombre, precio, imagen, id, marca = "") {
		this.nombre = nombre,
		this.precio = precio,
		this.imagen = imagen,
		this.id = id,
		this.marca = marca
	}
}

const productosDestacado = [
	{nombre:"Qiyi Mofangge Warrior 3x3x3 Speedcube",precio:4.98,imagen:"./img/qiyi/warrior-3x3x3-speedcube-stickerless.jpg",id:1,marca:"qiyi"},
	{nombre:"Gan 356 R 3x3×3 Stickerless",precio:23.32,imagen:"./img/gancube/356-r-3x3x3-stickerless.jpg",id:2,marca:"gan"},
	{nombre:"MoYu MFJS Axis Stickerless",precio:3.32,imagen:"./img/moyu/mfjs-axis-stickerless.jpg",id:3,marca:"moyu"},
	{nombre:"MoYu MeiLong 3×3 Stickerless",precio:3.32,imagen:"./img/moyu/meilong-3x3x3-stickerless.jpg",id:4,marca:"moyu"}
	];

const productosCatalogo = [
	{nombre:"Ghost Cube with Black Labels",precio:36.00,imagen:"./img/mefferts/ghost-cube-black-label.jpg",id:19,marca:"mefferts"},
	{nombre:"Ghost Cube with White Labels",precio:36.00,imagen:"./img/mefferts/ghost-cube-white-label.jpg",id:18,marca:"mefferts"},
	{nombre:"Hollow Cube 3x3x3 Clear",precio:25.63,imagen:"./img/mefferts/hollow-cube-clear-3x3x3.jpg",id:17,marca:"mefferts"},
	{nombre:"Hollow Pyraminx Clear",precio:25.15,imagen:"./img/mefferts/hollow-pyraminx-clear.jpg",id:16,marca:"mefferts"},
	{nombre:"Hollow Skewb Cube Clear",precio:32.26,imagen:"./img/mefferts/hollow-skewb-cube-clear.jpg",id:15,marca:"mefferts"},
	{nombre:"Hollow Skewb Ultimate Clear",precio:32.36,imagen:"./img/mefferts/hollow-skewb-ultimate-clear.jpg",id:14,marca:"mefferts"},
	{nombre:"MFJS MeiLong 5x5x5",precio:4.98,imagen:"./img/moyu/mfjs-meilong-5x5x5.jpg",id:13,marca:"moyu"},
	{nombre:"Qiyi Axis Black",precio:3.32,imagen:"./img/qiyi/axis-3x3x3.jpg",id:12,marca:"qiyi"},
	{nombre:"Qiyi QiHeng S Megaminx",precio:6.65,imagen:"./img/qiyi/qiheng-s-megamix.jpg",id:11,marca:"qiyi"},
	{nombre:"GAN MG Skewb Cube",precio:11.65,imagen:"./img/gancube/mg-skewb.jpg",id:10,marca:"gan"}
]

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let productos = JSON.parse(localStorage.getItem("productos")) || productosCatalogo.concat(productosDestacado);
const carrito = []