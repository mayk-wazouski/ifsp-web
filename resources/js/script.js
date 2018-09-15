window.onload = function() {
	carregarQuestionario();
};

function carregarQuestionario(contador){
	let arrayQuestoes = listarQuestoes();

	for (let i = 0; i < arrayQuestoes.length; i++) {
		console.log(i);
		verificaTipoQuestao(arrayQuestoes[i], i+1);
	}

}

function verificaTipoQuestao(questao, index){
	switch(questao.type){
		case "respostaUnica":{
			document.getElementById("pergunta_"+index).innerHTML = questao.questao;
			document.getElementById("alt_"+index+"_1").innerHTML = questao.alt1;
			document.getElementById("alt_"+index+"_2").innerHTML = questao.alt2;
			document.getElementById("alt_"+index+"_3").innerHTML = questao.alt3;
			document.getElementById("alt_"+index+"_4").innerHTML = questao.alt4;
		}break;
		case "checkBox":{
			document.getElementById("pergunta_"+index).innerHTML = questao.questao;
			document.getElementById("alt_"+index+"_1").innerHTML = questao.alt1;
			document.getElementById("alt_"+index+"_2").innerHTML = questao.alt2;
			document.getElementById("alt_"+index+"_3").innerHTML = questao.alt3;
			document.getElementById("alt_"+index+"_4").innerHTML = questao.alt4;


		}break;
		case "boolean":{
			document.getElementById("pergunta_"+index).innerHTML = questao.questao;

		}
		break;
	}
}

function submeterRespostas(){
	let arrayQuestoes = listarQuestoes();


	if(verificaPerguntasVazias()==true){

		validarRespostas();
		
	}	
}

function validarRespostas(){
	let relacao=[];
	let pontuacao = 0;
	let corretas = "Acertos: \n";

	//Valida questão 01
	if (document.getElementById("alt1_4").checked) {
		pontuacao+=1;
		corretas+="\n - 01 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 02
	if (document.getElementById("alt2_3").checked) {
		pontuacao+=1;
		corretas+="\n - 02 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 03
	if (document.getElementById("alt3_3").checked) {
		pontuacao+=1;
		corretas+="\n - 03 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 04
	if (document.getElementById("alt4_1").checked && document.getElementById("alt4_3").checked){
		pontuacao+=1;
		corretas+="\n - 04 Correta"
			relacao.push("correta");
	}else{
		if (document.getElementById("alt4_1").checked && document.getElementById("alt4_3").checked==null) {
			pontuacao+=0.5;
			relacao.push("parcialmente correta");
		}else
		relacao.push("incorreta");

		if (document.getElementById("alt4_3").checked && document.getElementById("alt4_1").checked==null) {
			pontuacao+=0.5;
			relacao.push("parcialmente correta");
		}else
		relacao.push("incorreta");
	}

	//Valida questão 05
	if (document.getElementById("alt5_1").checked){
		pontuacao+=1;
		corretas+="\n - 05 Correta"
			relacao.push("correta");
	}else{
		relacao.push("incorreta");
	}

	//Valida questão 06
	if (document.getElementById("alt_6_1").value == "false") {
		pontuacao+=1;
		corretas+="\n - 06 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 07
	if (document.getElementById("alt_7_1").value == "true") {
		pontuacao+=1;
		corretas+="\n - 07 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 08
	if (document.getElementById("alt_8_1").value == "false") {
		pontuacao+=1;
		corretas+="\n - 08 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");


	//Valida questão 09
	if (document.getElementById("alt_9_1").value.toLowerCase() == "hipertexto") {
		pontuacao+=1;
		corretas+="\n - 09 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");

	//Valida questão 10
	if (document.getElementById("alt_10_1").value.toLowerCase() == "browser") {
		pontuacao+=1;
		corretas+="\n - 10 Correta"
		relacao.push("correta");
	}else
	relacao.push("incorreta");


	

	if (confirm("PONTUAÇÃO: "+pontuacao+"\n\n"+corretas+"\n Deseja reiniciar o quiz\?")) {
       window.location.reload();
    } 
}

function verificaPerguntasVazias(){
	let questaoVazia = true;

	//Verificação da questão 01
	for (let i = 1; i < 5; i++) {
		if(document.getElementById("alt1_"+i).checked==true){
			questaoVazia = false;
			break;
		}
	}
	if(questaoVazia==true){
		alert("Questão 01 não foi respondida...");
		return false;
	}else
	questaoVazia=true;
	

	//Verificação da questão 02
	for (let i = 1; i < 5; i++) {
		if(document.getElementById("alt2_"+i).checked==true){
			questaoVazia = false;
			break;
		}
	}
	if(questaoVazia==true){
		alert("Questão 02 não foi respondida...");
		return false;
	}else
	questaoVazia=true;


	//Verificação da questão 03
	for (let i = 1; i < 5; i++) {
		if(document.getElementById("alt3_"+i).checked==true){
			questaoVazia = false;
			break;
		}
	}
	if(questaoVazia==true){
		alert("Questão 03 não foi respondida...");
		return false;
	}else
	questaoVazia=true;

	//Verificação da questão 04
	for (let i = 1; i < 5; i++) {
		if(document.getElementById("alt4_"+i).checked==true){
			questaoVazia = false;
			break;
		}
	}
	if(questaoVazia==true){
		alert("Questão 04 não foi respondida...");
		return false;
	}else
	questaoVazia=true;

	//Verificação da questão 05
	for (let i = 1; i < 5; i++) {
		if(document.getElementById("alt5_"+i).checked==true){
			questaoVazia = false;
			break;
		}
	}
	if(questaoVazia==true){
		alert("Questão 05 não foi respondida...");
		return false;
	}else
	questaoVazia=true;

	//Verificação da questão 06
	if(document.getElementById("alt_6_1").value=="null"){
		alert("Questão 06 não foi respondida...");
		return false;
	}

	//Verificação da questão 07
	if(document.getElementById("alt_7_1").value=="null"){
		alert("Questão 07 não foi respondida...");
		return false;
	}

	//Verificação da questão 08
	if(document.getElementById("alt_8_1").value=="null"){
		alert("Questão 08 não foi respondida...");
		return false;
	}

	//Verificação da questão 09
	if(document.getElementById("alt_9_1").value=="" || document.getElementById("alt_9_1").value==null){
		alert("Questão 09 não foi respondida adequadamente...");
	return false;
}

	//Verificação da questão 10
	if(document.getElementById("alt_10_1").value=="" || document.getElementById("alt_10_1").value==null){
		alert("Questão 10 não foi respondida adequadamente...");
	return false;
}

return true;
}