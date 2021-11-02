import './logica2';

tienda.addClass("none");
formProducto.addClass("none");
btnRegistro.addClass("none");
inputNombre.addClass("none");
inputApellido.addClass("none");
inputEdad.addClass("none");
cerrarSesion.addClass("none");
linkRegresar.addClass("none");

const mostrarRegistro = () => {
	btnRegistro.removeClass("none");
	linkRegistro.addClass("none");
	btnIngresar.addClass("none");
  inputNombre.removeClass("none");
  inputApellido.removeClass("none");
  inputEdad.removeClass("none");
	linkRegresar.removeClass("none");
}
const ocultarRegistro = () => {
	btnRegistro.toggleClass("none");
	linkRegistro.toggleClass("none");
	btnIngresar.toggleClass("none");
  inputNombre.toggleClass("none");
  inputApellido.toggleClass("none");
  inputEdad.toggleClass("none");
	linkRegresar.toggleClass("none");
}
const crearUsuario = () => {

	let nombre = inputNombre.val();
    let apellido = inputApellido.val();
	let clave = inputClave.val();
    let edad = inputEdad.val();
    let mail = inputMail.val();
	let tipo = (usuarios == "")? "admin" : "usuario";


	if (inputNombre.val().length < 4) {
		validaciones.innerHTML = "<p>El usuario debe tener 4 caracteres o más</p>"
		validaciones.style.color = "red"

		if (inputClave.length < 4) {

			validaciones.innerHTML += "<p>La clave debe tener 4 caracteres o más</p>"
		}

	} else if (inputClave.val().length < 4) {

		validaciones.innerHTML = "La clave debe tener 4 caracteres o más"
		validaciones.style.color = "red"

	} else {
		const usuario = new Usuario(nombre,apellido,mail,clave,edad,tipo)

		usuarios.push(usuario)
		validaciones.style.color = "green"
		localStorage.setItem("usuarios", JSON.stringify(usuarios))
		formSesion.trigger("reset");//inputNombre.val("");//inputApellido.val("");//inputClave.val("");//inputEdad.val("");//inputMail.val("");
		validaciones.innerHTML = "Usuario registrado con éxito"
        
        inputNombre.addClass("none");
        inputApellido.addClass("none");
        inputEdad.addClass("none");
		btnIngresar.removeClass("none")
		btnRegistro.addClass("none")
		linkRegistro.removeClass("none")

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
                usuario.addClass("none");
                formProducto.removeClass("none");
				cerrarSesion.removeClass("none");
				document.getElementById("titulo").innerHTML = `<h1>Bienvenidx ${chequeoUsuario.nombre.toUpperCase()} </h1>`
			} else {
				document.getElementById("titulo").innerHTML = `Bienvenidx ${chequeoUsuario.nombre.toUpperCase()}`
				renderizarTienda()
				cerrarSesion.removeClass("none");
			}
		} else {
			validaciones.innerHTML = "La clave ingresada es incorrecta"
			validaciones.style.color = "red"
		}
	} else {
		validaciones.innerHTML = "El usuario no esta registrado"
		validaciones.style.color = "red"
	}
	formSesion.trigger("reset");

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
  formProducto.addClass("none");
  tienda.addClass("none");
  cerrarSesion.addClass("none");
	document.getElementById("titulo").innerHTML = `<h1>Desafio 12</h1>`
	localStorage.removeItem("usuarioLogueado");
}

$(function() {
	linkRegresar.click((e) => {
		e.preventDefault();
		ocultarRegistro();
	});
	
	linkRegistro.click((e) => {
		e.preventDefault();
		mostrarRegistro();
	});
	
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


