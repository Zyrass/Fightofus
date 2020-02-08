const combatantArmureArme = [];

/**
 * Veuillez choisir un des paramètres suivant :
 * @param {*} fighter sadidaSelected
 * @param {*} fighter xelorSelected
 * @param {*} fighter enuSelected
 * @param {*} fighter eniSelected
 * @param {*} fighter craSelected
 * @param {*} fighter fecaSelected
 */
function chooseFighter( fighter ) {

  // Data pour le résultat final
  const statCombatant       = [];

  /**
   * ---------------------------------------------------------------------------
   * SADIDA
   * ---------------------------------------------------------------------------
   */
  if ( fighter === sadidaSelected ) { 
    statVitality.innerHTML      = sadida.vitality;
    statStrong.innerHTML        = sadida.strong;
    statSagess.innerHTML        = sadida.sagess;
    statIntelligence.innerHTML  = sadida.intelligence;
    statLucky.innerHTML         = sadida.lucky;
    statAgility.innerHTML       = sadida.agility;

    xelorSelected.style.filter    = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(100%)";
    sadidaSelected.style.filter   = "grayscale(0%)";

    // Affichage du combatant : sadida dans la fenêtre de combat
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
    
    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( sadida.vitality );
      statCombatant.push( sadida.strong );
      statCombatant.push( sadida.sagess );
      statCombatant.push( sadida.intelligence );
      statCombatant.push( sadida.lucky );
      statCombatant.push( sadida.agility );

      console.log( "statCombatant Sadida", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * XELOR
   * ---------------------------------------------------------------------------
   */
  if ( fighter === xelorSelected ) { 
    statVitality.innerHTML      = xelor.vitality;
    statStrong.innerHTML        = xelor.strong;
    statSagess.innerHTML        = xelor.sagess;
    statIntelligence.innerHTML  = xelor.intelligence;
    statLucky.innerHTML         = xelor.lucky;
    statAgility.innerHTML       = xelor.agility;

    sadidaSelected.style.filter   = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(100%)";
    xelorSelected.style.filter    = "grayscale(0%)";
  
    // Affichage du combatant : xelor dans la fenêtre de combat
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

    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( xelor.vitality );
      statCombatant.push( xelor.strong );
      statCombatant.push( xelor.sagess );
      statCombatant.push( xelor.intelligence );
      statCombatant.push( xelor.lucky );
      statCombatant.push( xelor.agility );

      console.log( "statCombatant Xelor", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * ENUTROF
   * ---------------------------------------------------------------------------
   */
  if ( fighter === enuSelected ) { 
    statVitality.innerHTML      = enutrof.vitality;
    statStrong.innerHTML        = enutrof.strong;
    statSagess.innerHTML        = enutrof.sagess;
    statIntelligence.innerHTML  = enutrof.intelligence;
    statLucky.innerHTML         = enutrof.lucky;
    statAgility.innerHTML       = enutrof.agility;
  
    sadidaSelected.style.filter   = "grayscale(100%)";
    xelorSelected.style.filter    = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(0%)";
  
    // Affichage du combatant : enutrof dans la fenêtre de combat
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

    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( enutrof.vitality );
      statCombatant.push( enutrof.strong );
      statCombatant.push( enutrof.sagess );
      statCombatant.push( enutrof.intelligence );
      statCombatant.push( enutrof.lucky );
      statCombatant.push( enutrof.agility );

      console.log( "statCombatant Enutrof", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * ENIRIPSA
   * ---------------------------------------------------------------------------
   */
  if ( fighter === eniSelected ) { 
    statVitality.innerHTML      = eniripsa.vitality;
    statStrong.innerHTML        = eniripsa.strong;
    statSagess.innerHTML        = eniripsa.sagess;
    statIntelligence.innerHTML  = eniripsa.intelligence;
    statLucky.innerHTML         = eniripsa.lucky;
    statAgility.innerHTML       = eniripsa.agility;
  
    sadidaSelected.style.filter   = "grayscale(100%)";
    xelorSelected.style.filter    = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(0%)";
  
    // Affichage du combatant : eniripsa dans la fenêtre de combat
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

    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( eniripsa.vitality );
      statCombatant.push( eniripsa.strong );
      statCombatant.push( eniripsa.sagess );
      statCombatant.push( eniripsa.intelligence );
      statCombatant.push( eniripsa.lucky );
      statCombatant.push( eniripsa.agility );

      console.log( "statCombatant Eniripsa", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * CRA
   * ---------------------------------------------------------------------------
   */
  if ( fighter === craSelected ) { 
    statVitality.innerHTML      = cra.vitality;
    statStrong.innerHTML        = cra.strong;
    statSagess.innerHTML        = cra.sagess;
    statIntelligence.innerHTML  = cra.intelligence;
    statLucky.innerHTML         = cra.lucky;
    statAgility.innerHTML       = cra.agility;

    sadidaSelected.style.filter   = "grayscale(100%)";
    xelorSelected.style.filter    = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(0%)";

    // Affichage du combatant : cra dans la fenêtre de combat
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

    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( cra.vitality );
      statCombatant.push( cra.strong );
      statCombatant.push( cra.sagess );
      statCombatant.push( cra.intelligence );
      statCombatant.push( cra.lucky );
      statCombatant.push( cra.agility );

      console.log( "statCombatant Cra", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * FECA
   * ---------------------------------------------------------------------------
   */
  if ( fighter === fecaSelected ) { 
    statVitality.innerHTML      = feca.vitality;
    statStrong.innerHTML        = feca.strong;
    statSagess.innerHTML        = feca.sagess;
    statIntelligence.innerHTML  = feca.intelligence;
    statLucky.innerHTML         = feca.lucky;
    statAgility.innerHTML       = feca.agility;

    sadidaSelected.style.filter   = "grayscale(100%)";
    xelorSelected.style.filter    = "grayscale(100%)";
    enuSelected.style.filter      = "grayscale(100%)";
    eniSelected.style.filter      = "grayscale(100%)";
    craSelected.style.filter      = "grayscale(100%)";
    fecaSelected.style.filter     = "grayscale(0%)";

    // Affichage du combatant : feca dans la fenêtre de combat
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

    if ( statCombatant.length > 0 ) {
      statCombatant = [];
    } else {

      statCombatant.push( feca.vitality );
      statCombatant.push( feca.strong );
      statCombatant.push( feca.sagess );
      statCombatant.push( feca.intelligence );
      statCombatant.push( feca.lucky );
      statCombatant.push( feca.agility );

      console.log( "statCombatant Feca", statCombatant );
      combatantArmureArme.push( statCombatant );

      console.log ( "combatantArmureArme", combatantArmureArme );
    }
  }
}