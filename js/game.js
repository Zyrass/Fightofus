console.groupCollapsed("Combatants");
  console.log(sadida);
  console.log(xelor);
  console.log(enutrof);
  console.log(eniripsa);
  console.log(cra);
  console.log(feca);
console.groupEnd();

console.groupCollapsed("Armures");
  console.log(capeMeulou);
  console.log(capeOgivol);
  console.log(voileDEncre);
  console.log(capeCoeurSaignant);
  console.log(corbacapeMastralis);
  console.log(ankhape);
console.groupEnd();

console.groupCollapsed("Armes");
  console.log(capeMeulou);
  console.log(capeOgivol);
  console.log(voileDEncre);
  console.log(capeCoeurSaignant);
  console.log(corbacapeMastralis);
  console.log(ankhape);
console.groupEnd();


// Choix du combatant
const sadidaSelected    = document.querySelector(".fighter_sadida");
const xelorSelected     = document.querySelector(".fighter_xelor");
const enutrofSelected   = document.querySelector(".fighter_enutrof");
const eniripsaSelected  = document.querySelector(".fighter_eniripsa");
const craSelected       = document.querySelector(".fighter_cra");
const fecaSelected      = document.querySelector(".fighter_feca");

// Liste des combatants
const listeCombatant = [sadidaSelected, xelorSelected, enutrofSelected, eniripsaSelected, craSelected, fecaSelected];

// Choix de l'armure
const capeMeulouSelected          = document.querySelector(".armor_one");
const voileDEncreSelected         = document.querySelector(".armor_two");
const capeOgivolSelected          = document.querySelector(".armor_three");
const corbacapeMastralisSelected  = document.querySelector(".armor_four");
const capeCoeurSaignantSelected   = document.querySelector(".armor_five");
const ankhapeSelected             = document.querySelector(".armor_six");

// Choix de l'arme
const ragnarokSelected            = document.querySelector(".weapon_one");
const baguetteDesLimbesSelected   = document.querySelector(".weapon_two");
const epeeDarkVladSelected        = document.querySelector(".weapon_three");
const kaiserSelected              = document.querySelector(".weapon_four");
const neufQueuesSelected          = document.querySelector(".weapon_five");
const daguesReceusesSelected      = document.querySelector(".weapon_six");

// Stats visible lors de la sélection du personnage
const statVitality      = document.querySelector("span.vitality");
const statStrong        = document.querySelector("span.strong");
const statSagess        = document.querySelector("span.sagess");
const statIntelligence  = document.querySelector("span.intelligence");
const statLucky         = document.querySelector("span.lucky");
const statAgility       = document.querySelector("span.agility");

// Stats visible lors de la sélection de l'armure
const statVitalityArmor      = document.querySelector("span.vitalityArmor");
const statStrongArmor        = document.querySelector("span.strongArmor");
const statSagessArmor        = document.querySelector("span.sagessArmor");
const statIntelligenceArmor  = document.querySelector("span.intelligenceArmor");
const statLuckyArmor         = document.querySelector("span.luckyArmor");
const statAgilityArmor       = document.querySelector("span.agilityArmor");

// Stats visible lors de la sélection de l'armure
const statVitalityWeapon      = document.querySelector("span.vitality");
const statStrongWeapon        = document.querySelector("span.strong");
const statSagessWeapon        = document.querySelector("span.sagess");
const statIntelligenceWeapon  = document.querySelector("span.intelligence");
const statLuckyWeapon         = document.querySelector("span.lucky");
const statAgilityWeapon       = document.querySelector("span.agility");

// stats visible lors du combat
const statResultVitality      = document.querySelector(".vitalityResult");
const statResultStrong        = document.querySelector(".strongResult");
const statResultSagess        = document.querySelector(".sagessResult");
const statResultIntelligence  = document.querySelector(".intelligenceResult");
const statResultLucky         = document.querySelector(".luckyResult");
const statResultAgility       = document.querySelector(".agilityResult");

// Data pour le résultat final
const combatantArmureArme = [];

