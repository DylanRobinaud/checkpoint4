// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
// const browse = async (req, res, next) => {
//   try {
//     // Fetch all notes from the database
//     const notes = await tables.note.readAll();

//     // Respond with the notes in JSON format
//     res.json(notes);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     // Fetch a specific note from the database based on the provided ID
//     const note = await tables.note.read(req.params.id);

//     // If the note is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the note in JSON format
//     if (note == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(note);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the note data from the request body and params
  const note = { ...req.body, contact_id: req.params.id };

  try {
    // Update the note in the database
    await tables.note.update(note);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the note data from the request body
//   const note = req.body;

//   try {
//     // Insert the note into the database
//     const insertId = await tables.note.create(note);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted note
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  // browse,
  // read,
  edit,
  // add,
  // destroy,
};
