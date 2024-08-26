// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all contacts from the database
    const contacts = await tables.contact.readAll();

    // Respond with the contacts in JSON format
    res.json(contacts);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const contact = await tables.contact.read(req.params.id);
    if (contact == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(contact);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the contact data from the request body and params
  const contact = { ...req.body, id: req.params.id };

  try {
    // Update the contact in the database
    await tables.contact.update(contact);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the contact data from the request body
  const contact = req.body;

  try {
    // Insert the contact into the database
    const insertId = await tables.contact.create(contact);
    await tables.note.create(insertId);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted contact
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Call the delete method with the contact ID
    const result = await tables.contact.delete(req.params.id);

    // Check if any rows were affected (i.e., if the contact was deleted)
    if (result.affectedRows === 0) {
      res.sendStatus(404); // Not Found
    } else {
      res.sendStatus(204); // No Content (successful deletion)
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
