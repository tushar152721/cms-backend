const express = require('express')
const contactController = require('../controller/contactController');
const contactRouter = express.Router();

contactRouter.post("/create",contactController.createContact);
contactRouter.get("/list",contactController.getContactDetail)
contactRouter.put("/update",contactController.updateContactDetail)
contactRouter.delete("/delete",contactController.contactDelete);

module.exports = {contactRouter};