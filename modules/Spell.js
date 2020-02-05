class Spell {

  constructor(name, description, level, type ) {
    this._name = name;
    this._description = description;
    this._level = level;
    this._type = type;
  }

  // Getters
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get level() {
    return this._level;
  }
  get type() {
    return this._type;
  }

  // Setters
  set name( name ) {
    this._name = name;
  }
  set description( description ) {
    this._description = description;
  }
  set level( level ) {
    this._level = level;
  }
  set type( type ) {
    this._type = type;
  }

}