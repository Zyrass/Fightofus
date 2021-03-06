/**
 * -----------------------------------------------------------------------------
 * Arme sélectionné
 * -----------------------------------------------------------------------------
 */
const ragnarokSelected            = document.querySelector(".weapon_one");
const baguetteDesLimbesSelected   = document.querySelector(".weapon_two");
const epeeDarkVladSelected        = document.querySelector(".weapon_three");
const kaiserSelected              = document.querySelector(".weapon_four");
const neufQueuesSelected          = document.querySelector(".weapon_five");
const daguesReceusesSelected      = document.querySelector(".weapon_six");

/**
 * -----------------------------------------------------------------------------
 * Stats visible lors de la sélection de l'arme
 * -----------------------------------------------------------------------------
 */
const statVitalityWeapon      = document.querySelector("span.vitalityWeapon");
const statStrongWeapon        = document.querySelector("span.strongWeapon");
const statSagessWeapon        = document.querySelector("span.sagessWeapon");
const statIntelligenceWeapon  = document.querySelector("span.intelligenceWeapon");
const statLuckyWeapon         = document.querySelector("span.luckyWeapon");
const statAgilityWeapon       = document.querySelector("span.agilityWeapon");

/**
 * -----------------------------------------------------------------------------
 * Nouvelles armes
 * -----------------------------------------------------------------------------
 */
const ragnarok = new Weapon("Ragnarok","Le Ragnarok est un marteau très puissant, capable de déchaîner des tempêtes ou les foudres de vos alliés si vous leur tapez dessus.", 201, 0, 45, 100, 0, 0);

const baguetteDesLimbes = new Weapon("La Baguette des Limbes","Cette baguette provient des Limbes de Syrastass. La légende raconte qu'elle permet de faire fleurir des champs entiers de pâquerettes à la simple demande de son porteur.", 400, 25, 21, 40, 0, 40);

const epeeDarkVlad = new Weapon("Epée du Dark Vlad","Seul le Dark Vlad en personne est à même de faire ressurgir toute la magie de cette épée, pour la rendre réellement étincelante. En la portant, vous pourrez fièrement montrer que vous n'avez pas fini comme ces ridicules aventuriers qui ont péri sous sa lame.", 151, 0, 0, 100, 110, 40);

const kaiser = new Weapon("Kaiser", "Kaiser est le nom d'un Dragon Cochon qui jadis dévasta le village de Bounkaïda. Lorsque la milice eut enfin raison du monstre, les forgerons créèrent de nombreuses armes à partir des restes de la bête. Ce marteau en fait partie.", 150, 60, 0, 60, 0, 60);

const neufQueues = new Weapon("Neuf Queues", "La légende veut qu'Ecaflip, lors du dantesque combat qui l'éleva au rang de dieu, utilisa une arme constituée de ses propres queues, chacune issue de l'une de ses vies.", 300, 50, 0, 0, 0, 50);

const daguesReceuses = new Weapon("Dagues Réceuses", "Affûtées une fois par décennie seulement, ces dagues n'en restent pas moins mortelles. Animées d'une magie des plus obscures, elles se déplacent parfois toutes seules la nuit, pour aller se planter dans le meilleur des cas, dans le derrière des imprudents... Encore une histoire que l'on raconte aux jeunes Iops pour leur faire peur.", 201, 0, 31, 0, 0, 80);

/**
 * -----------------------------------------------------------------------------
 * Tableau des armes actuel
 * -----------------------------------------------------------------------------
 */
const listeArmes = [ragnarok,baguetteDesLimbes,epeeDarkVlad,kaiser,neufQueues,daguesReceuses];

/**
 * -----------------------------------------------------------------------------
 * Console.log de la liste des armes regrouper dans un groupe
 * -----------------------------------------------------------------------------
 */
console.groupCollapsed("Armes");
  listeArmes.map( arme => {
    console.log( arme );
  });
console.groupEnd();

