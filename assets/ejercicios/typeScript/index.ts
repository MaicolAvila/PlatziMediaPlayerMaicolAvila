//Interfaces
enum Color{
    Rojo = "Rojo",
    Azul = "Azul",
    Verde = "verde"
}

interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color;
}

let rect : Rectangulo = {
    ancho:4,
    alto:6,
    //color: Color.Rojo,  
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);


rect.toString = function () {
    return  this.color ? `Un reactangulo ${this.color}` : `UN recntangulo` 
};

console.log(rect.toString())