class Mob {
  
  /**
   * 
   * @param {String} name 
   * @param {String} race 
   * @param {Number} level 
   * @param {Number} experience 
   * @param {Number} vitality 
   * @param {Number} strong 
   * @param {Number} intelligence 
   * @param {Number} rapidity 
   * @param {Number} light 
   * @param {Number} darkness 
   * @param {Number} resistance 
   * @param {String} description 
   */
  constructor(
    name, race, level = 1, experience = 2, vitality = 20, 
    strong = 1, intelligence = 1, rapidity = 5, light = 1, 
    darkness = 1, resistance = 1, description = "Un ennemie très dangereux !!"
  ) {
    this._name         = name;
    this._race         = race;
    this._level        = level;
    this._experience   = experience;
    this._vitality     = vitality;
    this._strong       = strong;
    this._intelligence = intelligence;
    this._rapidity     = rapidity;
    this._light        = light;
    this._darkness     = darkness;
    this._resistance   = resistance;
    this._description  = description;
  }

  /**
   * ----------------------------------------------------------------
   * GETTERS
   * ----------------------------------------------------------------
   */
  get name() { 
    return this._name;
  }

  get race() { 
    return this._race;
  }
  get level() { 
    return this._level;
  }

  get experience() { 
    return this._experience;
  }

  get vitality() { 
    return this._vitality;
  }

  get strong() { 
    return this._strong;
  }

  get intelligence() { 
    return this._intelligence;
  }

  get rapidity() { 
    return this._rapidity;
  }

  get light() { 
    return this._light;
  }

  get darkness() { 
    return this._darkness;
  }

  get resistance() { 
    return this._resistance;
  }

  get description() { 
    return this._description;
  }

  /**
   * ----------------------------------------------------------------
   * SETTERS
   * ----------------------------------------------------------------
   */
  set name( name ) { 
    this._name = name;
  }

  set race( race ) { 
    this._race = race;
  }

  set level( level ) {
    this._level = level;
  }

  set experience( experience ) {
    this._experience = experience;
  }

  set vitality( vitality ) {
    this._vitality = vitality;
  }

  set strong( strong ) {
    this._strong = strong;
  }

  set intelligence( intelligence ) {
    this._intelligence = intelligence;
  }

  set rapidity( rapidity ) {
    this._rapidity = rapidity;
  }

  set light( light ) {
    this._light = light;
  }

  set darkness( darkness ) {
    this._darkness = darkness;
  }

  set resistance( resistance ) {
    this._resistance = resistance;
  }

  set description( description ) {
    this._description = description;
  }

  /**
   * ----------------------------------------------------------------
   * ACTIONS
   * ----------------------------------------------------------------
   */
}