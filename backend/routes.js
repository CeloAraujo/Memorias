const express = require("express");

const router = express.Router();

const { createMemory } = require("./controllers/MemoryControllers");

router.post("/", (req, res) => createMemory(req, res));

module.exports = router;
