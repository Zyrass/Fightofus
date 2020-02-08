function traitementArmures( name ) {

  // Data pour le résultat final
  let statArmure = [];

  // Condition
  if ( name === capeMeulouSelected ) {
    statVitalityArmor.innerHTML      = capeMeulou.vitality;
    statStrongArmor.innerHTML        = capeMeulou.strong;
    statSagessArmor.innerHTML        = capeMeulou.sagess;
    statIntelligenceArmor.innerHTML  = capeMeulou.intelligence;
    statLuckyArmor.innerHTML         = capeMeulou.lucky;
    statAgilityArmor.innerHTML       = capeMeulou.agility;

    capeMeulouSelected.style.filter         = "grayscale(0%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeOgivolSelected.style.filter         = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    
    if ( armor.classList.contains("armor_two") ) {
      armor.classList.remove("armor_two");
    } 
    if ( armor.classList.contains("armor_three") ) {
      armor.classList.remove("armor_three");
    } 
    if ( armor.classList.contains("armor_four") ) {
      armor.classList.remove("armor_four");
    }
    if ( armor.classList.contains("armor_five") ) {
      armor.classList.remove("armor_five");
    }
    if ( armor.classList.contains("armor_six") ) {
      armor.classList.remove("armor_six");
    }

    armor.classList.add("armor_one");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( capeMeulou.vitality );
      statArmure.push( capeMeulou.strong );
      statArmure.push( capeMeulou.sagess );
      statArmure.push( capeMeulou.intelligence );
      statArmure.push( capeMeulou.lucky );
      statArmure.push( capeMeulou.agility );

      console.log( "statArmure Cape du Meulou", statArmure );
    }
    
  } 
  
  if ( name === voileDEncreSelected ) {
    
    statVitalityArmor.innerHTML      = voileDEncre.vitality;
    statStrongArmor.innerHTML        = voileDEncre.strong;
    statSagessArmor.innerHTML        = voileDEncre.sagess;
    statIntelligenceArmor.innerHTML  = voileDEncre.intelligence;
    statLuckyArmor.innerHTML         = voileDEncre.lucky;
    statAgilityArmor.innerHTML       = voileDEncre.agility;

    capeMeulouSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(0%)";
    capeOgivolSelected.style.filter         = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    
    if ( armor.classList.contains("armor_one") ) {
      armor.classList.remove("armor_one");
    } 
    if ( armor.classList.contains("armor_three") ) {
      armor.classList.remove("armor_three");
    } 
    if ( armor.classList.contains("armor_four") ) {
      armor.classList.remove("armor_four");
    }
    if ( armor.classList.contains("armor_five") ) {
      armor.classList.remove("armor_five");
    }
    if ( armor.classList.contains("armor_six") ) {
      armor.classList.remove("armor_six");
    }

    armor.classList.add("armor_two");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( voileDEncre.vitality );
      statArmure.push( voileDEncre.strong );
      statArmure.push( voileDEncre.sagess );
      statArmure.push( voileDEncre.intelligence );
      statArmure.push( voileDEncre.lucky );
      statArmure.push( voileDEncre.agility );

      console.log( "statArmure Voile d'Encre", statArmure );
    }

  } 

  if ( name === capeOgivolSelected ) {

    statVitalityArmor.innerHTML      = capeOgivol.vitality;
    statStrongArmor.innerHTML        = capeOgivol.strong;
    statSagessArmor.innerHTML        = capeOgivol.sagess;
    statIntelligenceArmor.innerHTML  = capeOgivol.intelligence;
    statLuckyArmor.innerHTML         = capeOgivol.lucky;
    statAgilityArmor.innerHTML       = capeOgivol.agility;

    capeMeulouSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeOgivolSelected.style.filter         = "grayscale(0%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    
    if ( armor.classList.contains("armor_one") ) {
      armor.classList.remove("armor_one");
    } 
    if ( armor.classList.contains("armor_two") ) {
      armor.classList.remove("armor_two");
    } 
    if ( armor.classList.contains("armor_four") ) {
      armor.classList.remove("armor_four");
    }
    if ( armor.classList.contains("armor_five") ) {
      armor.classList.remove("armor_five");
    }
    if ( armor.classList.contains("armor_six") ) {
      armor.classList.remove("armor_six");
    }

    armor.classList.add("armor_three");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( capeOgivol.vitality );
      statArmure.push( capeOgivol.strong );
      statArmure.push( capeOgivol.sagess );
      statArmure.push( capeOgivol.intelligence );
      statArmure.push( capeOgivol.lucky );
      statArmure.push( capeOgivol.agility );

      console.log( "statArmure Cape Ogivol", statArmure );
    }

  }
  
  if ( name === corbacapeMastralisSelected ) {

    statVitalityArmor.innerHTML      = corbacapeMastralis.vitality;
    statStrongArmor.innerHTML        = corbacapeMastralis.strong;
    statSagessArmor.innerHTML        = corbacapeMastralis.sagess;
    statIntelligenceArmor.innerHTML  = corbacapeMastralis.intelligence;
    statLuckyArmor.innerHTML         = corbacapeMastralis.lucky;
    statAgilityArmor.innerHTML       = corbacapeMastralis.agility;

    capeMeulouSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeOgivolSelected.style.filter         = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(0%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    
    if ( armor.classList.contains("armor_one") ) {
      armor.classList.remove("armor_one");
    } 
    if ( armor.classList.contains("armor_two") ) {
      armor.classList.remove("armor_two");
    } 
    if ( armor.classList.contains("armor_three") ) {
      armor.classList.remove("armor_three");
    }
    if ( armor.classList.contains("armor_five") ) {
      armor.classList.remove("armor_five");
    }
    if ( armor.classList.contains("armor_six") ) {
      armor.classList.remove("armor_six");
    }

    armor.classList.add("armor_four");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( corbacapeMastralis.vitality );
      statArmure.push( corbacapeMastralis.strong );
      statArmure.push( corbacapeMastralis.sagess );
      statArmure.push( corbacapeMastralis.intelligence );
      statArmure.push( corbacapeMastralis.lucky );
      statArmure.push( corbacapeMastralis.agility );

      console.log( "statArmure Corbacape Mastralis", statArmure );
    }

  } 
  
  if ( name === capeCoeurSaignantSelected ) {

    statVitalityArmor.innerHTML      = capeCoeurSaignant.vitality;
    statStrongArmor.innerHTML        = capeCoeurSaignant.strong;
    statSagessArmor.innerHTML        = capeCoeurSaignant.sagess;
    statIntelligenceArmor.innerHTML  = capeCoeurSaignant.intelligence;
    statLuckyArmor.innerHTML         = capeCoeurSaignant.lucky;
    statAgilityArmor.innerHTML       = capeCoeurSaignant.agility;

    capeMeulouSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeOgivolSelected.style.filter         = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(0%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    
    if ( armor.classList.contains("armor_one") ) {
      armor.classList.remove("armor_one");
    } 
    if ( armor.classList.contains("armor_two") ) {
      armor.classList.remove("armor_two");
    } 
    if ( armor.classList.contains("armor_three") ) {
      armor.classList.remove("armor_three");
    }
    if ( armor.classList.contains("armor_four") ) {
      armor.classList.remove("armor_four");
    }
    if ( armor.classList.contains("armor_six") ) {
      armor.classList.remove("armor_six");
    }

    armor.classList.add("armor_five");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( capeCoeurSaignant.vitality );
      statArmure.push( capeCoeurSaignant.strong );
      statArmure.push( capeCoeurSaignant.sagess );
      statArmure.push( capeCoeurSaignant.intelligence );
      statArmure.push( capeCoeurSaignant.lucky );
      statArmure.push( capeCoeurSaignant.agility );

      console.log( "statArmure Cape du Coeur Saignant", statArmure );
    }

  } 
  
  if ( name === ankhapeSelected ) {

    statVitalityArmor.innerHTML      = ankhape.vitality;
    statStrongArmor.innerHTML        = ankhape.strong;
    statSagessArmor.innerHTML        = ankhape.sagess;
    statIntelligenceArmor.innerHTML  = ankhape.intelligence;
    statLuckyArmor.innerHTML         = ankhape.lucky;
    statAgilityArmor.innerHTML       = ankhape.agility;

    capeMeulouSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeOgivolSelected.style.filter         = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(0%)";
    
    if ( armor.classList.contains("armor_one") ) {
      armor.classList.remove("armor_one");
    } 
    if ( armor.classList.contains("armor_two") ) {
      armor.classList.remove("armor_two");
    } 
    if ( armor.classList.contains("armor_three") ) {
      armor.classList.remove("armor_three");
    }
    if ( armor.classList.contains("armor_four") ) {
      armor.classList.remove("armor_four");
    }
    if ( armor.classList.contains("armor_five") ) {
      armor.classList.remove("armor_five");
    }

    armor.classList.add("armor_six");
    armor.style.filter = "grayscale(0%)";

    if ( statArmure.length > 0 ) {
      statArmure = [];
    } else {

      statArmure.push( ankhape.vitality );
      statArmure.push( ankhape.strong );
      statArmure.push( ankhape.sagess );
      statArmure.push( ankhape.intelligence );
      statArmure.push( ankhape.lucky );
      statArmure.push( ankhape.agility );

      console.log( "statArmure Ankhape", statArmure );
    }
  }
}

