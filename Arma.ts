// AGREGACIÓN: existe independientemente del héroe
export class Arma {
    nombre: string;
    danio: number;

    constructor(nombre: string, danio: number) {
        this.nombre = nombre;
        this.danio = danio;
    }
}