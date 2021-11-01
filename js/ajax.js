const URLGET = "https://jsonplaceholder.typicode.com/users"
//Agregamos un botón con jQuery
$("#lista-boton").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
  $.get(URLGET, function (respuesta, estado) {
    console.log(estado)
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("#lista").append(
          `<div>
            <h3>Id: ${dato.id}</h3>
            <h4>Nombre: ${dato.username}</h4>
            <p>Email: ${dato.email}</p>
          </div>`);
        if (dato.id == 5) {
        return
        }
      }  
    }
  });
});