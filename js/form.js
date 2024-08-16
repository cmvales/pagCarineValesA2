function calcularFaixaEtaria(formulario) {
    let idades = [];
    let maiorIdade = 0;

    for (let i = 1; i <= 5; i++) {
        let idade = document.getElementById(`id${i}`).value;
        if (idade !== "") {
            idades.push(parseFloat(idade));
        }
    }

    let faixaEtaria1 = 0;
    let faixaEtaria2 = 0;
    let faixaEtaria3 = 0;

    for (let i = 0; i < idades.length; i++) {
        let idade = idades[i];

        if (idade <= 15) {
            faixaEtaria1++;
        } else if (idade >= 16 && idade <= 40) {
            faixaEtaria2++;
        } else if (idade > 40) {
            faixaEtaria3++;
        }

        if (maiorIdade < idade) {
            maiorIdade = idade;
        }
    }

    let resultado = `
        <p>Faixa Etária 1 ${faixaEtaria1} pessoa(s)</p>
        <p>Faixa Etária 2 ${faixaEtaria2} pessoa(s)</p>
        <p>Faixa Etária 3 ${faixaEtaria3} pessoa(s)</p>
        <p>Maior Idade ${maiorIdade} anos</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}