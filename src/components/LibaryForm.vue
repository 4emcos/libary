<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.titulo"
          required
          placeholder="Nome do livro"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.ano"
          required
          placeholder= "Ano de lançamento"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.autor"
          required
          placeholder="Autor"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.editora"
          required
          placeholder="Editora"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-5" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.observacoes"
          placeholder="Observações"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
        &nbsp;
      <b-button type="reset" variant="danger">Reset</b-button>


    </b-form>    
    
  </div>
</template>

<script>
  export default {
    name: "LibaryForm",
    data() {
      return {
        form: {
          titulo: '',
          ano: '',
          autor: '',
          editora: '',
          observacoes: '',

        },
        //foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(content) {
        content.preventDefault()
         this.$emit("emit-content", {titulo: this.form.titulo, 
                                     ano: this.form.ano,
                                     autor: this.form.autor,
                                     editora: this.form.editora,
                                     observacoes: this.form.observacoes,                   
                                     });
                                     
      },
      onReset(content) {
        content.preventDefault()

        this.form.titulo = ''
        this.form.ano = ''
        this.form.autor = ''
        this.form.editora = ''
        this.form.observacoes = ''
      
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
