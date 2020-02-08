/**
 * -----------------------------------------------------------------------------
 * Armure sélectionné
 * -----------------------------------------------------------------------------
 */
const capeMeulouSelected          = document.querySelector(".armor_one");
const voileDEncreSelected         = document.querySelector(".armor_two");
const capeOgivolSelected          = document.querySelector(".armor_three");
const corbacapeMastralisSelected  = document.querySelector(".armor_four");
const capeCoeurSaignantSelected   = document.querySelector(".armor_five");
const ankhapeSelected             = document.querySelector(".armor_six");

/**
 * -----------------------------------------------------------------------------
 * Stats visible lors de la sélection de l'armure
 * -----------------------------------------------------------------------------
 */
const statVitalityArmor      = document.querySelector("span.vitalityArmor");
const statStrongArmor        = document.querySelector("span.strongArmor");
const statSagessArmor        = document.querySelector("span.sagessArmor");
const statIntelligenceArmor  = document.querySelector("span.intelligenceArmor");
const statLuckyArmor         = document.querySelector("span.luckyArmor");
const statAgilityArmor       = document.querySelector("span.agilityArmor");

/**
 * -----------------------------------------------------------------------------
 * Nouvelles armures
 * -----------------------------------------------------------------------------
 */
const capeMeulou = new Armor("Cape du Meulou", "Le Meulou a la queue si belle et si longue qu'elle traîne au sol. Certains aventuriers jaloux la lui ont arrachée et la portent, espérant sûrement y gagner en virilité.", 151, 31, 21, 0, 110, 20);

const capeOgivol = new Armor("Cape d'Ogivol", "Difficile de savoir si les os qui composent la cape d'Ogivol Scalarcin sont ceux de ses victimes ou juste des pièces de rechange pour ce vieux Sram arthritique.", 251, 41, 31, 0, 41, 41);

const voileDEncre = new Armor("Voile d'Encre", "Cette cape étrange semble faite d'encre noire, mais étrangement, elle se comporte comme une étoffe et ne coule pas. En revanche elle tâche. Votre arrière train n'aura jamais été aussi sale.", 251, 51, 25, 51, 0, 0);

const capeCoeurSaignant = new Armor("Cape du Coeur Saignant", "Cette cape possède un genre de ceinture intégrée. De cette manière, à tout moment vous pouvez décider de l'attacher autour de vos hanches afin d'empêcher vos ennemis de s'y agripper pour vous entraver.", 351, 0, 31, 0, 61, 61);

const corbacapeMastralis = new Armor("Corbacape Mastralis", "Les meilleurs tailleurs d'Amakna se sont associés jadis pour utiliser les restes de la dépouille du Maître Corbac afin d'en faire une cape somptueuse. Avec une telle cape sur les épaules, le maître c'est vous.", 81, 50, 36, 50, 50, 50);

const ankhape = new Armor("Ankhape", "D’après une récente étude, le symbole sur cette cape représenterait un gnome unijambiste les bras écartés.", 401, 20, 61, 61, 10, 20);

/**
 * -----------------------------------------------------------------------------
 * Tableau des armures actuel
 * -----------------------------------------------------------------------------
 */
const listeArmures = [capeMeulou,voileDEncre,capeOgivol,corbacapeMastralis,capeCoeurSaignant,ankhape];

/**
 * -----------------------------------------------------------------------------
 * Console.log de la liste des armures regrouper dans un groupe
 * -----------------------------------------------------------------------------
 */
console.groupCollapsed("Armures");
  listeArmures.map( armure => {
    console.log( armure );
  });
console.groupEnd();
