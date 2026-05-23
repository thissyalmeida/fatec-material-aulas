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

| Operador | Função |
|---|---|
| + | Soma |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| % | Resto da divisão |

Operadores Aritméticos na Linguagem C



Principais Operadores Aritméticos
Operador	Função	Exemplo
+	Adição	a + b
-	Subtração	a - b
*	Multiplicação	a * b
/	Divisão	a / b
%	Resto da divisão	a % b
Exemplos em C
Adição
int soma = 10 + 5;
printf("%d", soma);

Resultado:

15
Subtração
int resultado = 20 - 8;
printf("%d", resultado);

Resultado:

12
Multiplicação
int mult = 4 * 3;
printf("%d", mult);

Resultado:

12
Divisão
int divisao = 10 / 2;
printf("%d", divisao);

Resultado:

5
Resto da Divisão (%)

O operador % retorna o resto de uma divisão inteira.

int resto = 10 % 3;
printf("%d", resto);

Resultado:

1
Operadores de Incremento e Decremento
Incremento (++)

Aumenta o valor da variável em 1.

int x = 5;
x++;

Resultado:

x = 6
Decremento (--)

Diminui o valor da variável em 1.

int x = 5;
x--;

Resultado:

x = 4
Observação Importante

Em divisões entre números inteiros, a linguagem C retorna apenas a parte inteira do resultado.

Exemplo:

int resultado = 5 / 2;
printf("%d", resultado);

Resultado:

2

Para obter valores decimais, utilize float ou double.

Conclusão

Os operadores aritméticos são fundamentais na programação, pois permitem realizar cálculos e manipular valores dentro do programa, sendo amplamente utilizados em sistemas, jogos, aplicativos e algoritmos matemáticos.

### OPERADORES RELACIONAIS

| Operador | Significado |
|---|---|
| == | Igual |
| != | Diferente |
| > | Maior |
| < | Menor |
| >= | Maior ou igual |
| <= | Menor ou igual |

Operadores Relacionais

Os operadores relacionais são usados para comparar valores.

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
Resumindo
Operadores relacionais → fazem comparações.
Operadores lógicos → combinam condições.
Eles são essenciais para a tomada de decisão em programas.

### OPERADORES LÓGICOS

| Operador | Função |
|---|---|
| && | E lógico |
| \|\| | OU lógico |
| ! | NÃO lógico |

Operadores Lógicos

Os operadores lógicos são usados para combinar ou inverter condições. Eles geralmente são utilizados em estruturas condicionais como if, while e for.

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

---

# Estruturas de Controle Sequenciais

## O que são?

As estruturas sequenciais executam comandos em sequência, linha após linha.

---

## Entrada e Saída de Dados

### Entrada de Dados

```c
scanf("%d", &idade);
```

### Saída de Dados

```c
printf("Idade: %d", idade);
```

---

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

---

## Características

- execução linear;
- comandos executados em ordem;
- base para programas mais complexos.

---

## Conclusão

As estruturas sequenciais representam a forma mais simples de controle de execução de um programa.

# Estruturas Condicionais

## O que são?

As estruturas condicionais permitem que o programa tome decisões.

---

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

---

## Exemplo de Vetor

```c
int numeros[5];
```

---

## Atribuindo Valores

```c
numeros[0] = 10;
numeros[1] = 20;
```

---

## Percorrendo Vetores

```c
for(int i = 0; i < 5; i++) {
    printf("%d\n", numeros[i]);
}
```

---

## Matrizes

Matrizes são estruturas bidimensionais.

---

## Exemplo de Matriz

```c
int matriz[3][3];
```

---

## Percorrendo Matrizes

```c
for(int linha = 0; linha < 3; linha++) {

    for(int coluna = 0; coluna < 3; coluna++) {

        printf("%d ", matriz[linha][coluna]);

    }

}
```

---

## Aplicações

- armazenamento de dados;
- tabelas;
- jogos;
- sistemas matemáticos.

---

## Conclusão

Vetores e matrizes são fundamentais para manipulação de grandes conjuntos de dados.