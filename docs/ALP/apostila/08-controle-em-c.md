# 8. Controle em C: Condições e Laços

## Abertura

As estruturas condicionais e de repetição permitem que um programa C tome decisões e processe conjuntos de dados. Este capítulo conecta as ideias dos capítulos anteriores à sintaxe da linguagem.

## Objetivos

- implementar `if`, `else if`, `else` e `switch`;
- usar `while`, `do-while` e `for`;
- combinar condições e laços;
- validar entradas e testar limites.

## 8.1 Condicionais

```c
if (idade >= 18) {
    printf("Maior de idade\n");
} else {
    printf("Menor de idade\n");
}
```

As expressões condicionais em C são avaliadas como falso ou verdadeiro. Em programas didáticos, use parênteses e blocos `{}` mesmo quando houver uma única instrução.

## 8.2 `switch`

```c
switch (opcao) {
    case 1:
        printf("Cadastrar\n");
        break;
    case 2:
        printf("Consultar\n");
        break;
    default:
        printf("Opcao invalida\n");
}
```

`switch` é adequado a opções discretas; não substitui diretamente comparações por intervalos de números reais.

## 8.3 Laços

```c
for (int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```

```c
int n = 1;
while (n <= 5) {
    printf("%d\n", n);
    n++;
}
```

`do-while` executa o bloco antes de testar a condição e exige ponto e vírgula após `while (condicao);`.

## 8.4 Combinação de estruturas

Exemplo: imprimir os números pares de 1 a N.

```c
#include <stdio.h>

int main(void) {
    int n;

    printf("Informe N (>= 1): ");
    if (scanf("%d", &n) != 1 || n < 1) {
        printf("Valor invalido.\n");
        return 1;
    }

    for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            printf("%d\n", i);
        }
    }
    return 0;
}
```

## 8.5 Tabela de rastreamento

Para `for (i=1; i<=3; i++)`, o corpo executa com `i` igual a 1, 2 e 3. Depois da atualização para 4, a condição é falsa e o laço termina.

## Erros comuns

- esquecer atualização do contador;
- colocar `;` após `if (...)`;
- esquecer `break` em `switch`;
- testar apenas valores típicos e não os limites;
- aceitar entrada inválida sem verificar retorno de `scanf`;
- construir condições impossíveis, como `x < 0 && x > 10`.

## Prática guiada

Implemente um menu de calculadora com opções de soma, subtração, multiplicação e divisão. O programa deve repetir o menu até a opção sair e impedir divisão por zero.

## Exercícios

1. Escreva `if/else` para classificar um número como par ou ímpar.
2. Escreva uma seleção encadeada para faixas de notas.
3. Use `switch` para menu de três opções.
4. Imprima de 1 a 20 com `for`.
5. Imprima de 10 a 0 com `while`.
6. Calcule soma de 1 a N.
7. Conte múltiplos de 5 entre 1 e N.
8. Leia 10 valores e conte os negativos.
9. Leia notas até um valor sentinela documentado e calcule média.
10. Faça menu repetitivo com opção de saída.
11. Explique por que um laço pode ser infinito.
12. Corrija um `switch` com queda acidental entre casos.
13. Valide que uma nota esteja entre 0 e 10.
14. Exiba tabuada usando `for`.
15. Encontre o menor entre N valores.
16. Use condição dentro de um laço para exibir apenas números ímpares.
17. Teste um algoritmo com N=1, N=0 e N negativo.
18. Escreva uma calculadora com quatro operações e divisão protegida.
19. Explique a diferença entre `while` e `do-while`.
20. Desenvolva um programa que leia números até zero e some somente os positivos.

## Gabarito comentado

1. `if (n%2==0)` par; senão ímpar.
2. Organizar faixas sem lacunas ou sobreposições.
3. Um `case` para cada opção e `default`.
4. `for (int i=1; i<=20; i++)`.
5. Iniciar em 10 e decrementar até 0.
6. Somar todos os inteiros do intervalo; validar N.
7. Contar quando `i%5==0`.
8. Incrementar contador quando valor<0.
9. Definir claramente sentinela, excluir sentinela da média e tratar quantidade zero.
10. Repetir enquanto opção não for sair.
11. Condição nunca se torna falsa ou estado não é atualizado.
12. Inserir `break` quando não houver intenção de continuar ao próximo caso.
13. `nota >= 0 && nota <= 10`.
14. Multiplicar o número por 1 a 10.
15. Inicializar com o primeiro valor e comparar os demais.
16. `if (i%2 != 0)`.
17. N=1 é válido; 0 e negativos devem ser rejeitados se a regra exigir N>=1.
18. Tratar operador inválido e divisor zero.
19. `while` testa antes; `do-while` executa pelo menos uma vez.
20. Somar apenas quando valor>0 e encerrar ao ler zero.

## Resumo e referências

As estruturas de controle definem **qual caminho** executar e **quantas vezes** executar um bloco. Teste cada caminho e cada limite.

Referência: cppreference.com, declarações de seleção e iteração em C.
