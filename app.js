var listaJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

exibirTela();

function exibirTela(jogador) {
  var elemento = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += `  <tr>
            <td>${listaJogadores[i].nome}</td>
            <td>${listaJogadores[i].vitorias}</td>
            <td>${listaJogadores[i].empates}</td>
            <td>${listaJogadores[i].derrotas}</td>
            <td>${listaJogadores[i].pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota()">Derrota</button></td>
       </tr>`;
  }
  elementoTabela.innerHTML = elemento;
}

function adicionarJogador() {
  var nomeJogador = prompt("Insira o nome do Jogador!");

  listaJogadores.push({
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  exibirTela();
}

//exibe as informações na tela

function adicionarVitoria(jogador) {
  listaJogadores[jogador].vitorias++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;
  for (var i in listaJogadores) {
    if (i != jogador) {
      listaJogadores[i].derrotas++;
    }
  }
  exibirTela();
}

function adicionarEmpate(jogador) {
  for (var i in listaJogadores) {
    listaJogadores[i].empates++;
    listaJogadores[i].pontos++;
    exibirTela();
  }
}

function adicionarDerrota(jogador) {
  for (var i in listaJogadores) {
    if (i != jogador) {
      listaJogadores[i].derrotas++;
    }
  }
  exibirTela();
}

function zerarPontos(jogador) {
  for (var i in listaJogadores) {
    listaJogadores[i].pontos = 0;
    listaJogadores[i].empates = 0;
    listaJogadores[i].vitorias = 0;
    listaJogadores[i].derrotas = 0;
  }
  exibirTela();
}

function removerJogador(jogador) {
  var eliminarJogador = prompt("Qual jogador deseja eliminar? Digite o nome:");
  var colocacao = -1;
  for (var i in listaJogadores) {
    if (eliminarJogador == listaJogadores[i].nome) {
      colocacao = i;
    }
  }

  if (colocacao != i) {
    listaJogadores.splice(colocacao, 1);

    zerarPontos();
    exibirTela();
  } else {
    alert("Jogador não encontrado, tente novamente");
  }
}

function declararVencedor(jogador) {
  var nomeVencedor = "";
  var mostrarResultado = document.getElementById("declararVencedor");
  var maiorPontuacao = 0;
  var quantidadeVencedores = 0;

  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos > maiorPontuacao) {
      nomeVencedor = listaJogadores[i].nome;
      maiorPontuacao = listaJogadores[i].pontos;
      var colocacao = i;
    }
  }

  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos == maiorPontuacao) {
      quantidadeVencedores++;
    }
  }

  if (quantidadeVencedores > 1) {
    mostrarResultado.innerHTML = `Houve um empate entre ${quantidadeVencedores} jogadores, ambos com ${maiorPontuacao} pontos. Parabéns aos vencedores!`;
  } else {
    mostrarResultado.innerHTML = `O vencedor foi ${nomeVencedor} com ${maiorPontuacao} pontos. Parabéns ${nomeVencedor}!`;
  }
}
