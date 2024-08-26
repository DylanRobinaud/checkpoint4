const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import contact-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/contactActions");

// Route to get a list of contacts
router.get("/", browse);

// Route to get a specific contact by ID
router.get("/:id", read);

router.put("/:id", edit);

// Route to add a new contact
router.post("/", add);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
