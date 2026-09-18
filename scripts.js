function convertirTemperatura() {
  let entrada;
  let celsius;

  // Bucle para solicitar y validar el número
  while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius (°C):");

    if (entrada === null) {
      alert("Operación cancelada.");
      return;
    }

    celsius = parseFloat(entrada);

    if (!isNaN(celsius) && entrada.trim() !== "") {
      break;
    } else {
      alert("Error: Por favor, ingresa un número válido.");
    }
  }

  // Fórmulas de conversión
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  // Impresión requerida en consola
  console.log(`Grados Kelvin: ${kelvin}`);
  console.log(`Grados Fahrenheit: ${fahrenheit}`);

  // Alerta de confirmación
  alert(
    `Resultados para ${celsius}°C:\n\nGrados Kelvin: ${kelvin}\nGrados Fahrenheit: ${fahrenheit}`,
  );
}

// Ejecución al cargar
convertirTemperatura();
