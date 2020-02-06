
console.log(sadida);
console.log(xelor);
console.log(enutrof);
console.log(eniripsa);
console.log(cra);
console.log(feca);

// Choix player
const sadidaSelected    = document.querySelector(".fighter_sadida");
const xelorSelected     = document.querySelector(".fighter_xelor");
const enutrofSelected   = document.querySelector(".fighter_enutrof");
const eniripsaSelected  = document.querySelector(".fighter_eniripsa");
const craSelected       = document.querySelector(".fighter_cra");
const fecaSelected      = document.querySelector(".fighter_feca");

// Stats visible lors de la sélection du personnage
const statVitality      = document.querySelector("span.vitality");
const statStrong        = document.querySelector("span.strong");
const statSagess        = document.querySelector("span.sagess");
const statIntelligence  = document.querySelector("span.intelligence");
const statLucky         = document.querySelector("span.lucky");
const statAgility       = document.querySelector("span.agility");

// stats visible lors du combat
const statFightVitality      = document.querySelector(
  ".fighting_player > ul li span.vitality"
);
const statFightStrong        = document.querySelector(
  ".fighting_player > ul li span.strong"
);
const statFightSagess        = document.querySelector(
  ".fighting_player > ul li span.sagess"
);
const statFightIntelligence  = document.querySelector(
  ".fighting_player > ul li span.intelligence"
);
const statFightLucky         = document.querySelector(
  ".fighting_player > ul li span.lucky"
);
const statFightAgility       = document.querySelector(
  ".fighting_player > ul li span.agility"
);

// Affichage du joueur sélectionné dans la partie Combat
const fighter = document.querySelector(".fighting_player > .fighter");

function resetStat() {
  statVitality.innerHTML = "";
  statStrong.innerHTML = "";
  statSagess.innerHTML = "";
  statIntelligence.innerHTML = "";
  statLucky.innerHTML = "";
  statAgility.innerHTML = "";
}

sadidaSelected.addEventListener("click", () => {
  resetStat();

  statVitality.innerHTML      = sadida.vitality;
  statStrong.innerHTML        = sadida.strong;
  statSagess.innerHTML        = sadida.sagess;
  statIntelligence.innerHTML  = sadida.intelligence;
  statLucky.innerHTML         = sadida.lucky;
  statAgility.innerHTML       = sadida.agility;

  sadidaSelected.style.filter = "grayscale(0%)";
  xelorSelected.style.filter  = "grayscale(100%)";
  enutrofSelected.style.filter  = "grayscale(100%)";
  eniripsaSelected.style.filter    = "grayscale(100%)";
  
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
  resetStat();

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
  resetStat();

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
  resetStat();

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
  resetStat();

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
  resetStat();

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


console.log(capeMeulou);
console.log(capeOgivol);
console.log(voileDEncre);
console.log(capeCoeurSaignant);
console.log(corbacapeMastralis);
console.log(ankhape);
