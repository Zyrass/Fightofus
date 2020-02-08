

// stats visible lors du combat
const statResultVitality      = document.querySelector(".vitalityResult");
const statResultStrong        = document.querySelector(".strongResult");
const statResultSagess        = document.querySelector(".sagessResult");
const statResultIntelligence  = document.querySelector(".intelligenceResult");
const statResultLucky         = document.querySelector(".luckyResult");
const statResultAgility       = document.querySelector(".agilityResult");





// Affichage du joueur sélectionné dans la partie Combat
const fighter = document.querySelector(".fighting_player > .listIcon > .fighter");
const armor = document.querySelector(".fighting_player > .listIcon > .armor");





/**
 * -----------------------------------------------------------------------------
 * Combatants Sélectionné
 * -----------------------------------------------------------------------------
 */
sadidaSelected.addEventListener("click",() => {chooseFighter(sadidaSelected);});
xelorSelected.addEventListener("click",() => {chooseFighter(xelorSelected);});
enuSelected.addEventListener("click",() => {chooseFighter(enuSelected)});
eniSelected.addEventListener("click",() => {chooseFighter(eniSelected)});
craSelected.addEventListener("click", () => {chooseFighter(craSelected)});
fecaSelected.addEventListener("click", () => {chooseFighter(fecaSelected)});

/**
 * -----------------------------------------------------------------------------
 * ARMURES sélectionné
 * -----------------------------------------------------------------------------
 */
capeMeulouSelected.addEventListener("click", () => {
  chooseArmor(capeMeulouSelected);
});
voileDEncreSelected.addEventListener("click", () => {
  chooseArmor(voileDEncreSelected);
});
capeOgivolSelected.addEventListener("click", () => {
  chooseArmor(capeOgivolSelected);
});
corbacapeMastralisSelected.addEventListener("click", () => {
  chooseArmor(corbacapeMastralisSelected);
});
capeCoeurSaignantSelected.addEventListener("click", () => {
  chooseArmor(capeCoeurSaignantSelected);
});
ankhapeSelected.addEventListener("click", () => {
  chooseArmor(ankhapeSelected);
});
