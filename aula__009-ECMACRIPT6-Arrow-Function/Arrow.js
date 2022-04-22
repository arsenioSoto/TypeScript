const valores = ['9', '7', '20'];

//const valoresFormatados = valores.map(function(valor) {
//  return valor + ',00' + ' MNZ';
//});

//const valoresFormatados = valores.map((valor) => valor + ',00' + ' MNZ');

//console.log(valoresFormatados);

const acimaDeDez = valores
    .filter(valor => valor > 10)
    .map((valor) => valor + ',00' + ' MNZ');
console.log(acimaDeDez);