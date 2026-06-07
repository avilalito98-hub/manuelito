// ============================================================
// SECCIÓN 2: EL BUILDER
// Es el núcleo del patrón. Define los pasos para construir
// una PC. Cada método retorna PCBuilder para encadenarlos.
// Aquí es donde el patrón Builder vive y funciona.
// ============================================================

import { PC } from "./Pc"

export class Builder {
  // El producto que se va armando internamente
  protected pc: PC = new PC()

  // Cada paso asigna un componente y retorna this
  // para permitir encadenamiento: .setCPU().setRAM().getPC()
  setCPU(cpu: string): this {
    this.pc.cpu = cpu
    return this
  }

  setRAM(ram: string): this {
    this.pc.ram = ram
    return this
  }

  setStorage(storage: string): this {
    this.pc.storage = storage
    return this
  }

  // Por defecto estos pasos no hacen nada.
  // Los builders que los necesiten los sobreescriben.
  setGPU(_: string): this { return this }
  setCooling(_: string): this { return this }

  // Entrega la PC construida y reinicia el builder
  getPC(): PC {
    const resultado = this.pc
    this.pc = new PC()
    return resultado
  }
}