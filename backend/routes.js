const express = require("express");

const router = express.Router();

const upload = require("./helpers/upload");

const {
  createMemory,
  getMemories,
} = require("./controllers/MemoryControllers");

router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;

    if (!image) {
      return res
        .status(400)
        .json({ msg: "Arquivo não enviado! Por favor envie um" });
    }

    next();
  },
  (req, res) => createMemory(req, res)
);

router.get("/", (req, res) => getMemories(req,res));

module.exports = router;
