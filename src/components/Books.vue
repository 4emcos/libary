<template>
    <div class="container">
        <h1>Bem-vindo</h1>
        <hr/>
        <LibaryForm v-on:emit-content="onSubmit" />
        <b-container class="bv-example-row">
            <b-row>
            <div v-for="(i, index) in books" :key="index">
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
                            
                            <template v-slot:footer>
                                <b-button v-on:click.prevent="removeBook(index)" href="#" variant="primary">Excluir</b-button>
                            </template>
                            </b-card>
                        </b-card-group>
                        </div>
                    </b-col>
        
            </div>
            </b-row>
        </b-container>

      </div>
</template>

<script>

import LibaryForm from './LibaryForm.vue';

export default {
    name: "Books",
    components:{
        LibaryForm
    },
    data(){
        return{
           books: [] 
        }
    },
    methods: {
        onSubmit(content){
            this.books.push(content);
        
        },
        removeBook(index){            
            this.books.splice(index, 1);
        }
    }
}
</script>