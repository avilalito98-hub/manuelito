# PC Builder Store — Patrón de Diseño Builder

## ¿Qué es el Patrón Builder?

El patrón Builder es un patrón de diseño creacional que permite construir objetos complejos paso a paso. En lugar de usar un constructor con muchos parámetros, se definen métodos separados para cada parte del objeto, lo que hace el código más legible y flexible.

Se usa cuando:
- Un objeto requiere muchos pasos para ser construido.
- Diferentes configuraciones del mismo objeto son necesarias.
- Se quiere separar la lógica de construcción del objeto final.

---

## Descripción del Proyecto

**PC Builder Store** es una aplicación de terminal interactiva que simula una tienda de ensamblaje de PCs. El usuario puede elegir entre construir una **PC Básica** (oficina) o una **PC Gamer**, ya sea con valores predefinidos o personalizando cada componente manualmente.

---

## Estructura del Proyecto

```
├── Pc.ts              # El Producto
├── Builder.ts         # Clase base del Builder
├── Basicpcbuilder.ts  # Concrete Builder — PC Básica
├── Gamerpcbuilder.ts  # Concrete Builder — PC Gamer
├── Pcdirector.ts      # El Director
├── Main.ts            # Cliente interactivo
├── tsconfig.json      # Configuración de TypeScript
└── package.json       # Dependencias del proyecto
```

---

## Aplicación del Patrón

### 1. Producto — `Pc.ts`
Es el objeto final que se construye. Contiene los campos de una PC:

```typescript
export class PC {
  cpu: string = ""
  ram: string = ""
  storage: string = ""
  gpu?: string       // Solo PC Gamer
  cooling?: string   // Solo PC Gamer

  mostrar(): void { ... }
}
```

### 2. Builder Base — `Builder.ts`
Define todos los pasos de construcción. Los métodos `setGPU` y `setCooling` están vacíos por defecto para que las subclases los sobreescriban si los necesitan. Todos los métodos retornan `this` para permitir encadenamiento.

```typescript
builder.setCPU("Intel i5").setRAM("16GB").setStorage("512GB").getPC()
```

### 3. Concrete Builders

**`BasicPCBuilder.ts`** — Hereda todo del Builder base sin modificar nada. No necesita GPU ni Cooling.

**`GamerPCBuilder.ts`** — Sobreescribe `setGPU` y `setCooling` para que sí asignen valores reales a la PC.

```typescript
// GamerPCBuilder sobreescribe los métodos opcionales
setGPU(gpu: string): this {
  this.pc.gpu = gpu
  return this
}
setCooling(cooling: string): this {
  this.pc.cooling = cooling
  return this
}
```

### 4. Director — `Pcdirector.ts`
Conoce los valores predefinidos y el orden de construcción. No le importa qué builder recibe, solo usa sus métodos.

```typescript
buildGamerPC(): PC {
  return this.builder
    .setCPU("Intel i9-13900K")
    .setRAM("32 GB DDR5")
    .setStorage("SSD NVMe 2TB")
    .setGPU("RTX 4090")
    .setCooling("Refrigeración líquida")
    .getPC()
}
```

### 5. Cliente — `Main.ts`
Interfaz interactiva en terminal. El usuario elige el tipo de PC y si quiere configuración automática (Director) o manual.

---

## Diagrama de Clases

```
         ┌─────────────┐
         │   Builder   │◄──────────────────┐
         │─────────────│                   │
         │ #pc: PC     │           ┌───────┴────────┐
         │─────────────│           │                │
         │ setCPU()    │  BasicPCBuilder    GamerPCBuilder
         │ setRAM()    │  (hereda todo)    (sobreescribe
         │ setStorage()│                    setGPU y
         │ setGPU()    │                    setCooling)
         │ setCooling()│
         │ getPC()     │
         └──────┬──────┘
                │ usa
         ┌──────▼──────┐        ┌─────────────┐
         │  PCDirector │        │     PC      │
         │─────────────│        │─────────────│
         │ buildBasic()│───────►│ cpu         │
         │ buildGamer()│        │ ram         │
         └─────────────┘        │ storage     │
                                │ gpu?        │
                                │ cooling?    │
                                │ mostrar()   │
                                └─────────────┘
```

---

## Instalación y Ejecución

### Requisitos
- Node.js
- npm

### Instalar dependencias

```bash
npm install
```

### Ejecutar el proyecto

 npx ts-node Main.ts


## Ejemplo de Uso


============================================
       Bienvenido a PC Builder Store
============================================

¿Qué tipo de PC deseas construir?
  1. PC Básica
  2. PC Gamer

Elige una opción (1 o 2): 2

¿Cómo deseas configurar tu PC?
  1. Configuración por defecto (Director)
  2. Personalizar componentes manualmente

Elige una opción (1 o 2): 1

============================================
=== Tu PC ===
CPU: Intel i9-13900K
RAM: 32 GB DDR5
Storage: SSD NVMe 2TB
GPU: RTX 4090
Cooling: Refrigeración líquida
============================================
```

---

## Tecnologías Usadas

- **TypeScript**
- **ts-node** — Ejecución directa de TypeScript
- **Node.js readline** — Interfaz de terminal interactiva