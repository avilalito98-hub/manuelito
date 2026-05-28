import { Vehiculo } from "./Vehiculo";

export class Conductor {
  private nombre: string;
  private entregasRealizadas: number;
  private vehiculo: Vehiculo;

  constructor(nombre: string, vehiculo: Vehiculo) {
    this.nombre = nombre;
    this.vehiculo = vehiculo;
    this.entregasRealizadas = 0;
  }

  mostrarDatos(): void {
    console.log("─────────────────────────────────────");
    console.log("         DATOS DEL CONDUCTOR         ");
    console.log("─────────────────────────────────────");
    console.log(`  Conductor    : ${this.nombre}`);
    console.log(`  Entregas     : ${this.entregasRealizadas}`);
    console.log(`  ${this.vehiculo.obtenerInfo()}`);
    console.log("─────────────────────────────────────");
  }
}