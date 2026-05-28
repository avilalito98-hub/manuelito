import { Etiqueta } from "./Etiqueta";

export class Paquete {
  private destinatario: string;
  private direccion: string;
  private etiqueta: Etiqueta;

  constructor(
    destinatario: string,
    direccion: string,
    codigoBarras: string,
    esFragil: boolean
  ) {
    this.destinatario = destinatario;
    this.direccion = direccion;
    this.etiqueta = new Etiqueta(codigoBarras, esFragil);
  }

  mostrarGuia(): void {
    console.log("─────────────────────────────────────");
    console.log("         GUIA DE ENVIO - FastPack    ");
    console.log("─────────────────────────────────────");
    console.log(`  Destinatario : ${this.destinatario}`);
    console.log(`  Direccion    : ${this.direccion}`);
    console.log(`  Codigo       : ${this.etiqueta.obtenerCodigo()}`);
    console.log(`  Estado       : ${this.etiqueta.obtenerAdvertencia()}`);
    console.log("─────────────────────────────────────");
  }
}