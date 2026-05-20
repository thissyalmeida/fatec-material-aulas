Introdução à Linguagem C

A linguagem C é uma das linguagens de programação mais importantes da história da computação. Ela foi criada por Dennis Ritchie na década de 1970 nos Bell Labs.

Características da Linguagem C
Linguagem de baixo e médio nível
Muito rápida e eficiente
Amplamente usada em:
Sistemas operacionais
Jogos
Sistemas embarcados
Compiladores

O sistema operacional Unix foi desenvolvido principalmente em C.

Estrutura Básica de um Programa em C

Exemplo simples:

#include <stdio.h>

int main() {
    printf("Olá, mundo!\n");
    return 0;
}
Explicação
#include <stdio.h> → biblioteca de entrada e saída
main() → função principal do programa
printf() → imprime texto na tela
return 0; → indica que o programa terminou corretamente
Variáveis em C

As variáveis armazenam dados na memória.

Exemplo:

int idade = 20;
float altura = 1.75;
char letra = 'A';
Tipos básicos
Tipo	Descrição
int	números inteiros
float	números decimais
char	caracteres
double	números decimais com maior precisão
Operadores
Aritméticos
+  -  *  /  %
Relacionais
==  !=  >  <  >=  <=
Lógicos
&&  ||  !
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
Ponteiros (conceito importante)

Ponteiros armazenam endereços de memória.

int x = 10;
int *p = &x;
&x → endereço de x
*p → valor armazenado no endereço
Vantagens da Linguagem C
Alto desempenho
Controle de memória
Base para várias linguagens:
C++
Java
C#
Desvantagens
Gerenciamento manual de memória
Menos segura que linguagens modernas
Sintaxe pode ser difícil para iniciantes
Onde Programar em C

Você pode usar:

Code::Blocks
Dev-C++
Visual Studio Code
GCC (compilador)
Compilando um Programa

No terminal:

gcc programa.c -o programa
./programa
Conclusão

A linguagem C é fundamental para aprender programação e entender como os computadores funcionam internamente. Ela continua sendo muito utilizada no desenvolvimento de sistemas e aplicações de alto desempenho.

transformar esse conteúdo em um arquivo md
# Introdução à Linguagem C

A linguagem **C** é uma das linguagens de programação mais importantes da história da computação. Ela foi criada por Dennis Ritchie na década de 1970 nos Bell Labs.

## Características da Linguagem C
- Linguagem de baixo e médio nível
- Muito rápida e eficiente
- Amplamente usada em:
  - Sistemas operacionais
  - Jogos
  - Sistemas embarcados
  - Compiladores

O sistema operacional Unix foi desenvolvido principalmente em C.

---

# Estrutura Básica de um Programa em C

Exemplo simples:

```c
#include <stdio.h>

int main() {
    printf("Olá, mundo!\n");
    return 0;
}
Explicação
#include <stdio.h> → biblioteca de entrada e saída
main() → função principal do programa
printf() → imprime texto na tela
return 0; → indica que o programa terminou corretamente
Variáveis em C

As variáveis armazenam dados na memória.

Exemplo:

int idade = 20;
float altura = 1.75;
char letra = 'A';
Tipos básicos
Tipo	Descrição
int	números inteiros
float	números decimais
char	caracteres
double	números decimais com maior precisão
Operadores
Aritméticos
+  -  *  /  %
Relacionais
==  !=  >  <  >=  <=
Lógicos
&&  ||  !
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
Ponteiros (conceito importante)

Ponteiros armazenam endereços de memória.

int x = 10;
int *p = &x;
&x → endereço de x
*p → valor armazenado no endereço
Vantagens da Linguagem C
Alto desempenho
Controle de memória
Base para várias linguagens:
C++
Java
C#
Desvantagens
Gerenciamento manual de memória
Menos segura que linguagens modernas
Sintaxe pode ser difícil para iniciantes
Onde Programar em C

Você pode usar:

Code::Blocks
Dev-C++
Visual Studio Code
GCC (compilador)
Compilando um Programa

No terminal:

gcc programa.c -o programa
./programa
Conclusão

A linguagem C é fundamental para aprender programação e entender como os computadores funcionam internamente. Ela continua sendo muito utilizada no desenvolvimento de sistemas e aplicações de alto desempenho.

LINGUAGEM C

# Tipos de Dados, Variáveis e Operadores Lógicos

## O que são Tipos de Dados?

Os tipos de dados definem quais valores uma variável pode armazenar.

Na Linguagem C, os principais tipos são:

| Tipo | Descrição |
|---|---|
| int | Números inteiros |
| float | Números reais |
| char | Caracteres |
| double | Números reais com maior precisão |

---

## Variáveis

Variáveis são espaços reservados na memória para armazenar informações.

### Exemplo

```c
int idade = 20;
float altura = 1.75;
char letra = 'A';
```

---

## Regras para criação de variáveis

- não iniciar com números;
- não utilizar espaços;
- não utilizar caracteres especiais;
- utilizar nomes significativos.

---

## Operadores Aritméticos

| Operador | Função |
|---|---|
| + | Soma |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| % | Resto da divisão |

---

## Operadores Relacionais

| Operador | Significado |
|---|---|
| == | Igual |
| != | Diferente |
| > | Maior |
| < | Menor |
| >= | Maior ou igual |
| <= | Menor ou igual |

---

## Operadores Lógicos

| Operador | Função |
|---|---|
| && | E lógico |
| \|\| | OU lógico |
| ! | NÃO lógico |

### Exemplo

```c
if(idade >= 18 && idade <= 60) {
    printf("Faixa permitida");
}
```

---

## Conclusão

Os tipos de dados, variáveis e operadores são fundamentais para o desenvolvimento de algoritmos e programas em Linguagem C.

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

## Conclusão

As estruturas condicionais tornam os programas mais inteligentes e dinâmicos.

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