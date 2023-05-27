const readline = require('readline');

function calcularCodigos() {
  const nombres = [];
  const apellidosPaterno = [];
  const apellidosMaterno = [];
  const notas1 = [];
  const notas2 = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Ingrese los datos de los alumnos:\n', function (input) {
    const alumnos = input.split('\n');

    for (let i = 0; i < alumnos.length; i++) {
      const alumno = alumnos[i].split(',');

      nombres.push(alumno[0].trim());
      apellidosPaterno.push(alumno[1].trim());
      apellidosMaterno.push(alumno[2].trim());
      notas1.push(parseFloat(alumno[3].trim()));
      notas2.push(parseFloat(alumno[4].trim()));
    }

    const codigos = [];
    const promedios = [];
    let aprobados = 0;
    let desaprobados = 0;

    for (let i = 0; i < nombres.length; i++) {
      const codigo = apellidosPaterno[i].substring(0, 2) +
        apellidosMaterno[i].substring(1, 3) +
        nombres[i].substring(nombres[i].length - 2) +
        (i + 1);

      codigos.push(codigo);

      const promedio = (notas1[i] + notas2[i]) / 2;
      promedios.push(promedio);

      if (promedio >= 10.5) {
        aprobados++;
      } else {
        desaprobados++;
      }
    }

    console.log('Códigos y promedios de los alumnos:');
    for (let i = 0; i < codigos.length; i++) {
      console.log(codigos[i] + ' - ' + promedios[i]);
    }

    console.log('Cantidad de alumnos aprobados: ' + aprobados);
    console.log('Cantidad de alumnos desaprobados: ' + desaprobados);

    rl.close();
  });
}

calcularCodigos();