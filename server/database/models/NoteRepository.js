const AbstractRepository = require("./AbstractRepository");

class NoteRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "note" as configuration
    super({ table: "note" });
  }

  // The C of CRUD - Create operation

  async create(contactId) {
    // Execute the SQL INSERT query to add a new note to the "note" table
    const [result] = await this.database.query(
      `insert into ${this.table} (contact_id, note_text) values (?, "")`,
      [contactId]
    );

    // Return the ID of the newly inserted note
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific note by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the note
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all notes from the "note" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of notes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing note

  async update(note) {
    // Execute the SQL UPDATE query to modify the content and update the creation_date
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET note_text = ? WHERE contact_id = ?`,
      [note.note_text, note.contact_id]
    );
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an note by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = NoteRepository;
