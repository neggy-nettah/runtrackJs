function jourtravaille(date) {
    var joursFeries2020 = [
      new Date(2020, 0, 1),   // Jour de l'An
      new Date(2020, 3, 13),  // Lundi de Pâques
      new Date(2020, 4, 1),   // Fête du Travail
      new Date(2020, 4, 8),   // Victoire 1945
      new Date(2020, 5, 21),  // Fête de la Musique
      new Date(2020, 6, 14),  // Fête Nationale
      new Date(2020, 7, 15),  // Assomption
      new Date(2020, 10, 1),  // Toussaint
      new Date(2020, 11, 11), // Armistice
      new Date(2020, 11, 25)  // Noël
    ];
  
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();
  
    // Vérification si la date correspond à un jour férié
    for (var i = 0; i < joursFeries2020.length; i++) {
      if (date.getTime() === joursFeries2020[i].getTime()) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
        return;
      }
    }
  
    // Vérification si la date correspond à un week-end (samedi ou dimanche)
    var jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
      console.log("Non, le " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
      console.log("Oui, le " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
  }

  var dateTest = new Date(2020, 0, 1); // Date de test (1er janvier 2020)
jourtravaille(dateTest);
