const Memory = require("../models/Memory");

const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    const src = `images/${req.file.filename}`;

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Preencha todos os campos corretamente!" });
    }

    const newMemory = new Memory({
      title,
      src,
      description,
    });

    await newMemory.save();

    res.json({ msg: "Memória criada com sucesso!", newMemory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ocorreu algum erro!");
  }
};

const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();

    res.json(memories);
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

module.exports = {
  createMemory,
  getMemories,
};
