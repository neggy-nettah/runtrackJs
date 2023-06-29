function estNombrePremier(nombre) {
    if (nombre < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
      return nombre1 + nombre2;
    } else {
      return false;
    }
  }
  
var nombre1 = 17;
var nombre2 = 23;

var resultat = sommenombrespremiers(nombre1, nombre2);
if (resultat !== false) {
  console.log("La somme des nombres premiers est : " + resultat);
} else {
  console.log("Au moins un des nombres n'est pas premier.");
}
