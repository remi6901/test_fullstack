const AbstractManager = require("./AbstractManager");

class RegionManager extends AbstractManager {
  constructor() {
    super({ table: "region" });
  }

  insert(region) {
    return this.connection.query(
      `insert into ${this.table} (name, description, picture) values (?, ?, ?)`,
      [region.name, region.description, region.picture]
    );
  }

  update(region) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [region.name, region.id]
    );
  }
}

module.exports = RegionManager;
