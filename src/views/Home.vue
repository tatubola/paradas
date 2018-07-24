<template>
  <div class="col-sm-12">
    <h1>Lista de IX</h1>
    <div class="table-responsive">
      <table class="table table-hover">
<!--         <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Opções
            </th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="ix_object in ix" :key="ix_object.code">
            <router-link tag='td' to='#'>
              <a>
                {{ix_object.nome_longo}} - {{ ix_object.nome_curto }}
              </a>
            </router-link>
<!--             <td>
              ...
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ix: [
        {
          codigo: 20,
          nome_curto: 'SP',
          nome_longo: 'São Paulo'
        },
        {
          codigo: 666,
          nome_curto: 'CE'
        },
        {
          codigo: 333,
          nome_curto: 'CGB'
        },
        {
          codigo: 222,
          nome_curto: 'CPV'
        },
        {
          codigo: 111,
          nome_curto: 'SJC',
          nome_longo: 'São José dos Campos'
        }
      ]
    }
  }
}
</script>
