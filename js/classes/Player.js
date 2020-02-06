class Player {
  /**
   * 
   * @param {String} name 
   * @param {Number} vitality 
   * @param {Number} strong 
   * @param {Number} sagess 
   * @param {Number} intelligence 
   * @param {Number} lucky 
   * @param {Number} agility 
   */
  constructor(name, vitality, strong, sagess, intelligence, lucky, agility) {
    this._name           = name,
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