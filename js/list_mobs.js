// Instance de la classe player
const farwest       = new Mob("Farwest", 125, 50, 5, 5, 10, 10);
const tania         = new Mob("Tania", 125, 15, 10, 10, 10, 35);
const prince        = new Mob("Prince", 200, 20, 35, 35, 15, 15);
const fidji         = new Mob("Fidji", 150, 25, 35, 10, 25, 20);
const merlin        = new Mob("Merlin", 250, 25, 50, 10, 50, 20);
const loustique     = new Mob("Loustique", 350, 25, 55, 30, 75, 25);
const eikos         = new Mob("Eikos", 180, 25, 65, 20, 25, 20);
const tendresse     = new Mob("Tendresse", 230, 45, 52, 30, 85, 90);
const uranus        = new Mob("Uranus", 900, 65, 50, 100, 250, );
const sally         = new Mob("Sally", 150, 25, 45, 20, 45, 20);
const patoune       = new Mob("Patoune", 150, 25, 55, 60, 55, 20);
const boubou        = new Mob("Boubou", 800, 50, 45, 100, 75, 200);
const pilou         = new Mob("Pilou", 150, 25, 75, 50, 75, 20);
const tempette      = new Mob("Tempete", 150, 25, 85, 40, 85, 20);
const muscadet      = new Mob("Muscadet", 800, 50, 45, 100, 75, 200);
const ultima        = new Mob("Ultima", 150, 25, 35,20, 35, 20);
const loulouCaporal = new Mob("LoulouCaporal", 150, 25, 95, 10, 95, 20);
const olaf          = new Mob("Olaf", 150, 25, 15, 10, 15, 20);
const pepere        = new Mob("Pepere", 150, 25, 25, 20, 25, 20);
const pirouette     = new Mob("Pirouette", 150, 25, 35, 30, 35, 20);

// liste des mobs
const listeMobs = [farwest, tania, prince, fidji, merlin, loustique, eikos, tendresse, uranus, sally, patoune, boubou, pilou, tempette, muscadet, ultima, loulouCaporal, olaf, pepere, pirouette];


// ennemie aléatoire
let numRandom = Math.floor( Math.random() * listeMobs.length );
let mobRandom = listeMobs[numRandom];

console.log(mobRandom.name);