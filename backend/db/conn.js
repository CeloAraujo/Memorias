const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@memories.yv6swni.mongodb.net/?retryWrites=true&w=majority&appName=Memories`
    );

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro:${error}`);
  }
}

main();

module.exports = main;