// Affichage du joueur sélectionné dans la partie Combat
const fighter = document.querySelector(".fighting_player > .listIcon > .fighter");
const armor = document.querySelector(".fighting_player > .listIcon > .armor");

/**
 * -----------------------------------------------------------------------------
 * Combatants Sélectionné
 * -----------------------------------------------------------------------------
 */
sadidaSelected.addEventListener("click", () => {
  statVitality.innerHTML      = sadida.vitality;
  statStrong.innerHTML        = sadida.strong;
  statSagess.innerHTML        = sadida.sagess;
  statIntelligence.innerHTML  = sadida.intelligence;
  statLucky.innerHTML         = sadida.lucky;
  statAgility.innerHTML       = sadida.agility;

  xelorSelected.style.filter    = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(100%)";
  sadidaSelected.style.filter   = "grayscale(0%)";
  
  if ( fighter.classList.contains("fighter_xelor") ) {
    fighter.classList.remove("fighter_xelor");
  } 
  if ( fighter.classList.contains("fighter_enutrof") ) {
    fighter.classList.remove("fighter_enutrof");
  } 
  if ( fighter.classList.contains("fighter_eniripsa") ) {
    fighter.classList.remove("fighter_eniripsa");
  }
  if ( fighter.classList.contains("fighter_cra") ) {
    fighter.classList.remove("fighter_cra");
  }
  if ( fighter.classList.contains("fighter_feca") ) {
    fighter.classList.remove("fighter_feca");
  }

  fighter.classList.add("fighter_sadida");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = sadida.vitality;
  statFightStrong.innerHTML        = sadida.strong;
  statFightSagess.innerHTML        = sadida.sagess;
  statFightIntelligence.innerHTML  = sadida.intelligence;
  statFightLucky.innerHTML         = sadida.lucky;
  statFightAgility.innerHTML       = sadida.agility;
});

xelorSelected.addEventListener("click", () => {
  statVitality.innerHTML      = xelor.vitality;
  statStrong.innerHTML        = xelor.strong;
  statSagess.innerHTML        = xelor.sagess;
  statIntelligence.innerHTML  = xelor.intelligence;
  statLucky.innerHTML         = xelor.lucky;
  statAgility.innerHTML       = xelor.agility;

  sadidaSelected.style.filter   = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(100%)";
  xelorSelected.style.filter    = "grayscale(0%)";

  if ( fighter.classList.contains("fighter_sadida") ) {
    fighter.classList.remove("fighter_sadida");
  }
  if ( fighter.classList.contains("fighter_enutrof") ) {
    fighter.classList.remove("fighter_enutrof");
  }
  if ( fighter.classList.contains("fighter_eniripsa") ) {
    fighter.classList.remove("fighter_eniripsa");
  }
  if ( fighter.classList.contains("fighter_cra") ) {
    fighter.classList.remove("fighter_cra");
  }
  if ( fighter.classList.contains("fighter_feca") ) {
    fighter.classList.remove("fighter_feca");
  }

  fighter.classList.add("fighter_xelor");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = xelor.vitality;
  statFightStrong.innerHTML        = xelor.strong;
  statFightSagess.innerHTML        = xelor.sagess;
  statFightIntelligence.innerHTML  = xelor.intelligence;
  statFightLucky.innerHTML         = xelor.lucky;
  statFightAgility.innerHTML       = xelor.agility;
});

enutrofSelected.addEventListener("click", () => {
  statVitality.innerHTML      = enutrof.vitality;
  statStrong.innerHTML        = enutrof.strong;
  statSagess.innerHTML        = enutrof.sagess;
  statIntelligence.innerHTML  = enutrof.intelligence;
  statLucky.innerHTML         = enutrof.lucky;
  statAgility.innerHTML       = enutrof.agility;

  sadidaSelected.style.filter   = "grayscale(100%)";
  xelorSelected.style.filter    = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(0%)";

  if ( fighter.classList.contains("fighter_sadida") ) {
    fighter.classList.remove("fighter_sadida");
  } 
  if ( fighter.classList.contains("fighter_xelor") ) {
    fighter.classList.remove("fighter_xelor");
  } 
  if ( fighter.classList.contains("fighter_eniripsa") ) {
    fighter.classList.remove("fighter_eniripsa");
  } 
  if ( fighter.classList.contains("fighter_cra") ) {
    fighter.classList.remove("fighter_cra");
  } 
  if ( fighter.classList.contains("fighter_feca") ) {
    fighter.classList.remove("fighter_feca");
  } 
  
  fighter.classList.add("fighter_enutrof");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = enutrof.vitality;
  statFightStrong.innerHTML        = enutrof.strong;
  statFightSagess.innerHTML        = enutrof.sagess;
  statFightIntelligence.innerHTML  = enutrof.intelligence;
  statFightLucky.innerHTML         = enutrof.lucky;
  statFightAgility.innerHTML       = enutrof.agility;
});

