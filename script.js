/* Faça um programa para calcular o valor de viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por km;
5- Distância em km da viagem;

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
	const valorGasto = litrosConsumidos * precoEtanol;
	console.log(valorGasto.toFixed(2));
	
} else {
	const valorGasto = litrosConsumidos * precoGasolina;
	console.log(valorGasto.toFixed(2));
}