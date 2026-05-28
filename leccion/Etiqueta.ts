export class Etiqueta {
  private codigoBarras: string;
  private esFragil: boolean;

  constructor(codigoBarras: string, esFragil: boolean) {
    this.codigoBarras = codigoBarras;
    this.esFragil = esFragil;
  }

  obtenerAdvertencia(): string {
    return this.esFragil ? "¡CUIDADO: FRAGIL!" : "Paquete Estandar";
  }

  obtenerCodigo(): string {
    return this.codigoBarras;
  }
}