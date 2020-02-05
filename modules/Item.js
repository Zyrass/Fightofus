class Item {

  constructor(name, description, level, price, type ) {
    this._name = name;
    this._description = description;
    this._level = level;
    this._price = price;
    this._type = type;
    this._stats = stats;
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
  get price() {
    return this._price;
  }
  get type() {
    return this._type;
  }
  get stats() {
    return this.stats;
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
  set price( price ) {
    this._price = price;
  }
  set type( type ) {
    this._type = type;
  }
  set stats( stats ) {
    this._stats = stats;
  }

}