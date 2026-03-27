const PI = 3.14159;

export class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    perimetro() {
        return 2 * PI * this.raio;
    }
    area() {
        // return PI * this.raio ** 2;
        return Math.PI * Math.pow(this.raio, 2);
    }
}