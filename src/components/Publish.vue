<template>
 
        <b-container class="bv-example-row">
        <b-row>
        <div v-for="(i, index) in publish[0]" :key="index">
                
                <b-col>
                    <div>
                    <b-card-group deck>
                        <b-card header-tag="header" footer-tag="footer">

                        <template v-slot:header>
                            <h5 class="mb-0"> <span> <strong>{{ i.nome }}</strong></span> </h5>
                        </template>

                        <div v-for="(j, jindex) in i.livros" :key="jindex">
                        
                            <b-card-text>
                                    <span>Titulo: <strong>{{ j.titulo }}</strong></span> <br/>
                                    <span>Autor: <strong>{{ j.autor }}</strong></span> <br/>
                                    <span>Ano: <strong>{{ j.ano }}</strong></span> <br/>
                                    <span>Páginas: <strong>{{ j.paginas }}</strong></span> <br/>
                                    <span>Editora: <strong>{{ j.editora }}</strong></span> <br/>
                            </b-card-text>

                            <br/>

                        </div>
                        </b-card>
                    </b-card-group>
                    </div>
                </b-col>
    
        </div>
        </b-row>
    </b-container>

</template>

<script>


import axios from 'axios'


export default {
    name: "Publish",
    
    data(){
        return{
           publish: [] 
        }
    },

    created(){
    
        axios.get(`http://localhost:5000/todos/editoras`)
        .then(res => {

            this.publish.push(res.data.publish)
        })
        .catch(e => {
            this.errors.push(e)
        })
    },

}
</script>