// Código del cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2.");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 9;
const alturaTriangulo = Math.sqrt((ladoTriangulo1**2)-(baseTriangulo/2)**2);
console.log(
    `Los lados del triangulo miden ${ladoTriangulo1} cm y ${ladoTriangulo2} cm, la base mide ${baseTriangulo} cm, y la altura ${alturaTriangulo} cm.`
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2
console.log("El área del triángulo es: " + areaTriangulo + " cm^2.");

console.groupEnd();

// Código del círculo

console.group("Círculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
console.log(`El radio del círculo es ${radioCirculo} cm, y el diámetro es ${diametroCirculo} cm.`);

const perimetroCirculo = PI * radioCirculo * 2;
console.log(`El perímetro del círculo es: ${perimetroCirculo} cm.`);

const areaCirculo = PI * (radioCirculo**2);
console.log(`El área del círculo es: ${areaCirculo} cm^2.`);

console.groupEnd();