/**
 * -----------------------------------------------------------------------------
 * Combatant sélectionné
 * -----------------------------------------------------------------------------
 */
const sadidaSelected    = document.querySelector(".fighter_sadida");
const xelorSelected     = document.querySelector(".fighter_xelor");
const enuSelected       = document.querySelector(".fighter_enutrof");
const eniSelected       = document.querySelector(".fighter_eniripsa");
const craSelected       = document.querySelector(".fighter_cra");
const fecaSelected      = document.querySelector(".fighter_feca");

/**
 * -----------------------------------------------------------------------------
 * Stats visible lors de la sélection du personnage
 * -----------------------------------------------------------------------------
 */
const statVitality      = document.querySelector("span.vitality");
const statStrong        = document.querySelector("span.strong");
const statSagess        = document.querySelector("span.sagess");
const statIntelligence  = document.querySelector("span.intelligence");
const statLucky         = document.querySelector("span.lucky");
const statAgility       = document.querySelector("span.agility");

/**
 * -----------------------------------------------------------------------------
 * Nouveaux combatants
 * -----------------------------------------------------------------------------
 */
const sadida   = new Player("Adidas", 100, 50, 0, 50, 50, 0);
const xelor    = new Player("Rolex", 125, 25, 25, 25, 25, 25);
const enutrof  = new Player("Fortuné", 150, 50, 0, 0, 50, 0);
const eniripsa = new Player("Aspirine", 150, 0, 25, 50, 0, 25);
const cra      = new Player("Arc", 150, 25, 0, 0, 25, 50);
const feca     = new Player("Café", 150, 25, 25, 50, 0, 0);

/**
 * -----------------------------------------------------------------------------
 * Tableau des combatants actuel
 * -----------------------------------------------------------------------------
 */
const listeCombatants = [sadida,xelor,enutrof,eniripsa,cra,feca];

/**
 * -----------------------------------------------------------------------------
 * Console.log de la liste des combatants regrouper dans un groupe
 * -----------------------------------------------------------------------------
 */
console.groupCollapsed("Combatants");
  listeCombatants.map( combatant => {
    console.log( combatant );
  });
console.groupEnd();
