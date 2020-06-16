const mongoose = require("../database/database");
const EditoraSchema = new  mongoose.Schema(
  {
    nome:{
      type: String,
      required: true,
      lowercase:true,
    },

    livros: 
    [{
        titulo:{
            type: String,
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
        
    }],


    createdAt:{
      type: Date,
      default: Date.now,
    }
  });

module.exports = mongoose.model("Editoras", EditoraSchema);