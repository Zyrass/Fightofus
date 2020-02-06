class Item {
  /**
   * Paramètres pour la construction d'un Ennemie (Mob);
   * @param {String} name 
   * @param {String} description 
   * @param {Number} vitality 
   * @param {Number} strong 
   * @param {Number} sagess 
   * @param {Number} intelligence 
   * @param {Number} lucky 
   * @param {Number} agility 
   */
  constructor(name, description, vitality, strong, sagess, intelligence, lucky, agility) {
    this._name           = name,
    this._description    = description,
    this._vitality       = vitality;
    this._strong         = strong;
    this._sagess         = sagess;
    this._intelligence   = intelligence;
    this._lucky          = lucky;
    this._agility        = agility;
  }

  /**
   * GETTERS
   */
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get vitality() {
    return this._vitality;
  }
  get strong() {
    return this._strong;
  }
  get sagess() {
    return this._sagess;
  }
  get intelligence() {
    return this._intelligence;
  }
  get lucky() {
    return this._lucky;
  }
  get agility() {
    return this._agility;
  }
}