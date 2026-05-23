## INTRODUÇÃO A LINGUAGEM C

<p align="justify">A linguagem C é uma das linguagens de programação mais importantes da história da computação. Ela foi criada por Dennis Ritchie na década de 1970 nos Bell Labs. Ela possui algumas características principais:</p>

<div style="
background-color:#FFF5F5;
border-left:6px solid #EF5552;
padding:15px;
margin:20px 0;
border-radius:8px;
">

<strong>📦 Características da Linguagem C</strong>

<ul>
<li>Linguagem de baixo e médio nível</li>
<li>Muito rápida e eficiente</li>
<li>Amplamente usada em: Sistemas operacionais,Jogos,Sistemas embarcados,Compiladores</li>
</ul>

</div>

<p align="justify"> A linguagem C é fundamental para aprender programação e entender como os computadores funcionam internamente. Ela continua sendo muito utilizada no desenvolvimento de sistemas e aplicações de alto desempenho. No quadro abaixo é possível visualizar as principais vantagens e desvantagens:</p>

<div style="
background-color:#FFF5F5;
border-left:6px solid #EF5552;
padding:15px;
margin:20px 0;
border-radius:8px;
">

<center>
    <table border="1px solid">
        <tr>
            <th>Vantagens</th>
            <th>Desvantagens</th>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>Alto desempenho</li>
                    <li>Controle de memória</li>
                    <li>Base para várias linguagens:
                        <ul>
                            <li>C++</li>
                            <li>Java</li>
                            <li>C#</li>
                        </ul>
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Gerenciamento manual de memória</li>
                    <li>Menos segura que linguagens modernas</li>
                    <li>Sintaxe pode ser difícil para iniciantes</li>
                </ul>
            </td>
        </tr>
    </table>
</center>
</div>

<p align="justify"> Para programar em C, você pode utilizar uma IDE (Integrated Development Environment ou Ambiente de Desenvolvimento Integrado). É um software usado por programadores que reúne editor de texto, compilador e ferramentas de teste para criar códigos de forma mais rápida e organizada. São exemplos de IDE's: Code::Blocks, Dev-C++ e Visual Studio Code. Caso não queira utilizar uma IDE, você pode somente instalar o compilador GCC e compilar o seu código no terminal da seguinte forma:</p>

<div style="
background-color:#FFF5F5;
border-left:6px solid #EF5552;
padding:15px;
margin:20px 0;
border-radius:8px;
">

<strong>📦 Compilando um programa</strong>

<p align="justify"> No terminal:</p>

<p align="justify"> gcc programa.c -o programa </p>
<p align="justify"> ./programa </p>

</div>

## VARIÁVEIS E SEUS TIPOS DE DADOS

<p align="justify">Variáveis são espaços reservados na memória para armazenar informações. Os tipos de dados definem quais valores uma variável pode armazenar. Na Linguagem C, os principais tipos são:</p>

<div style="
background-color:#FFF5F5;
border-left:6px solid #EF5552;
padding:15px;
margin:20px 0;
border-radius:8px;
">

<center>
    <table border="1px solid">
        <tr>
            <th>Tipo de dados</th>
            <th>Descrição</th>
        </tr>
        <tr>
            <td>
               int
            </td>
            <td>
              Números inteiros
            </td>
        </tr>
        <tr>
            <td>
               float
            </td>
            <td>
              Números reais
            </td>
        </tr>
        <tr>
            <td>
               char
            </td>
            <td>
              Caracteres
            </td>
        </tr>
        <tr>
            <td>
               double
            </td>
            <td>
              Números reais com maior precisão
            </td>
        </tr>
    </table>
</center>
</div>

<p align="justify">Com base no conceito de variáveis e nos tipos de dados estudados, a seguir são apresentados exemplos de declaração e inicialização de variáveis na linguagem C:</p>

```c
int idade = 20;
float altura = 1.75;
char letra = 'A';
```

