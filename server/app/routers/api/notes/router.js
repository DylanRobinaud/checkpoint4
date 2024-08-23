const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import note-related actions
const { edit } = require("../../../controllers/noteActions");

// Route to get a list of notes
// router.get("/", browse);

// Route to get a specific note by ID
// router.get("/:id", read);

router.put("/:id", edit);

// Route to add a new note
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
