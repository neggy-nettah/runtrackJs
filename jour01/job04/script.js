function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var annee = 2023;
  console.log(bisextile(annee)); // Affiche true
  