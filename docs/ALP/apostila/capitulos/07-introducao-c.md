# 7. Introdução à Linguagem C

## Abertura

Até aqui, algoritmos foram descritos independentemente de uma linguagem. Agora, vamos implementar essas ideias em C, uma linguagem compilada, estruturada e amplamente utilizada em sistemas e ensino de programação.

## Objetivos

- reconhecer a estrutura de um programa C;
- compilar e executar um arquivo-fonte;
- usar `main`, bibliotecas, instruções e comentários;
- compreender erros de compilação e mensagens básicas.

## 7.1 Estrutura mínima

```c
#include <stdio.h>

int main(void) {
    printf("Ola, mundo!\n");
    return 0;
}
```

- `#include <stdio.h>` disponibiliza declarações de entrada e saída padrão.
- `main` é o ponto de entrada convencional do programa.
- `{}` delimitam um bloco.
- `printf` exibe texto.
- `;` encerra uma instrução.
- `return 0` indica término bem-sucedido ao ambiente.

## 7.2 Compilar e executar

Salve o arquivo como `ola.c`. Em um ambiente com GCC instalado, um comando comum é:

```bash
gcc -std=c11 -Wall -Wextra -pedantic ola.c -o ola
```

Em Windows, o nome do executável pode ser `ola.exe`. Os comandos dependem do compilador e do terminal configurados.

## 7.3 Sintaxe e comentários

```c
// Comentário de uma linha

/*
   Comentário de várias linhas.
*/
```

C diferencia letras maiúsculas e minúsculas: `total`, `Total` e `TOTAL` são identificadores distintos.

## 7.4 Identificadores e boas práticas

Use nomes significativos, como `quantidade`, `mediaFinal` ou `preco_unitario`. Evite nomes sem significado e palavras reservadas. Uma variável deve ser declarada com tipo antes de ser usada.

## 7.5 Primeiro programa com cálculo

```c
#include <stdio.h>

int main(void) {
    int a = 7;
    int b = 5;
    int soma = a + b;

    printf("Soma = %d\n", soma);
    return 0;
}
```

O especificador `%d` é usado para exibir um `int`.

## 7.6 Tipos e formatos introdutórios

| Tipo | `printf` comum | `scanf` comum |
|---|---|---|
| `int` | `%d` | `%d` com `&variavel` |
| `float` | `%f` | `%f` com `&variavel` |
| `double` | `%f` | `%lf` com `&variavel` |
| `char` | `%c` | `%c` com `&variavel` |

A tabela é introdutória: conversões, arrays de caracteres e leitura de linhas exigem cuidados adicionais.

## Erros comuns

- esquecer `;`;
- omitir `#include <stdio.h>` ao usar funções de entrada/saída;
- escrever `Printf` com maiúscula;
- usar especificador incompatível com o tipo;
- tentar executar código sem compilar;
- ignorar avisos do compilador.

## Prática guiada

Crie um programa que exiba seu nome, curso e uma mensagem. Depois, acrescente duas variáveis inteiras e mostre sua soma.

## Exercícios

1. Qual é a função de `main`?
2. Para que serve `#include <stdio.h>`?
3. Por que uma instrução geralmente termina com `;`?
4. Escreva o programa “Olá, mundo!”.
5. Declare duas variáveis inteiras e calcule a soma.
6. Qual formato exibe um `int` com `printf`?
7. Diferencie erro de sintaxe e erro lógico.
8. O que significa diferenciar maiúsculas de minúsculas?
9. Corrija um programa que omite `;` após `printf`.
10. Escreva comentários para explicar três linhas de código.
11. Declare uma variável `double` para armazenar uma média.
12. Escreva programa que exiba um número e seu dobro.
13. Explique o papel de `return 0`.
14. Sugira nomes melhores para `x`, `y` e `z` em um cálculo de preço.
15. Compile um programa com `-Wall -Wextra` e interprete um aviso.
16. Escreva programa que calcule a área de um quadrado.
17. Explique por que `printf("%d", valorDouble)` é incorreto.
18. Crie um programa com três instruções sequenciais.
19. Diferencie código-fonte e executável.
20. Documente os passos para compilar e executar seu primeiro programa.

## Gabarito comentado

1. Ponto de entrada convencional da execução.
2. Inclui declarações da biblioteca padrão de entrada/saída.
3. Para delimitar o fim da instrução.
4. Código mínimo apresentado neste capítulo.
5. `int a=...; int b=...; printf("%d", a+b);`.
6. `%d`.
7. Sintaxe viola regras da linguagem; lógica produz resultado errado apesar de compilar.
8. `nota` e `Nota` são nomes diferentes.
9. Inserir `;` no fim da instrução.
10. Comentários devem esclarecer intenção, não repetir o óbvio.
11. `double media;`.
12. Ler ou definir número, calcular dobro e exibir ambos.
13. Indica o status de encerramento ao ambiente.
14. `precoUnitario`, `quantidade`, `valorTotal`.
15. Avisos indicam possíveis problemas e devem ser analisados.
16. `area = lado * lado`.
17. O especificador não corresponde ao tipo esperado.
18. Instruções completas em ordem.
19. Fonte é texto C; executável é artefato gerado pelo processo de compilação/linkedição.
20. Salvar, compilar, corrigir mensagens e executar.

## Resumo e referências

**Fonte C → compilador → executável → execução e testes.**

Referências: ISO C (padrões C11/C17); cppreference.com; documentação do compilador utilizado.