eniripsaSelected.addEventListener("click", () => {
  statVitality.innerHTML      = eniripsa.vitality;
  statStrong.innerHTML        = eniripsa.strong;
  statSagess.innerHTML        = eniripsa.sagess;
  statIntelligence.innerHTML  = eniripsa.intelligence;
  statLucky.innerHTML         = eniripsa.lucky;
  statAgility.innerHTML       = eniripsa.agility;

  sadidaSelected.style.filter   = "grayscale(100%)";
  xelorSelected.style.filter    = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(0%)";

  if ( fighter.classList.contains("fighter_sadida") ) {
    fighter.classList.remove("fighter_sadida");
  } 
  if ( fighter.classList.contains("fighter_xelor") ) {
    fighter.classList.remove("fighter_xelor");
  } 
  if ( fighter.classList.contains("fighter_enutrof") ) {
    fighter.classList.remove("fighter_enutrof");
  } 
  if ( fighter.classList.contains("fighter_cra") ) {
    fighter.classList.remove("fighter_cra");
  } 
  if ( fighter.classList.contains("fighter_feca") ) {
    fighter.classList.remove("fighter_feca");
  }  
  
  fighter.classList.add("fighter_eniripsa");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = eniripsa.vitality;
  statFightStrong.innerHTML        = eniripsa.strong;
  statFightSagess.innerHTML        = eniripsa.sagess;
  statFightIntelligence.innerHTML  = eniripsa.intelligence;
  statFightLucky.innerHTML         = eniripsa.lucky;
  statFightAgility.innerHTML       = eniripsa.agility;
});


craSelected.addEventListener("click", () => {
  statVitality.innerHTML      = cra.vitality;
  statStrong.innerHTML        = cra.strong;
  statSagess.innerHTML        = cra.sagess;
  statIntelligence.innerHTML  = cra.intelligence;
  statLucky.innerHTML         = cra.lucky;
  statAgility.innerHTML       = cra.agility;

  sadidaSelected.style.filter   = "grayscale(100%)";
  xelorSelected.style.filter    = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(0%)";

  if ( fighter.classList.contains("fighter_sadida") ) {
    fighter.classList.remove("fighter_sadida");
  } 
  if ( fighter.classList.contains("fighter_xelor") ) {
    fighter.classList.remove("fighter_xelor");
  } 
  if ( fighter.classList.contains("fighter_enutrof") ) {
    fighter.classList.remove("fighter_enutrof");
  } 
  if ( fighter.classList.contains("fighter_eniripsa") ) {
    fighter.classList.remove("fighter_eniripsa");
  } 
  if ( fighter.classList.contains("fighter_feca") ) {
    fighter.classList.remove("fighter_feca");
  }
  
  fighter.classList.add("fighter_cra");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = cra.vitality;
  statFightStrong.innerHTML        = cra.strong;
  statFightSagess.innerHTML        = cra.sagess;
  statFightIntelligence.innerHTML  = cra.intelligence;
  statFightLucky.innerHTML         = cra.lucky;
  statFightAgility.innerHTML       = cra.agility;
});


