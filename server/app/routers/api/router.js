const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const contactsRouter = require("./contacts/router");

router.use("/contacts", contactsRouter);
router.use("/contacts/:id", contactsRouter);
/* ************************************************************************* */

module.exports = router;
