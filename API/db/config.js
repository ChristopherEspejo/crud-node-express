const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/veterinaria", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar");
  }
};
module.exports = {
  dbConnection,
};
