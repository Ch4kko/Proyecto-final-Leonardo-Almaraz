var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color= 'red';


function enviarFormulario(){
	console.log('Enviando Formulario...');

	var mensajesError = [];

	if (nombre.value === null || nombre.value === ''){
		mensajesError.push('Ingresa tu nombre');
}

	if (email.value === null || email.value === ''){
		mensajesError.push('Ingresa tu email');
}

	error.innerHTML =	mensajesError.join(', ');

	return false;
}