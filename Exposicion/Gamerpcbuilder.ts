// ============================================================
// SECCIÓN 4: CONCRETE BUILDER GAMER
// Extiende Builder para una PC Gamer.
// Sobreescribe setGPU y setCooling para que sí asignen.
// La diferencia de comportamiento está encapsulada aquí.
// ============================================================

import { Builder } from "./Builder"

export class GamerPCBuilder extends Builder {
  // Sobreescribe setGPU para asignar la tarjeta gráfica
  setGPU(gpu: string): this {
    this.pc.gpu = gpu
    return this
  }

  // Sobreescribe setCooling para asignar el sistema de enfriamiento
  setCooling(cooling: string): this {
    this.pc.cooling = cooling
    return this
  }
}