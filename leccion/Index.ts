import { Vehiculo }  from "./Vehiculo";
import { Conductor } from "./Conductor";
import { Paquete }   from "./Paquete";

const furgoneta = new Vehiculo("ABC-1234", 1500);

const conductor = new Conductor("Carlos Mendoza", furgoneta);

const paquete = new Paquete(
  "Maria Garcia",
  "Av. Principal 456, Manta",
  "BAR-990",
  true
);

conductor.mostrarDatos();
console.log();
paquete.mostrarGuia();