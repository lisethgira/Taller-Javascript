const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = 0;
let Suma = 0;

rl.question('Ingrese un número: ', function (numero) {
    N = 0;
    Suma = 0;

    function calcularSumatoria() {
        N = N + 1;
        Suma = Suma + N;

        if (N === numero) {
            console.log('La sumatoria de los números del 1 al ' + numero + ' es: ' + Suma);
            rl.close();
        } else {
            N = N + 1;
            Suma = Suma + N;
        }
    }

    calcularSumatoria();
});