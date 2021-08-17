// const precioOriginal = 120;
// const descuento = 18;

// console.log({precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento});

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

function onClickPriceDiscount() {
    const inputPrice = Number(document.getElementById("InputPrice").value);
    const inputDiscount = Number(document.getElementById("InputDiscount").value);

    const finalPrice = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son $${finalPrice}`;
}