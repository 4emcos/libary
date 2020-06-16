<template>
    <div class="container">
        <h1>Bem-vindo</h1>
        <hr/>
       
        <b-tabs tabs>
            <b-tab b title="CADASTRO" active><LibaryForm/></b-tab >
            <b-tab title="LIVROS" >
                        <b-container class="bv-example-row">
                        <b-row>
                        <div v-for="(i, index) in books[0]" :key="index">
                                
                                <b-col>
                                    <div>
                                    <b-card-group deck>
                                        <b-card header-tag="header" footer-tag="footer">

                                        <template v-slot:header>
                                            <h5 class="mb-0"> <span> <strong>{{ i.titulo }}</strong></span> </h5>
                                        </template>
                                        
                                        <b-card-text>
                                                <span>Autor: <strong>{{ i.autor }}</strong></span> <br/>
                                                <span>Ano: <strong>{{ i.ano }}</strong></span> <br/>
                                                <span>Páginas: <strong>{{ i.paginas }}</strong></span> <br/>
                                            <span>Editora: <strong>{{ i.editora }}</strong></span> <br/>
                                            <span>Observações: <strong>{{ i.observacoes }}</strong></span>
                                        
                                        </b-card-text>
                                    
                                        </b-card>
                                    </b-card-group>
                                    </div>
                                </b-col>
                    <br/>
                        </div>
                        
                        </b-row>
                    </b-container>


            
            
            </b-tab >
            <b-tab b title="EDITORAS">
                    <Publish/>
                
            </b-tab >
          
        </b-tabs>
      
        
        
    
        

      </div>
</template>

<script>

import LibaryForm from './LibaryForm.vue';
import Publish from './Publish.vue'
import axios from 'axios'


export default {
    name: "Books",
    components:{
        LibaryForm,
        Publish
    },
    data(){
        return{
           books: [] 
        }
    },

    created(){
        
        axios.get(`http://localhost:5000/todos/livros`)
        .then(res => {
            
            this.books.push(res.data.books)
        })
        .catch(e => {
            this.errors.push(e)
        })
    },

}
</script>