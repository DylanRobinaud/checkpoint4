const AbstractRepository = require("./AbstractRepository");

class ContactRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "contact" as configuration
    super({ table: "contact" });
  }

  // The C of CRUD - Create operation

  async create(contact) {
    // Execute the SQL INSERT query to add a new contact to the "contact" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [contact.title, contact.user_id]
    );

    // Return the ID of the newly inserted contact
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific contact by its ID
    const [rows] = await this.database.query(
      `SELECT co.id AS contact_id, co.last_name, co.first_name, co.phone, co.email, co.address, ca.name AS category_name, no.note_text AS note_text, DATE_FORMAT(no.creation_date, '%d/%m/%Y %H:%i:%s') AS note_creation_date FROM ${this.table} AS co  LEFT JOIN category AS ca ON co.category_id = ca.id LEFT JOIN note AS no ON co.id = no.contact_id WHERE co.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the contact
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all contacts from the "contact" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of contacts
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing contact

  async update(contact) {
    // Execute the SQL UPDATE query to modify the contact information
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

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an contact by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ContactRepository;
