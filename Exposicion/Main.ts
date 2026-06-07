// ============================================================
// SECCIÓN 6: EL CLIENTE (Main)
// Interactivo: el usuario elige el tipo de PC y el modo
// de construcción desde la terminal.
// ============================================================

import * as readline from "readline"
import { BasicPCBuilder } from "./Basicpcbuilder"
import { GamerPCBuilder } from "./Gamerpcbuilder"
import { PCDirector } from "./Pcdirector"
import { Builder } from "./Builder"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function preguntar(pregunta: string): Promise<string> {
  return new Promise(resolve => rl.question(pregunta, resolve))
}

async function main() {
  console.log("============================================")
  console.log("       Bienvenido a PC Builder Store        ")
  console.log("============================================\n")

  // ── PASO 1: elegir tipo de PC ──
  console.log("¿Qué tipo de PC deseas construir?")
  console.log("  1. PC Básica")
  console.log("  2. PC Gamer")

  let tipo = ""
  while (tipo !== "1" && tipo !== "2") {
    tipo = await preguntar("\nElige una opción (1 o 2): ")
    if (tipo !== "1" && tipo !== "2") console.log("  Opción inválida.")
  }

  const builder: Builder = tipo === "1" ? new BasicPCBuilder() : new GamerPCBuilder()
  const director = new PCDirector(builder)

  // ── PASO 2: elegir modo de construcción ──
  console.log("\n¿Cómo deseas configurar tu PC?")
  console.log("  1. Configuración por defecto (Director)")
  console.log("  2. Personalizar componentes manualmente")

  let modo = ""
  while (modo !== "1" && modo !== "2") {
    modo = await preguntar("\nElige una opción (1 o 2): ")
    if (modo !== "1" && modo !== "2") console.log("  Opción inválida.")
  }

  // ── PASO 3: construir según la elección ──
  if (modo === "1") {
    // El Director construye con valores predefinidos
    const pc = tipo === "1" ? director.buildBasicPC() : director.buildGamerPC()
    console.log("\n============================================")
    pc.mostrar()
    console.log("============================================\n")

  } else {
    // El usuario elige cada componente manualmente
    console.log("\n--- Personaliza tu PC ---")

    const cpu     = await preguntar("CPU (ej: Intel i9-13900K): ")
    const ram     = await preguntar("RAM (ej: 32 GB DDR5): ")
    const storage = await preguntar("Storage (ej: SSD NVMe 2TB): ")

    builder.setCPU(cpu).setRAM(ram).setStorage(storage)

    if (tipo === "2") {
      const gpu     = await preguntar("GPU (ej: RTX 4090): ")
      const cooling = await preguntar("Cooling (ej: Refrigeración líquida): ")
      builder.setGPU(gpu).setCooling(cooling)
    }

    const pc = builder.getPC()
    console.log("\n============================================")
    pc.mostrar()
    console.log("============================================\n")
  }

  rl.close()
}

main()