import { Estadisticas } from './Estadistica';
import { Arma } from './Arma';

export class Heroe {
    nombre: string;
    cuerpo: Estadisticas;  // COMPOSICIÓN
    equipo: Arma | null;   // AGREGACIÓN

    constructor(nombre: string) {
        this.nombre = nombre;
        this.cuerpo = new Estadisticas(); // nace con el héroe
        this.equipo = null;               // sin arma al inicio
    }

    equiparArma(armaRecogida: Arma): void {
        this.equipo = armaRecogida;
        console.log(`${this.nombre} ha equipado ${armaRecogida.nombre}`);
    }
}

// --- Reto Práctico ---
const espada = new Arma("Espada de Madera", 20);
const heroe = new Heroe("Artu");
heroe.equiparArma(espada);