<p align="justify">Ao criar uma variável, é importante seguir algumas regras básicas: o nome não deve iniciar com números, não pode conter espaços nem caracteres especiais e deve ser escolhido de forma significativa, facilitando a compreensão do código.</p>

## OPERADORES

<p align="justify">Os operadores em uma linguagem de programação são símbolos utilizados para realizar operações com valores e variáveis. Eles permitem executar cálculos, comparações e tomar decisões dentro do programa.</p>

### OPERADORES ARITMÉTICOS

<p align="justify">Os operadores aritméticos são utilizados para realizar cálculos matemáticos em programas. Eles permitem executar operações como adição, subtração, multiplicação e divisão entre valores e variáveis.</p>

<div style="
background-color:#FFF5F5;
border-left:6px solid #EF5552;
padding:15px;
margin:20px 0;
border-radius:8px;
">

<center>
    <table border="1px solid">
        <tr>
            <th>Operador</th>
            <th>Função</th>
            <th>Sintaxe</th>
            <th>Exemplo</th>
            <th>Resultado</th>
        </tr>
        <tr>
            <td>+</td>
            <td>Adição</td>
            <td>a+b</td>
            <td>3+2</td>
            <td>5</td>
        </tr>
        <tr>
            <td>-</td>
            <td>Subtração</td>
            <td>a-b</td>
            <td>20-8</td>
            <td>12</td>
        </tr>
        <tr>
            <td>*</td>
            <td>Multiplicação</td>
            <td>a*b</td>
            <td>4*6</td>
            <td>24</td>
        </tr>
        <tr>
            <td>/</td>
            <td>Divisão</td>
            <td>a/b</td>
            <td>10/2</td>
            <td>5</td>
        </tr>
        <tr>
            <td>%</td>
            <td>Resto</td>
            <td>a%b</td>
            <td>10%2</td>
            <td>0</td>
        </tr>
    </table>
</center>
</div>

<p align="justify">Além dos operadores apresentados na tabela, é comum na programação de computadores, a utilização dos operadores de incremento e decremento. O operador de incremento é representado por símbolos de '+', ou seja, '++'. Ele tem como finalidade aumentar o valor da variável em 1 unidade. Segue um exemplo da utilização desse operador:</p>

```c
int x = 5;
x++;
printf("%d",x);
```

<p align="justify">No código acima, a variável x é inicializada com o valor 5. Em seguida, o operador de incremento (++) é aplicado à variável, adicionando 1 ao seu valor atual. Dessa forma, x passa a armazenar o valor 6, que é exibido na tela pela função printf(). O operador de decremento, por sua vez, diminui o valor da variável em 1 unidade. Segue um exemplo da utilização desse operador:</p>

```c
int x = 5;
x--;
printf("%d",x);
```
<p align="justify">Para o exemplo acima, a variável x é inicializada com o valor 5. Em seguida, o operador de decremento (--) é aplicado a variável, subtraindo 1 ao seu valor atual. Dessa forma, x passa a armazenar o valor 4, que é exibido na tela pela função printf().</p>

### OPERADORES RELACIONAIS

Os operadores relacionais são usados para comparar valores.

| Operador | Significado |
|---|---|
| == | Igual |
| != | Diferente |
| > | Maior |
| < | Menor |
| >= | Maior ou igual |
| <= | Menor ou igual |

O resultado de uma comparação será:

verdadeiro (true)
falso (false)
Principais operadores relacionais
Operador	Significado	Exemplo
==	Igual	x == y
!=	Diferente	x != y
>	Maior que	x > y
<	Menor que	x < y
>=	Maior ou igual	x >= y
<=	Menor ou igual	x <= y
Exemplos
Igualdade (==)
if (senha == 1234) {
    printf("Acesso permitido");
}
Diferente (!=)
if (x != 0) {
    printf("Valor válido");
}
Maior e menor
if (idade >= 18) {
    printf("Maior de idade");
}

### OPERADORES LÓGICOS