fecaSelected.addEventListener("click", () => {
  statVitality.innerHTML      = feca.vitality;
  statStrong.innerHTML        = feca.strong;
  statSagess.innerHTML        = feca.sagess;
  statIntelligence.innerHTML  = feca.intelligence;
  statLucky.innerHTML         = feca.lucky;
  statAgility.innerHTML       = feca.agility;

  sadidaSelected.style.filter   = "grayscale(100%)";
  xelorSelected.style.filter    = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  eniripsaSelected.style.filter = "grayscale(100%)";
  craSelected.style.filter      = "grayscale(100%)";
  fecaSelected.style.filter     = "grayscale(0%)";

  if ( fighter.classList.contains("fighter_sadida") ) {
    fighter.classList.remove("fighter_sadida");
  } 
  if ( fighter.classList.contains("fighter_xelor") ) {
    fighter.classList.remove("fighter_xelor");
  } 
  if ( fighter.classList.contains("fighter_enutrof") ) {
    fighter.classList.remove("fighter_enutrof");
  } 
  if ( fighter.classList.contains("fighter_eniripsa") ) {
    fighter.classList.remove("fighter_eniripsa");
  } 
  if ( fighter.classList.contains("fighter_cra") ) {
    fighter.classList.remove("fighter_cra");
  } 
  
  fighter.classList.add("fighter_feca");
  fighter.style.filter = "grayscale(0%)";

  statFightVitality.innerHTML      = feca.vitality;
  statFightStrong.innerHTML        = feca.strong;
  statFightSagess.innerHTML        = feca.sagess;
  statFightIntelligence.innerHTML  = feca.intelligence;
  statFightLucky.innerHTML         = feca.lucky;
  statFightAgility.innerHTML       = feca.agility;
});

/**
 * -----------------------------------------------------------------------------
 * ARMURES sélectionné
 * -----------------------------------------------------------------------------
 */
  capeMeulouSelected.addEventListener("click", () => {
    statVitalityArmor.innerHTML      = capeMeulou.vitality;
    statStrongArmor.innerHTML        = capeMeulou.strong;
    statSagessArmor.innerHTML        = capeMeulou.sagess;
    statIntelligenceArmor.innerHTML  = capeMeulou.intelligence;
    statLuckyArmor.innerHTML         = capeMeulou.lucky;
    statAgilityArmor.innerHTML       = capeMeulou.agility;

    capeOgivolSelected.style.filter         = "grayscale(100%)";
    voileDEncreSelected.style.filter        = "grayscale(100%)";
    capeCoeurSaignantSelected.style.filter  = "grayscale(100%)";
    corbacapeMastralisSelected.style.filter = "grayscale(100%)";
    ankhapeSelected.style.filter            = "grayscale(100%)";
    capeMeulouSelected.style.filter         = "grayscale(0%)";
    
    if ( fighter.classList.contains("armor_two") ) {
      fighter.classList.remove("armor_two");
    } 
    if ( fighter.classList.contains("armor_three") ) {
      fighter.classList.remove("armor_three");
    } 
    if ( fighter.classList.contains("armor_four") ) {
      fighter.classList.remove("armor_four");
    }
    if ( fighter.classList.contains("armor_five") ) {
      fighter.classList.remove("armor_five");
    }
    if ( fighter.classList.contains("armor_six") ) {
      fighter.classList.remove("armor_six");
    }

    armor.classList.add("armor_one");
    fighter.style.filter = "grayscale(0%)";

    if (sadidaSelected) {
      
      if (capeMeulouSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, capeMeulouSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, capeMeulouSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, capeMeulouSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, capeMeulouSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, capeMeulouSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, capeMeulouSelected, daguesReceusesSelected );
        }
      }

      if (voileDEncreSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, voileDEncreSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, voileDEncreSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, voileDEncreSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, voileDEncreSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, voileDEncreSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, voileDEncreSelected, daguesReceusesSelected );
        }
      }
      
      if (capeOgivolSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, capeOgivolSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, capeOgivolSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, capeOgivolSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, capeOgivolSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, capeOgivolSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, capeOgivolSelected, daguesReceusesSelected );
        }
      }

      if (corbacapeMastralisSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, corbacapeMastralisSelected, daguesReceusesSelected );
        }
      }

      if (capeCoeurSaignantSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, capeCoeurSaignantSelected, daguesReceusesSelected );
        }
      }

      if (ankhapeSelected) {
        if (ragnarokSelected) {
          calculStats( sadidaSelected, ankhapeSelected, ragnarokSelected );
        }
        if (baguetteDesLimbes) {
          calculStats( sadidaSelected, ankhapeSelected, baguetteDesLimbes );
        }
        if (epeeDarkVladSelected) {
          calculStats( sadidaSelected, ankhapeSelected, epeeDarkVladSelected );
        }
        if (kaiserSelected) {
          calculStats( sadidaSelected, ankhapeSelected, kaiserSelected );
        }
        if (neufQueuesSelected) {
          calculStats( sadidaSelected, ankhapeSelected, neufQueuesSelected );
        }
        if (daguesReceusesSelected) {
          calculStats( sadidaSelected, ankhapeSelected, daguesReceusesSelected );
        }
      }
    }

  });


