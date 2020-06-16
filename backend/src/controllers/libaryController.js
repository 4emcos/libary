const express = require ('express')
const Livro = require ('../models/livro')
const Editora = require ('../models/editora')

const router = express.Router();

router.get('/todos/livros', (req, res) => {
    Livro.find({}, function(err, livros) {
      var livroMap = {};
      var books = []
      let i = 0;
      livros.forEach(function(livro) {
        books.push({titulo: livro.titulo, 
                    autor: livro.autor,
                    editora: livro.editora,
                    paginas: livro.paginas,
                    ano: livro.ano
                    });
        i++
      });
      livroMap = {books}
      res.send(livroMap);  
    });
  });


  router.get('/todos/editoras', (req, res) => {
    Editora.find({}, function(err, editoras) {
      var editoraMap = {};
      var publish = []
      let i = 0;
      editoras.forEach(function(editora) {
        publish.push({nome: editora.nome, 
                    livros: editora.livros
                    });
        i++
      });
      editoraMap = {publish}
      res.send(editoraMap);  
    });
  });


  
router.post('/cadastrar/livro', async (req, res) => {
    const { titulo, editora} = req.body;

    try {
        if (await Livro.findOne({ titulo }))
            return res.status(400).send({ error : 'Livro já cadastrado' })

        const livro = await Livro.create(req.body);
   
        if(!await Editora.findOne({ nome: editora}))
        {
            Editora.create({nome: editora, livros: req.body })
        }
        

        if (await Editora.findOne({ nome: editora }))
        {
            const findID = await Editora.findOne({ nome : editora})
            await Editora.update(
                       { _id: findID._id }, 
                       {$push : {livros: livro}
                    })
        }

        return res.send({livro});
    } catch (err) {
        return res.status(400).send ({ error : "Falha no registro"});
    }
});


module.exports = app => app.use('/', router);