Os operadores lógicos são usados para combinar ou inverter condições. Eles geralmente são utilizados em estruturas condicionais como if, while e for.

| Operador | Função |
|---|---|
| && | E lógico |
| \|\| | OU lógico |
| ! | NÃO lógico |


Principais operadores lógicos em C
Operador	Significado	Exemplo
&&	E (AND)	idade >= 18 && idade <= 60
`		`
!	NÃO (NOT)	!(x > 10)
Exemplos
Operador AND (&&)

Retorna verdadeiro somente se todas as condições forem verdadeiras.

int idade = 20;

if (idade >= 18 && idade <= 60) {
    printf("Idade permitida");
}
Operador OR (||)

Retorna verdadeiro se pelo menos uma condição for verdadeira.

int nota = 5;
int frequencia = 80;

if (nota >= 7 || frequencia >= 75) {
    printf("Aluno aprovado");
}
Operador NOT (!)

Inverte o valor lógico da condição.

int x = 10;

if (!(x < 5)) {
    printf("Condição verdadeira");
}

# Estrutura Básica de um Programa em C

Exemplo simples:

```c
#include <stdio.h>

int main() {
    printf("Olá, mundo!\n");
    return 0;
}

```

Explicação
#include <stdio.h> → biblioteca de entrada e saída
main() → função principal do programa
printf() → imprime texto na tela
return 0; → indica que o programa terminou corretamente

