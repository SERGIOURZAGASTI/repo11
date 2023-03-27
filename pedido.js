function realizarPedido() {
	// Obtener valor del menú elegido
	var menu = document.getElementById("menu").value;

	
	var respuesta = "";

	
	switch (menu) {
		case "carne":
			respuesta = "Ha elegido Carne. Como bebida, se le ofrecerá vino tinto.";
			break;
		case "pescado":
			respuesta = "Ha elegido Pescado. Como bebida, se le ofrecerá vino blanco.";
			break;
		case "verdura":
			respuesta = "Ha elegido Verdura. Como bebida, se le ofrecerá agua.";
			break;
		default:
			respuesta = "Por favor, elija carne, pescado o verdura.";
			break;
	}

	// Muestra la respuesta en la página
	document.getElementById("respuesta").innerHTML = respuesta;

	
	var opciones = ["Opción 1", "Opción 2", "Opción 3"];

	
	for (var i = 0; i < opciones.length; i++) {
		console.log(opciones[i]);
	}
}