function inscreverSe() {
  let nome = document.getElementById("nome").value;
  let  quantidade = document.getElementById("quantidade").value;
  let numero = 244948959820;

  let mensagem = `Olá! sou o ${nome} e pretendo ocupar ${quantidade} quartos no vosso hotel nos próximos dias. aguardo a vossa resposta.\n\nAtenciosamente, ${nome}`;

  window.open(
    `http://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`,
    "_blank"
  );
}