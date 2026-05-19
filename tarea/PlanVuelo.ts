export class PlanDeVuelo {
  private ciudadOrigen: string;
  private ciudadDestino: string;

  constructor(ciudadOrigen: string, ciudadDestino: string) {
    this.ciudadOrigen = ciudadOrigen;
    this.ciudadDestino = ciudadDestino;
  }

  public obtenerRuta(): string {
    return `${this.ciudadOrigen} -> ${this.ciudadDestino}`;
  }
}