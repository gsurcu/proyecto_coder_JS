tienda.addClass("none");
usuario.addClass("none");
cerrarSesion.addClass("none");

const crearUsuario = () => {

	let clave = inputClave[1].value;
    let mail = inputMail[1].value;
	let tipo = (usuarios == "")? "admin" : "usuario";



	if (clave.length < 4) {
		console.log(clave);
		validaciones.innerHTML = "La clave debe tener 4 caracteres o más"
		validaciones.style.color = "red"

	} else {
		const usuario = new Usuario(mail,clave,tipo)

		usuarios.push(usuario)
		validaciones.style.color = "green"
		localStorage.setItem("usuarios", JSON.stringify(usuarios))
		formRegister.trigger("reset");
		validaciones.innerHTML = "Usuario registrado con éxito"

		setTimeout(() => {
			validaciones.innerHTML = ""
		}, 2000
		)
	}
}
const login = (mailUsuario,claveUsuario) => {
	const chequeoUsuario = usuarios.find(usuario => usuario.mail === mailUsuario)

	if (chequeoUsuario) {
		validaciones.innerHTML = ""
		if (claveUsuario === chequeoUsuario.clave) {
			localStorage.setItem("usuarioLogueado",JSON.stringify(chequeoUsuario))
			
			if (chequeoUsuario.tipo == "admin") {
				completarSelect()
                formulario.addClass("none");
				cerrarSesion.removeClass("none");
				document.getElementById("titulo").innerHTML = `<h2>Bienvenidx ${chequeoUsuario.mail.toUpperCase()} </h2>`
			} else {
				document.getElementById("titulo").innerHTML = `Bienvenidx ${chequeoUsuario.mail.toUpperCase()}`
				renderizarTienda()
				cerrarSesion.removeClass("none");
				tienda.removeClass("none");
				usuario.removeClass("none");
			}
		} else {
			validaciones.innerHTML = "La clave ingresada es incorrecta"
			validaciones.style.color = "red"
		}
	} else {
		validaciones.innerHTML = "El usuario no esta registrado"
		validaciones.style.color = "red"
	}
	formLogin.trigger("reset");
}
const completarSelect = () => {
	selectEliminarP.innerHTML = ""
	
	if(productos != ""){
		for (let producto of productos) {
			let option = $("<option>", {
				value: producto.nombre,
				text: producto.nombre
			})
		selectEliminarP.append(option)
		}
		formProductoEliminar.removeClass("none");
	}else{
		formProductoEliminar.addClass("none");
	}
}
const renderizarTienda = () => {
    tienda.removeClass("none");
	usuario.addClass("none");
	if (productos != "") {
		for (const producto of productos) {
			tienda.append(`
			<div>
				<h4>${producto.nombre}</h4>
				<p> ${producto.precio}</p>
				<button id="${producto.nombre}">Comprar</button>
			</div>`) 

			document.getElementById(producto.nombre).addEventListener("click",function(e){
				let productoHtml = document.getElementById(e.target.id).parentElement 
				
				let producto = new Producto(productoHtml.childNodes[1].textContent,productoHtml.childNodes[3].textContent)
				carrito.push(producto)
			})
		}
	} else { 
		tienda.innerHTML += "Tienda en construcción, disculpe las molestias"
	}
}
const agregarProducto = () => {
	let nombreProducto = inputAgregarN.val()
	let precioProducto = inputAgregarP.val()
	let nuevoProducto = new Producto(nombreProducto, precioProducto)
	productos.push(nuevoProducto)
    
	localStorage.setItem("productos", JSON.stringify(productos))

	inputAgregarN.val("");
	inputAgregarP.val("");
	completarSelect()

	validaciones.innerHTML = "Producto añadido con éxito"	
	validaciones.style.color = "green"
	setTimeout(()=>{
		validaciones.innerHTML = ""
		
	},2000)

}
const eliminarProducto = () => {
	let nombreProducto = selectEliminarP.val();

	productos = productos.filter(producto => producto.nombre != nombreProducto)
	localStorage.setItem("productos", JSON.stringify(productos))
	
	validaciones.style.color = "green"
	validaciones.innerHTML = "Producto eliminado con éxito"
	
	setTimeout(()=>{
		validaciones.innerHTML = ""
		completarSelect()
	},2000)

}
const cerrarSesionFunc = ()=>{
	usuario.removeClass("none");
	tienda.addClass("none");
	cerrarSesion.addClass("none");
	document.getElementById("titulo").innerHTML = `<h1>Desafio 12</h1>`
	localStorage.removeItem("usuarioLogueado");
}

$(function() {
	btnRegistro.click((e) => {
		e.preventDefault();
		crearUsuario();
	});
	
	btnIngresar.click((e) => {
		e.preventDefault();
		login(inputMail.val(),inputClave.val());
	});
	
	btnEliminarProducto.click((e) => {
		e.preventDefault();
		eliminarProducto();
	});
	
	btnAgregarProducto.click((e) => {
		e.preventDefault();
		agregarProducto();
	});
	
	cerrarSesion.click((e)=>{	
		e.preventDefault();
		cerrarSesionFunc();
	});
})


