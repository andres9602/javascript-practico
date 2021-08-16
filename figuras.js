// Código del cuadrado
console.group('Cuadrado');

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado) {
    return lado ** 2;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2.");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 9;
// const alturaTriangulo = Math.sqrt((ladoTriangulo1**2)-(baseTriangulo/2)**2);
// console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm y ${ladoTriangulo2} cm, la base mide ${baseTriangulo} cm, y la altura ${alturaTriangulo} cm.`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm.");

function alturaTriangulo(lado1, lado2, base) {
    if (lado1 === lado2) {
        const altura = Math.sqrt((lado1**2) - ((base/2)**2));
        return altura;
    } else {
        alert("Los lados deben ser iguales.");
    }
}

function areaTriangulo(altura, base) {
    return (base * altura) / 2;
} 
// console.log("El área del triángulo es: " + areaTriangulo + " cm^2.");

console.groupEnd();

// Código del círculo

console.group("Círculo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// console.log(`El radio del círculo es ${radioCirculo} cm, y el diámetro es ${diametroCirculo} cm.`);

function perimetroCirculo(radio) {
    return 2 * radio * Math.PI;
} 
// console.log(`El perímetro del círculo es: ${perimetroCirculo} cm.`);

function areaCirculo(radio) {
    return Math.PI * (radio**2);
}
// console.log(`El área del círculo es: ${areaCirculo} cm^2.`);

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("ladoTriangulo1").value);
    const lado2 = Number(document.getElementById("ladoTriangulo2").value);
    const base = Number(document.getElementById("baseTriangulo").value);
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = Number(document.getElementById("ladoTriangulo1").value);
    const lado2 = Number(document.getElementById("ladoTriangulo2").value);
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = alturaTriangulo(lado1, lado2, base);

    const area = areaTriangulo(altura, base);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}