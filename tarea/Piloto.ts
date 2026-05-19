import { Avion } from "./Avion";

export class Piloto {
  private nombre: string;
  private horasExperiencia: number;
  private avionAsignado: Avion; // Agregación

  constructor(nombre: string, horasExperiencia: number, avionAsignado: Avion) {
    this.nombre = nombre;
    this.horasExperiencia = horasExperiencia;
    // El Avion se inyecta desde afuera (existe independientemente)
    this.avionAsignado = avionAsignado;
  }

  public mostrarEstado(): void {
    console.log(
      `👨‍✈️  Piloto: ${this.nombre} | Experiencia: ${this.horasExperiencia} horas\n` +
      `   Avión asignado → ${this.avionAsignado.obtenerDetalle()}`
    );
  }
}