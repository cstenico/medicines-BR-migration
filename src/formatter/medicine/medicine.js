function getProductType(typeCode) {
  if(typeCode){
    if (typeCode == 1) return 'GENÉRICO';
    if (typeCode == 2) return 'PATENTE';
    if (typeCode == 3) return 'REFERÊNCIA';
    if (typeCode == 4) return 'SIMILAR';
    if (typeCode == 5) return 'NOVO';
    if (typeCode == 6) return 'ESPECÍFICO';
    if (typeCode == 7) return 'BIOLÓGICOS';
    if (typeCode == 8) return 'DINAMIZADO';
    if (typeCode == 9) return 'FITOTERÁPICO';
    if (typeCode == 10) return 'RADIOFÁRMACO';
    if (typeCode == 11) return 'BIOLÓGICOS NOVOS';
    if (typeCode == '') return '';
  }
}
  
module.exports = function format({medicines}) {
  return medicines.map(m => {

    const productType = getProductType(m.TP_PRODUTO);
    
    return Object.assign({}, {
      cnpj: m.NU_CNPJ,
      razaoSocial: m.NO_RAZAO_SOCIAL,
      noRegistro: m.NU_REGISTRO,
      codApresentacao: m.CO_GGREM,
      codBarras: m.CO_EAN,
      nomeMedicamento: m.NO_PRODUTO,
      descricao: m.DS_APRESENTACAO,
      registroCAS: m.DS_CAS,
      nomeSubstancia: m.DS_SUBSTANCIA,
      tipoProduto: productType,
      vendaHospital: m.ST_REST_HOSP,
      listaCap: m.ST_CAP,
      listaConfaz: m.ST_CONFAZ87,
      preco: m.NU_PF0_INTEIRO,
      precoTax: m.NU_PF18_INTEIRO,
    });
  });
};