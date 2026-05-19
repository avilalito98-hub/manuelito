export class Avion {
  private matricula: string;
  private modelo: string;

  constructor(matricula: string, modelo: string) {
    this.matricula = matricula;
    this.modelo = modelo;
  }

  public obtenerDetalle(): string {
    return `Modelo: ${this.modelo} | Matrícula: ${this.matricula}`;
  }
}