Estruturas de Controle
If/Else
if (idade >= 18) {
    printf("Maior de idade");
} else {
    printf("Menor de idade");
}
Laço for
for(int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
Laço while
while(x < 10) {
    x++;
}
Funções

Exemplo:

int soma(int a, int b) {
    return a + b;
}

Uso:

int resultado = soma(5, 3);



Estruturas de Controle
If/Else
if (idade >= 18) {
    printf("Maior de idade");
} else {
    printf("Menor de idade");
}
Laço for
for(int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
Laço while
while(x < 10) {
    x++;
}
Funções

Exemplo:

int soma(int a, int b) {
    return a + b;
}

Uso:

int resultado = soma(5, 3);



### Exemplo

```c
if(idade >= 18 && idade <= 60) {
    printf("Faixa permitida");
}
```

# Estruturas de Controle Sequenciais

## O que são?

As estruturas sequenciais executam comandos em sequência, linha após linha.

## Entrada e Saída de Dados

### Entrada de Dados

```c
scanf("%d", &idade);
```

### Saída de Dados

```c
printf("Idade: %d", idade);
```

## Exemplo Completo

```c
#include <stdio.h>

int main() {

    int numero1, numero2, soma;

    printf("Digite o primeiro numero: ");
    scanf("%d", &numero1);

    printf("Digite o segundo numero: ");
    scanf("%d", &numero2);

    soma = numero1 + numero2;

    printf("Resultado: %d", soma);

    return 0;
}
```

## Características

- execução linear;
- comandos executados em ordem;
- base para programas mais complexos.

# Estruturas Condicionais

As estruturas condicionais permitem que o programa tome decisões.

## Estrutura if

```c
if(media >= 6) {
    printf("Aprovado");
}
```

---

## Estrutura if else

```c
if(media >= 6) {
    printf("Aprovado");
} else {
    printf("Reprovado");
}
```

---

## Estrutura else if

```c
if(media >= 9) {
    printf("Excelente");
} else if(media >= 6) {
    printf("Aprovado");
} else {
    printf("Reprovado");
}
```

---

## Estrutura switch

```c
switch(opcao) {

    case 1:
        printf("Cadastrar");
        break;

    case 2:
        printf("Excluir");
        break;

    default:
        printf("Opcao invalida");
}
```

---

## Aplicações

- validações;
- menus;
- sistemas de decisão;
- verificações lógicas.

---

# Estruturas de Repetição

## O que são?

As estruturas de repetição executam blocos de código várias vezes.

---

## Estrutura for

```c
for(int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```

---

## Estrutura while

```c
int contador = 1;

while(contador <= 5) {
    printf("%d\n", contador);
    contador++;
}
```

---

## Estrutura do while

```c
int numero;

do {
    printf("Digite um numero positivo: ");
    scanf("%d", &numero);

} while(numero < 0);
```

---

## Aplicações

- contagens;
- menus repetitivos;
- processamento de listas;
- validações.

---

## Conclusão

As estruturas de repetição automatizam tarefas repetitivas dentro dos programas.

# Funções e Procedimentos

## O que são?

Funções permitem dividir programas em pequenas partes reutilizáveis.

---

## Função com Retorno

```c
int somar(int a, int b) {
    return a + b;
}
```

---

## Utilizando a Função

```c
int resultado;

resultado = somar(5, 3);

printf("%d", resultado);
```

---

## Procedimentos

Procedimentos são funções sem retorno.

```c
void mensagem() {
    printf("Bem-vindo!");
}
```

---

## Vantagens

- reutilização de código;
- organização;
- manutenção facilitada;
- modularização.

---

## Conclusão

Funções e procedimentos tornam os programas mais organizados e profissionais.

# Estruturas Homogêneas — Vetores e Matrizes

## Vetores

Vetores armazenam múltiplos valores do mesmo tipo.

## Exemplo de Vetor

```c
int numeros[5];
```

## Atribuindo Valores

```c
numeros[0] = 10;
numeros[1] = 20;
```

## Percorrendo Vetores

```c
for(int i = 0; i < 5; i++) {
    printf("%d\n", numeros[i]);
}
```

## Matrizes

Matrizes são estruturas bidimensionais.

## Exemplo de Matriz

```c
int matriz[3][3];
```

## Percorrendo Matrizes

```c
for(int linha = 0; linha < 3; linha++) {

    for(int coluna = 0; coluna < 3; coluna++) {

        printf("%d ", matriz[linha][coluna]);

    }

}
```

## Aplicações

- armazenamento de dados;
- tabelas;
- jogos;
- sistemas matemáticos.

## Conclusão

## ESTRUTURAS HOMOGÊNEAS - VETORES E MATRIZES

<p align="justify">Estruturas homogêneas são estruturas de dados capazes de armazenar vários valores do mesmo tipo utilizando um único nome de variável. Em Linguagem C, as principais estruturas homogêneas são os vetores e as matrizes. Essas estruturas facilitam o armazenamento e a manipulação de grandes quantidades de dados, evitando a criação de diversas variáveis individuais.</p>

### VETORES

Um vetor é uma estrutura de dados unidimensional que permite armazenar vários elementos do mesmo tipo em posições consecutivas de memória.

Cada posição do vetor é identificada por um índice, que sempre inicia em 0.

Representação
Índice	0	1	2	3	4
Valor	10	20	30	40	50

Neste exemplo:

vetor[0] contém o valor 10;
vetor[1] contém o valor 20;
vetor[2] contém o valor 30;
vetor[3] contém o valor 40;
vetor[4] contém o valor 50.
Declaração de Vetores
Sintaxe
tipo nome_do_vetor[tamanho];
Exemplo
int notas[5];

Nesse exemplo:

O vetor chama-se notas;
Pode armazenar 5 valores inteiros;
As posições vão de 0 até 4.
Inicialização de Vetores
Inicializando com valores
int notas[5] = {8, 7, 10, 9, 6};
Inicialização automática
int numeros[] = {10, 20, 30, 40};

O compilador calcula automaticamente o tamanho do vetor.

Acessando Elementos
#include <stdio.h>

int main() {

    int notas[3] = {7, 8, 9};

    printf("%d\n", notas[0]);
    printf("%d\n", notas[1]);
    printf("%d\n", notas[2]);

    return 0;
}
Saída
7
8
9
Inserindo Dados em um Vetor
#include <stdio.h>

int main() {

    int idade[3];

    printf("Digite a primeira idade: ");
    scanf("%d", &idade[0]);

    printf("Digite a segunda idade: ");
    scanf("%d", &idade[1]);

    printf("Digite a terceira idade: ");
    scanf("%d", &idade[2]);

    return 0;
}
Percorrendo Vetores com Estrutura de Repetição
#include <stdio.h>

int main() {

    int numeros[5] = {10, 20, 30, 40, 50};

    for(int i = 0; i < 5; i++) {
        printf("%d\n", numeros[i]);
    }

    return 0;
}
Situação-Problema

Uma escola deseja armazenar as notas de 30 alunos para calcular posteriormente a média da turma. Criar um vetor é mais eficiente do que declarar 30 variáveis diferentes.

float notas[30];
Matrizes
Conceito

Uma matriz é uma estrutura homogênea bidimensional, organizada em linhas e colunas.

Pode ser visualizada como uma tabela.

Representação
	Coluna 0	Coluna 1	Coluna 2
Linha 0	10	20	30
Linha 1	40	50	60
Linha 2	70	80	90

Para acessar um elemento da matriz utilizamos:

matriz[linha][coluna]

Exemplo:

matriz[1][2]

Resultado:

60
Declaração de Matrizes
Sintaxe
tipo nome_da_matriz[linhas][colunas];
Exemplo
int notas[5][4];

Nesse exemplo:

5 linhas;
4 colunas;
Total de 20 posições.
Inicialização de Matrizes
int matriz[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};

Representação:

	0	1	2
0	10	20	30
1	40	50	60
Acessando Elementos da Matriz
#include <stdio.h>

int main() {

    int matriz[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("%d\n", matriz[0][1]);
    printf("%d\n", matriz[1][2]);

    return 0;
}
Saída
20
60
Inserindo Dados em uma Matriz
#include <stdio.h>

int main() {

    int matriz[2][2];

    for(int i = 0; i < 2; i++) {

        for(int j = 0; j < 2; j++) {

            printf("Digite um valor: ");
            scanf("%d", &matriz[i][j]);

        }

    }

    return 0;
}
Exibindo os Valores da Matriz
#include <stdio.h>

int main() {

    int matriz[2][2] = {
        {10, 20},
        {30, 40}
    };

    for(int i = 0; i < 2; i++) {

        for(int j = 0; j < 2; j++) {

            printf("%d ", matriz[i][j]);

        }

        printf("\n");

    }

    return 0;
}
Saída
10 20
30 40
Situação-Problema

Um hotel deseja armazenar a ocupação dos quartos em um andar. Cada linha representa um corredor e cada coluna representa um quarto.

int ocupacao[5][10];

Onde:

5 corredores;
10 quartos por corredor;
Cada posição pode armazenar informações como ocupado (1) ou livre (0).
Diferenças entre Vetores e Matrizes
Característica	Vetor	Matriz
Dimensão	1 dimensão	2 dimensões
Organização	Lista de elementos	Linhas e colunas
Acesso	vetor[i]	matriz[i][j]
Estrutura de repetição	1 laço	2 laços aninhados
Aplicações	Notas, idades, vendas	Tabelas, mapas, assentos, planilhas
Boas Práticas

✔ Utilize nomes significativos para os vetores e matrizes.

✔ Evite acessar posições inexistentes.

✔ Utilize constantes para definir tamanhos quando possível.

✔ Utilize estruturas de repetição para percorrer os elementos.

✔ Sempre valide os dados informados pelo usuário.

Resumo
Vetor: estrutura homogênea unidimensional utilizada para armazenar vários dados do mesmo tipo.
Matriz: estrutura homogênea bidimensional organizada em linhas e colunas.
Os índices em C sempre começam em 0.
Vetores utilizam um índice (vetor[i]).
Matrizes utilizam dois índices (matriz[i][j]).
Estruturas de repetição são amplamente utilizadas para percorrer vetores e matrizes.
São fundamentais para o desenvolvimento de programas que manipulam grandes quantidades de dados de forma organizada e eficiente.