function calculStats( combatantSelected, armureSelected, weaponSelected ) {
  if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === ragnarokSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + ragnarok.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + ragnarok.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + ragnarok.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + ragnarok.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + ragnarok.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + ragnarok.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === baguetteDesLimbesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + baguetteDesLimbes.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + baguetteDesLimbes.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + baguetteDesLimbes.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + baguetteDesLimbes.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + baguetteDesLimbes.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + baguetteDesLimbes.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + epeeDarkVlad.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + epeeDarkVlad.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + epeeDarkVlad.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + epeeDarkVlad.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + epeeDarkVlad.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === epeeDarkVladSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + epeeDarkVlad.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + epeeDarkVlad.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + epeeDarkVlad.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + epeeDarkVlad.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + epeeDarkVlad.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + epeeDarkVlad.agility;
  }  else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === kaiserSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + kaiser.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + kaiser.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + kaiser.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + kaiser.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + kaiser.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + kaiser.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === neufQueuesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + neufQueues.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + neufQueues.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + neufQueues.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + neufQueues.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + neufQueues.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + neufQueues.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeMeulouSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeMeulou.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeMeulou.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeMeulou.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeMeulou.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeMeulou.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeMeulou.agility + daguesReceuses.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === voileDEncreSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + voileDEncre.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + voileDEncre.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + voileDEncre.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   voileDEncre.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + voileDEncre.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + voileDEncre.agility + daguesReceuses.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeOgivolSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeOgivol.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeOgivol.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeOgivol.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence +   capeOgivol.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeOgivol.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeOgivol.agility + daguesReceuses.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === corbacapeMastralisSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + corbacapeMastralis.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + corbacapeMastralis.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + corbacapeMastralis.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + corbacapeMastralis.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + corbacapeMastralis.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + corbacapeMastralis.agility + daguesReceuses.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === capeCoeurSaignantSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + capeCoeurSaignant.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + capeCoeurSaignant.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + capeCoeurSaignant.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + capeCoeurSaignant.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + capeCoeurSaignant.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + capeCoeurSaignant.agility + daguesReceuses.agility;
  } else if ( 
    combatantSelected === sadidaSelected && 
    armureSelected === ankhapeSelected &&
    weaponSelected === daguesReceusesSelected
  ) {
    statResultVitality.innerHTML      = 
      sadida.vitality + ankhape.vitality + daguesReceuses.vitality;    
    statResultStrong.innerHTML        = 
      sadida.strong + ankhape.strong + daguesReceuses.strong;    
    statResultSagess.innerHTML        = 
      sadida.sagess + ankhape.sagess + daguesReceuses.sagess;    
    statResultIntelligence.innerHTML  = 
      sadida.intelligence + ankhape.intelligence + daguesReceuses.intelligence;
    statResultLucky.innerHTML         = 
      sadida.lucky + ankhape.lucky + daguesReceuses.lucky;
    statResultAgility.innerHTML       = 
      sadida.agility + ankhape.agility + daguesReceuses.agility;
  }
}