const AbstractRepository = require("./AbstractRepository");

class ContactRepository extends AbstractRepository {
  constructor() {
    super({ table: "contact" });
  }

  async create(contact) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (last_name, first_name, phone, email, address, category_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        contact.last_name,
        contact.first_name,
        contact.phone,
        contact.email,
        contact.address,
        contact.category_id,
      ]
    );

    // Return the ID of the newly inserted contact
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT co.id AS contact_id, co.last_name, co.first_name, co.phone, co.email, co.address, co.profile_img, ca.name AS category_name, no.note_text AS note_text, DATE_FORMAT(no.creation_date, '%d/%m/%Y %H:%i:%s') AS note_creation_date FROM ${this.table} AS co  LEFT JOIN category AS ca ON co.category_id = ca.id LEFT JOIN note AS no ON co.id = no.contact_id WHERE co.id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(contact) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET last_name = ?, first_name = ?, phone = ?, email = ?, address = ?, category_id = ? WHERE id = ?`,
      [
        contact.last_name,
        contact.first_name,
        contact.phone,
        contact.email,
        contact.address,
        contact.category_id,
        contact.id,
      ]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = ContactRepository;
