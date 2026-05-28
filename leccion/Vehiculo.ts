export class Vehiculo {
  private placa: string;
  private capacidadKg: number;

  constructor(placa: string, capacidadKg: number) {
    this.placa = placa;
    this.capacidadKg = capacidadKg;
  }

  obtenerInfo(): string {
    return `Vehiculo [Placa: ${this.placa} | Capacidad: ${this.capacidadKg} kg]`;
  }
}