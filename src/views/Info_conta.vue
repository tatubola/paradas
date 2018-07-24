<template>
    <div class="info_conta">
        <div class="row">
            <div class="col-md-8">

                <h4 class="page-header">DADOS CADASTRO</h4>
                <form role="form">
                <div class="row">
                    <div class="col-md-6 form-group float-label-control">
                        <label for="">ASN</label>
                        <input type="number" class="form-control" :value="asn_valor">
                    </div>

                    <div class="col-md-6 form-group float-label-control">
                        <label for="">CNPJ</label>
                        <input type="text" class="form-control" :value="cnpk_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group float-label-control">
                        <label for="">Razão social</label>
                        <input type="text" class="form-control" :value="razao_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group float-label-control">
                        <label for="">Responsável</label>
                        <input type="text" class="form-control" :value="responsavel_valor">
                    </div>
                </div>
                <div class="row">
                    <h5 class="col-md-12 page-header">ENDEREÇO</h5>
                </div>
                <div class="row">
                    <div class="col-md-8 form-group float-label-control">
                        <label for="">Rua</label>
                        <input type="text" class="form-control" :value="rua_valor">
                    </div>
                    <div class="col-md-4 form-group float-label-control">
                        <label for="">Número</label>
                        <input type="number" class="form-control" :value="numero_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group float-label-control">
                        <label for="">Complemento</label>
                        <input type="text" class="form-control" :value="complemento_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 form-group float-label-control">
                        <label for="">Bairro</label>
                        <input type="text" class="form-control" :value="bairro_valor">
                    </div>
                    <div class="col-md-4 form-group float-label-control">
                        <label for="">CEP</label>
                        <input type="text" class="form-control" :value="cep_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9 form-group float-label-control">
                        <label for="">Cidade</label>
                        <input type="text" class="form-control" :value="cidade_valor">
                    </div>
                    <div class="col-md-3 form-group float-label-control">
                        <label for="">Estado</label>
                            <select class="form-control">
                            	<option :value="estado_valor" selected="selected">{{estado_valor}}</option>
                                <option v-if="estado_valor != 'AC'" value="AC">AC</option>
                                <option v-if="estado_valor != 'AL'" value="AL">AL</option>
                                <option v-if="estado_valor != 'AP'" value="AP">AP</option>
                                <option v-if="estado_valor != 'AM'" value="AM">AM</option>
                                <option v-if="estado_valor != 'BA'" value="BA">BA</option>
                                <option v-if="estado_valor != 'CE'" value="CE">CE</option>
                                <option v-if="estado_valor != 'DF'" value="DF">DF</option>
                                <option v-if="estado_valor != 'ES'" value="ES">ES</option>
                                <option v-if="estado_valor != 'GO'" value="GO">GO</option>
                                <option v-if="estado_valor != 'MA'" value="MA">MA</option>
                                <option v-if="estado_valor != 'MT'" value="MT">MT</option>
                                <option v-if="estado_valor != 'MS'" value="MS">MS</option>
                                <option v-if="estado_valor != 'MG'" value="MG">MG</option>
                                <option v-if="estado_valor != 'PA'" value="PA">PA</option>
                                <option v-if="estado_valor != 'PB'" value="PB">PB</option>
                                <option v-if="estado_valor != 'PR'" value="PR">PR</option>
                                <option v-if="estado_valor != 'PE'" value="PE">PE</option>
                                <option v-if="estado_valor != 'PI'" value="PI">PI</option>
                                <option v-if="estado_valor != 'RJ'" value="RJ">RJ</option>
                                <option v-if="estado_valor != 'RN'" value="RN">RN</option>
                                <option v-if="estado_valor != 'RS'" value="RS">RN</option>
                                <option v-if="estado_valor != 'RO'" value="RO">RO</option>
                                <option v-if="estado_valor != 'RR'" value="RR">RR</option>
                                <option v-if="estado_valor != 'SC'" value="SC">SC</option>
                                <option v-if="estado_valor != 'SP'" value="SP">SP</option>
                                <option v-if="estado_valor != 'SE'" value="SE">SE</option>
                                <option v-if="estado_valor != 'TO'" value="TO">TO</option>
                            </select>
                    </div>
                </div>
                <div class="row">
                    <h5 class="col-md-12 page-header">CONTATO</h5>
                </div>
                <div class="row">
                    <div class="col-md-2 form-group float-label-control">
                        <label for="">DDD</label>
                        <input type="number" class="form-control" :value="ddd_valor">
                    </div>
                    <div class=" col-md-8 form-group float-label-control">
                        <label for="">Telefone</label>
                        <input type="text" class="form-control" :value="telefone_valor">
                    </div>
                    <div class="col-md-2 form-group float-label-control">
                        <label for="">Ramal</label>
                        <input type="number" class="form-control" :value="ramal_valor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-lg btn-primary btn-block" type="submit">
                            Atualizar
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
            	asn_valor: 0,
            	cnpj_valor: "65.428.419/0001-94",
                razao_valor: "Teste inc",
                responsavel_valor: "Josvildo Das lua",
                rua_valor: "Rua casemiro",
                numero_valor: 445,
                complemento_valor: "jotinha",
                bairro_valor: "vila vai pra la",
                cep_valor: "09222212",
                cidade_valor: "Sao Paulis",
                estado_valor: "SP",
                ddd_valor: 11,
                telefone_valor: "5509-3550",
                ramal_valor: null,
            };
        }
    }

</script>


