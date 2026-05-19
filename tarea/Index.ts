import { Avion } from "./Avion";
import { Piloto } from "./Piloto";
import { Vuelo } from "./Vuelo";

console.log("===========================================");
console.log("   SISTEMA DE GESTIÓN DE VUELOS AEROTECH  ");
console.log("===========================================\n");

// 1. Instanciar un Avion de forma independiente
const avion1 = new Avion("HC-BXQ", "Boeing 737");

// 2. Instanciar un Piloto inyectándole el avión (Agregación)
const piloto1 = new Piloto("Carlos Mendoza", 4500, avion1);

// 3. Instanciar un Vuelo — crea su PlanDeVuelo internamente (Composición)
const vuelo1 = new Vuelo("AR-201", "UIO", "MEC");

// 4. Imprimir estado del piloto y detalle del vuelo
piloto1.mostrarEstado();
console.log();
vuelo1.mostrarDetalleVuelo();

console.log("\n===========================================");