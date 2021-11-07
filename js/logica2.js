const desplegarMenu = () => {
	$("body").toggleClass("mobile-toggle");
}
const desplegarCarrito = () => {
	$("body").toggleClass("mobile-cart");
}

const removerDarkWindow = () => {
	$("body").removeClass("mobile-cart");
	$("body").removeClass("mobile-toggle");
}

const agregarCarrito = (producto) => {
	desplegarCarrito();
}

const listaProductos = (productos,contenedor) => {
	if(productos != ""){
		for (const producto of productos) {
			$(contenedor).append(`
			<div class="producto_item">
				<img src="${producto.imagen}" alt="img-${producto.id}">
				<div class="prod">
					<span class="prod_price">$${producto.precio}</span>
					<p class="prod_name">${producto.nombre}</p>
					<button class="prod_button agregar" id="carrito-${producto.id}" type="button">Comprar</button>
				</div>
			</div>`);
		}
	}
}
listaProductos(productosInicio,".destacado");


menu.click((e) => {
	e.preventDefault();
	desplegarMenu();
});
cart.click((e) => {
	e.preventDefault();
	desplegarCarrito();
});
darkWindow.click((e) => {
	e.preventDefault();
	removerDarkWindow();
})
agregar.click((e) => {
	e.preventDefault();
	agregarCarrito(e.target.id);
});