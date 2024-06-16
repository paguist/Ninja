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
  
  /* Prueba de uso
  const ninja1 = new Ninja("Unagi");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  ninja1.showStats();
   */

  // Tarea Super Ninja
  class Sensei extends Ninja {
    constructor(nombre) {
      super(nombre);
      this.salud = 200;
      this.velocidad = 10;
      this.fuerza = 10;
      this.sabiduría = 10;
    }
  
    speakWisdom() {
      this.drinkSake();
      console.log("Programar es 10% escribir código y 90% entender por qué no funciona.");
    }
  }
  
  // Prueba
  const superSensei = new Sensei("Master Unagi");
  superSensei.speakWisdom();
  superSensei.showStats();