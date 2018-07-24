<template>
  <div class="col-sm-8">
    <h1>ASN {{asn}} - {{ix.nome_longo}}</h1>
    <h2>Faturas Abertas</h2>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <th></th>
          <th>Número</th>
          <th>Data</th>
          <th>Valor</th>
          <th>Pagar</th>
        </thead>
        <tbody>
          <tr v-for="fatura in faturasAbertas" :key="fatura.id">
            <td class="col-md-1"><a :href="fatura.boleto_url"><i class="glyphicon glyphicon-info-sign"></i></a></td>
            <td class="col-md-2">{{fatura.id}}</td>
            <td class="col-md-1">{{fatura.mes}}/{{fatura.ano}}</td>
            <td class="col-md-1">R${{fatura.valor}}</td>
            <td class="col-md-2">
              <div class="btn-group" role="group">
                <a :href="fatura.boleto_url" class="btn btn-primary">Boleto</a>
                <button class="btn btn-primary">PayPal</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Faturas Fechadas</h2>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <th></th>
          <th>Número</th>
          <th>Data</th>
          <th>Valor</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="fatura in faturasFechadas" :key="fatura.id">
            <td class="col-md-1"><a :href="fatura.boleto_url"><i class="glyphicon glyphicon-info-sign"></i></a></td>
            <td class="col-md-2">{{fatura.id}}</td>
            <td class="col-md-1">{{fatura.mes}}/{{fatura.ano}}</td>
            <td class="col-md-1">R${{fatura.valor}}</td>
            <td class="col-md-2"></td>
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
      asn: 1000,
      ix: {
        codigo: 20,
        nome_curto: 'SP',
        nome_longo: 'São Paulo'
      },
      faturas: [{
        id: 'IXBR01 000.000.010',
        estado: 'ABERTA',
        ano: 2017,
        mes: 5,
        valor: 240,
        boleto_url: '#'
      },
      {
        id: 'IXBR01 000.000.011',
        boleto_url: '#',
        estado: 'ABERTA',
        ano: 2017,
        mes: 5,
        valor: 240
      },
      {
        id: 'IXBR01 000.000.012',
        boleto_url: '#',
        estado: 'FECHADA',
        ano: 2017,
        mes: 5,
        valor: 240
      },
      {
        id: 'IXBR01 000.000.013',
        boleto_url: '#',
        estado: 'FECHADA',
        ano: 2017,
        mes: 5,
        valor: 240
      },
      {
        id: 'IXBR01 000.000.014',
        estado: 'FECHADA',
        ano: 2017,
        mes: 5,
        valor: 240,
        boleto_url: '#'
      },
      {
        id: 'IXBR01 000.000.015',
        estado: 'FECHADA',
        ano: 2017,
        mes: 5,
        valor: 240,
        boleto_url: '#'
      }
      ]
    }
  },
  computed: {
    faturasAbertas () {
      return this.faturas.filter(fatura => fatura.estado === 'ABERTA')
    },
    faturasFechadas () {
      return this.faturas.filter(fatura => fatura.estado === 'FECHADA')
    }
  },
}
</script>
<style scoped>
  .mb-1 {
    margin-bottom: 10px
  }

  .mt-2 {
    margin-top: 20px
  }

  .vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
  table tr td{
    padding-left: 0px
  }
</style>
