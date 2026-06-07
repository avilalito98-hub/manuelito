// ============================================================
// SECCIÓN 5: EL DIRECTOR
// Conoce el orden y los valores de construcción.
// Recibe cualquier Builder y produce la PC correspondiente.
// No sabe si el builder es Basic o Gamer, solo usa sus pasos.
// ============================================================

import { Builder } from "./Builder"
import { PC } from "./Pc"

export class PCDirector {
  constructor(private builder: Builder) {}

  buildBasicPC(): PC {
    return this.builder
      .setCPU("Intel i3")
      .setRAM("8 GB DDR4")
      .setStorage("HDD 1TB")
      .getPC()
  }

  buildGamerPC(): PC {
    return this.builder
      .setCPU("Intel i9-13900K")
      .setRAM("32 GB DDR5")
      .setStorage("SSD NVMe 2TB")
      .setGPU("RTX 4090")
      .setCooling("Refrigeración líquida")
      .getPC()
  }
}