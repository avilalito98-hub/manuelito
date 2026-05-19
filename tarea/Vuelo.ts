import { PlanDeVuelo } from "./PlanVuelo";

export class Vuelo {
  private codigoVuelo: string;
  private planDeVuelo: PlanDeVuelo; // Composición

  constructor(codigoVuelo: string, ciudadOrigen: string, ciudadDestino: string) {
    this.codigoVuelo = codigoVuelo;
    // El Vuelo crea internamente su propio PlanDeVuelo (Composición)
    this.planDeVuelo = new PlanDeVuelo(ciudadOrigen, ciudadDestino);
  }

  public mostrarDetalleVuelo(): void {
    console.log(`✈  Vuelo: ${this.codigoVuelo} | Ruta: ${this.planDeVuelo.obtenerRuta()}`);
  }
}