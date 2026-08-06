/*
 * Desafio: entender a ordem de execucao do event loop.
 *
 * Saida:
 *   B ---> Tempo de execucao: 0ms
 *   E ---> Tempo de execucao: 424ms
 *   A ---> Tempo de execucao: 424ms
 *   D ---> Tempo de execucao: 425ms
 *   C ---> Tempo de execucao: 425ms
 *
 * Por que nesta ordem:
 *
 *   B roda primeiro por ser codigo sincrono, direto na thread principal.
 *
 *   E vem em seguida, e nao A/C/D, porque o while abaixo BLOQUEIA a thread.
 *   Enquanto ele gira, o event loop nao processa nada da fila de callbacks -
 *   nem os setTimeout de 0ms, que ja estavam prontos ha centenas de ms.
 *
 *   A, D e C so entram depois que a thread e liberada. A e D (0ms) saem na
 *   ordem em que foram agendados; C (100ms) vem por ultimo. Repare que o
 *   atraso de 100ms nao adiantou nada: quando o loop voltou, os 100ms ja
 *   tinham vencido havia muito tempo. O segundo argumento do setTimeout e um
 *   tempo MINIMO de espera, nao uma garantia de quando o callback executa.
 *
 * ---------------------------------------------------------------------------
 * NOTA: por que este arquivo NAO usa eval()
 * ---------------------------------------------------------------------------
 * A primeira versao chamava eval('tempo()') em vez de tempo(). Trocar as duas
 * formas muda o tempo medido de forma drastica - o mesmo laco caiu de ~3560ms
 * para ~424ms so por remover o eval.
 *
 * Medindo o laco isolado, sem nada do event loop no meio:
 *
 *   sem eval no escopo ............... 512 ms
 *   com eval direto no mesmo escopo .. 3453 ms
 *   com eval indireto, (0, eval)(...)  486 ms
 *
 * O motivo e que eval DIRETO e o unico construto do JavaScript que consegue
 * ler e criar variaveis no escopo em que foi chamado - eval('i = 999')
 * funcionaria. O V8 nao tem como saber, em tempo de compilacao, o que a string
 * vai fazer; entao, ao ver um eval direto, ele desiste de otimizar o escopo
 * inteiro. As variaveis do laco (i, ignore) deixam de virar registradores da
 * CPU e cada acesso passa a ser uma busca no objeto de escopo. Com 1 bilhao de
 * iteracoes, esse pedagio e pago em toda volta.
 *
 * A terceira linha da tabela isola a causa: (0, eval)(...) e o mesmo eval,
 * compilando a mesma string, mas a chamada indireta o faz rodar no escopo
 * global. Sem alcance sobre as variaveis do laco, o V8 volta a otimizar. Ou
 * seja, o custo nao esta em compilar a string (isso acontece uma vez so, e
 * irrelevante), e sim no escopo desotimizado.
 *
 * Detalhe importante para este exercicio: o eval inflava justamente a metrica
 * que o codigo se propunha a medir. Os ~3560ms do E eram, em boa parte,
 * artefato do instrumento de medicao, nao trabalho real do laco.
 */

const tempoInicial = Date.now();
function tempo() {
    const tempoFinal = Date.now();
    return `---> Tempo de execução: ${tempoFinal - tempoInicial}ms`;
}


setTimeout(() => console.log('A', tempo()), 0);
console.log('B', tempo());
setTimeout(() => console.log('C', tempo()), 100);
setTimeout(() => console.log('D', tempo()), 0);

// Laco puramente ocupado: segura a thread principal por ~400ms para deixar
// visivel que os callbacks acima ficam esperando na fila.
let i = 0;
while (i < 1000000000) {
    let ignore = Math.sqrt(i);
    i++;
}

console.log('E', tempo())
