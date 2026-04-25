import { Arma } from './Arma';
import { Heroe } from './Heroe';

// Paso 1: Crear el arma "Espada de Madera"
const espada = new Arma("Espada de Madera", 20);

// Paso 2: Instanciar al Héroe
const heroe = new Heroe("Artu");

// Paso 3: Equipar el arma al héroe
heroe.equiparArma(espada);