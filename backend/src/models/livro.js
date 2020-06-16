const mongoose = require("../database/database");
 
const LivroSchema = new  mongoose.Schema(
  {
    titulo:{
      type: String,
      unique: true,
      required: true,
      lowercase:true,
    },
    autor:{
      type: String,
      required: true,
    },
    editora:{
      type: String,
      required: true,
    },

    paginas:{
      type: Number,
      required: true,
    },
    ano: {
      type: Number,
      required: true
    },

    createdAt:{
      type: Date,
      default: Date.now,
    }
  });


module.exports = mongoose.model("Livro", LivroSchema);