const controller = require("../controllers/compoundController");
const router = require('express').Router()

// 5 Routes for the 5 api calls

router

.post("/", controller.addCompound)

.get("/", controller.getAllCompounds)

.get("/:id", controller.getCompoundById)

.patch("/:id", controller.updateCompound)

.delete("/:id", controller.deleteCompound)


module.exports = router;