function chooseArmor( armureSelectionne ) {
  /**
   * -------------------------------------------------------------------------- 
   * SADIDA
   * -------------------------------------------------------------------------- */
  if ( sadidaSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulou.name );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };

  /**
   * -------------------------------------------------------------------------- 
   * XELOR
   * -------------------------------------------------------------------------- */
  if ( xelorSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulouSelected );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };

  /**
   * -------------------------------------------------------------------------- 
   * ENUTROF
   * -------------------------------------------------------------------------- */
  if ( enuSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulouSelected );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };

  /**
   * -------------------------------------------------------------------------- 
   * ENIRIPSA
   * -------------------------------------------------------------------------- */
  if ( eniSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulouSelected );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };

  /**
   * -------------------------------------------------------------------------- 
   * CRA
   * -------------------------------------------------------------------------- */
  if ( craSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulouSelected );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };

  /**
   * -------------------------------------------------------------------------- 
   * FECA
   * -------------------------------------------------------------------------- */
  if ( fecaSelected ) {
    if ( armureSelectionne === capeMeulouSelected) {
      traitementArmures( capeMeulouSelected );
    }
    if ( armureSelectionne === voileDEncreSelected) {
      traitementArmures( voileDEncreSelected );
    } 
    if ( armureSelectionne === capeOgivolSelected) {
      traitementArmures( capeOgivolSelected );
    } 
    if ( armureSelectionne === corbacapeMastralisSelected) {
      traitementArmures( corbacapeMastralisSelected );
    } 
    if ( armureSelectionne === capeCoeurSaignantSelected) {
      traitementArmures( capeCoeurSaignantSelected );
    } 
    if ( armureSelectionne === ankhapeSelected) {
      traitementArmures( ankhapeSelected );
    } 
  };
}
