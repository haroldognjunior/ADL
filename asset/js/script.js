//definimos los valores de pesos chilenos y la moneda a qué iremos convertir
const pesosChilenos = document.querySelector("#dinero");
const monedaConversion = document.querySelector("#monedaCambio");
const mostrarValorConvertido = document.querySelector("#mostrarValorConvertido");
let valorIngresado;
let valorSeleccionado = monedaConversion.value;

// Obtiene el valor actual del input (lo que el usuario ha ingresado)
pesosChilenos.addEventListener("input", function () {
  // Asignamos el valor ingresado a la variable
  valorIngresado = pesosChilenos.value;
  return valorIngresado;
});

// Obtiene el valor actual del select mediante el evento 'change'
monedaConversion.addEventListener("change", function () {
  // Obtiene el valor actualmente seleccionado en el select
  valorSeleccionado = monedaConversion.value;

  // Hacer algo con el valor seleccionado
  return valorSeleccionado;
});

async function obtenerCambio() {
  //podemos escribirlo así
  //   return await fetch("https://mindicador.cl/api/").json();

  //consumimos de la API el objeto de la moneda para la conversión
  const res = await fetch("https://mindicador.cl/api/");
  const monedas = await res.json();

  //accedemos a la propiedad del valor que queremos
  const encontrarMoneda = monedas[valorSeleccionado];

  //calculamos el valor ingresado en el input con el valor de la cotización obtenido
  const valorConvertido = encontrarMoneda.valor * valorIngresado;

  //mostrar el valor convertido
  mostrarValorConvertido.innerHTML = `El valor convertido de ${encontrarMoneda.nombre} es de ${valorConvertido} CLP`;
}
