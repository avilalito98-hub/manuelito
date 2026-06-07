// ============================================================
// SECCIÓN 1: EL PRODUCTO
// Es el objeto final que queremos construir.
// ============================================================

export class PC {
  cpu: string = ""
  ram: string = ""
  storage: string = ""
  gpu?: string        // opcional: solo la PC gamer la tiene
  cooling?: string    // opcional: solo la PC gamer la tiene

  mostrar(): void {
    console.log("=== Tu PC ===")
    console.log("CPU:", this.cpu)
    console.log("RAM:", this.ram)
    console.log("Storage:", this.storage)
    if (this.gpu)     console.log("GPU:", this.gpu)
    if (this.cooling) console.log("Cooling:", this.cooling)
  }
}