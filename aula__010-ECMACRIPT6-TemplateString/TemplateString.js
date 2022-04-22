const valores = ['9', '7', '20'];

const acimaDeDez = valores
    .filter(valor => valor > 10)
    .map((valor) => `${valor}, 00 MNZ`);
console.log(acimaDeDez);