// Tarea Ninja 
class Ninja {
    constructor(nombre) {
      this.nombre = nombre;
      this.salud = 100;
      this.velocidad = 3;
      this.fuerza = 3;
    }
  
    sayName() {
      console.log(`El nombre del ninja es ${this.nombre}`);
    }
  
    showStats() {
      console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
  
    drinkSake() {
      this.salud += 10;
      console.log(`${this.nombre} bebió sake y ahora tiene ${this.salud} de salud`);
    }
  }
  
  // Prueba de uso
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  ninja1.showStats();
  