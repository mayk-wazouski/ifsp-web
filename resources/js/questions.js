function listarQuestoes(){
	let questoes = [
	{numero:"1",type:"respostaUnica", questao:"Assinale a alternativa que contém, na linguagem HTML,"+
	" a tag que delimita a área onde serão inseridas as informações que serão exibidas no browser:",
	 alt1:"< HTML >", alt2:"< BODY >", alt3:"< /HEAD >", alt4:"< META >"},

	{numero:"2",type:"respostaUnica", questao:"Um programa elaborado na linguagem HTML apresenta a seguinte linha:"+
	"\< !DOCTYPE HTML >"+" Sobre essa linha, é correto afirmar que ela: ",
	 alt1:"indica que o arquivo com o programa-fonte possui a extensão doc.",
	 alt2:"é uma tag que define o nome do arquivo que possui o programa.",
	 alt3:"especifica ao navegador o tipo de documento HTML que ele vai renderizar.",
	alt4:"não atende corretamente a linguagem HTML, que não aceita o símbolo ! em seus comandos."},

	{numero:"3",type:"respostaUnica", questao:"Na linguagem HTML 5, o elemento que representa uma seção da página que contém links para outras partes de um website é o",
	 alt1:"article", alt2:"aside", alt3:"nav", alt4:"hgroup"},

//Questões de multipla escolha com mais de uma resposta correta
	{numero:"4",type:"checkBox", questao:"Qua(l)(is) TAG(s) podemos usar no HTML para definir uma lista?",
	 alt1:"ul", alt2:"array", alt3:"ol", alt4:"list"},

	{numero:"5",type:"checkBox", questao:"Qual dos itens abaixo é uma pop-up?", 
	alt1:"Alert", alt2:"load()", alt3:"Radio", alt4:"console.log"},

//Questões Verdadeiro ou falso
	{numero:"6",type:"boolean", questao:"A linguagem HTML, para produzir páginas na Web, tratase de uma linguagem do tipo procedural."},
	{numero:"7",type:"boolean", questao:"A inserção de JavaScript em um documento HTML pode ocorrer de três maneiras: inline, incorporado e externo."},
	{numero:"8",type:"boolean", questao:"HTML (hypertext markup language) é uma linguagem de programação, atualmente na versão 5, muito utilizada para ambientes desktop."},

//Questões de preenchimento de lacuna com 2 lacunas
	{numero:"9",type:"lacuna1"},
	{numero:"10",type:"lacuna2"},
	];


return questoes;
}

