tienda.addClass("none");
usuario.addClass("none");
cerrarSesion.addClass("none");

const crearUsuario = () => {
	let username = inputUserName[0].value;
	let clave = inputClave[1].value;
  let mail = inputMail[1].value;
	let tipo = (usuarios == "")? "admin" : "usuario";

  for (const user of usuarios) {
    user.username == username
    user.mail == mail
  }

	if (clave.length < 4) {
		console.log(clave);

	} else {
		const usuario = new Usuario(mail,clave,username,tipo)

		usuarios.push(usuario)
		validaciones.style.color = "green"
		localStorage.setItem("usuarios", JSON.stringify(usuarios))
		formRegister.trigger("reset");
		setTimeout(() => {
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
	cerrarSesion.click((e)=>{	
		e.preventDefault();
		cerrarSesionFunc();
	});
})


