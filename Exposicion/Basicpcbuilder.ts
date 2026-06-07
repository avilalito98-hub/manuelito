// ============================================================
// SECCIÓN 3: CONCRETE BUILDER BÁSICO
// Extiende Builder para una PC de oficina.
// No necesita sobreescribir setGPU ni setCooling
// porque el Builder base ya los ignora por defecto.
// ============================================================

import { Builder } from "./Builder"

export class BasicPCBuilder extends Builder {
  // Hereda: setCPU, setRAM, setStorage, getPC
  // setGPU y setCooling no hacen nada (heredado del Builder)
}