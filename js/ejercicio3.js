const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let A = 0;
let B = 0;
let C = 0;

function solicitarValores() {
    rl.question('Ingrese el primer valor: ', (inputA) => {
        A = parseInt(inputA);
        rl.question('Ingrese el segundo valor: ', (inputB) => {
            B = parseInt(inputB);
            rl.question('Ingrese el tercer valor: ', (inputC) => {
                C = parseInt(inputC);
                if (A === B || A === C || B === C) {
                    console.log('Los valores deben ser distintos. Vuelva a ingresarlos.\n');
                    solicitarValores();
                } else {
                    if (A > B && A > C) {
                        console.log(A + ' es el mayor.');
                    }
                    if (B > A && B > C) {
                        console.log(B + ' es el mayor.');
                    } if (C > A && C > B) {
                        console.log(C + ' es el mayor.')
                    }
                    rl.close();
                }
            });
        });
    });
}

function compararValores() {
    const inputA = document.getElementById('valorA').value;
    const A = parseInt(inputA);
    const inputB = document.getElementById('valorB').value;
    const B = parseInt(inputB);
    const inputC = document.getElementById('valorC').value;
    const C = parseInt(inputC);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        document.getElementById('resultado').textContent = 'Ingrese valores numéricos válidos.';
        return;
    }

    if (A === B || A === C || B === C) {
        document.getElementById('resultado').textContent = 'Los valores deben ser distintos. Vuelva a ingresarlos.';
        document.getElementById('valorA').value = '';
        document.getElementById('valorB').value = '';
        document.getElementById('valorC').value = '';
    }

    if (A > B && A > C) {
        document.getElementById('resultado').textContent = A + ' es el mayor.';
    }
    if (B > A && B > C) {
        document.getElementById('resultado').textContent = B + ' es el mayor.';
    }
    if (C > A && C > B) {
        document.getElementById('resultado').textContent = C + ' es el mayor.';
    }
}

solicitarValores();