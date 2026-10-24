# 3. Variáveis e Operadores

## Abertura

Programas precisam guardar dados, transformar valores e comparar resultados. Variáveis e operadores formam a base dessas operações.

## Objetivos

- declarar variáveis e atribuir valores;
- reconhecer tipos de dados básicos;
- usar operadores aritméticos, relacionais e lógicos;
- compreender precedência e conversões simples.

## 3.1 Variáveis e constantes

Uma variável é um espaço identificado por um nome cujo valor pode mudar durante a execução. Uma constante representa um valor que não deve ser alterado no contexto considerado.

Em pseudocódigo:

```text
idade <- 20
preco <- 19.90
```

Em C:

```c
int idade = 20;
float preco = 19.90f;
const int DIAS_SEMANA = 7;
```

## 3.2 Tipos básicos em C

| Tipo | Uso comum | Exemplo |
|---|---|---|
| `int` | Inteiros | `int quantidade = 4;` |
| `float` | Reais com precisão simples | `float altura = 1.72f;` |
| `double` | Reais com maior precisão | `double pi = 3.14159;` |
| `char` | Um caractere | `char inicial = 'A';` |

Textos completos normalmente são representados em C por arrays de `char`, assunto retomado nos capítulos sobre vetores e entrada/saída.

## 3.3 Operadores aritméticos

`+`, `-`, `*`, `/` e `%` (resto da divisão inteira). Em C, a expressão `7 / 2` com dois operandos inteiros resulta em `3`; já `7.0 / 2` resulta em `3.5`.

## 3.4 Operadores relacionais e lógicos

- Relacionais: `<`, `<=`, `>`, `>=`, `==`, `!=`.
- Lógicos: `&&` (E), `||` (OU), `!` (NÃO).

Em C, `=` atribui um valor e `==` compara valores. Essa distinção é essencial.

## 3.5 Precedência

Parênteses tornam a intenção explícita. Em geral, multiplicação e divisão são avaliadas antes de adição e subtração. Não dependa de suposições quando uma expressão puder ser escrita com parênteses.

## Exemplo comentado

```c
#include <stdio.h>

int main(void) {
    int quantidade = 3;
    float preco = 12.50f;
    float total = quantidade * preco;

    printf("Total: R$ %.2f\n", total);
    return 0;
}
```

O programa multiplica a quantidade pelo preço unitário e exibe duas casas decimais.

## Teste de mesa

| Expressão | Resultado |
|---|---:|
| `8 + 2 * 3` | 14 |
| `(8 + 2) * 3` | 30 |
| `7 % 2` | 1 |
| `7 / 2` (inteiros) | 3 |
| `7.0 / 2` | 3.5 |

## Erros comuns

- usar `=` no lugar de `==` em uma comparação;
- dividir inteiros esperando resultado decimal;
- usar variável sem inicializá-la;
- atribuir valor incompatível com o tipo;
- esquecer que `%` em C é aplicado a inteiros.

## Prática guiada

Leia o preço e a quantidade de um produto, calcule o total e um desconto de 10%. Exiba o total original, o desconto e o valor final. Defina nomes de variáveis que expressem o significado.

## Exercícios

1. O que é uma variável?
2. Diferencie variável e constante.
3. Escolha um tipo C para idade, preço, inicial e quantidade.
4. Calcule `5 + 3 * 4`.
5. Calcule `(5 + 3) * 4`.
6. Qual o resultado de `17 % 5`?
7. Explique a diferença entre `=` e `==`.
8. Escreva uma expressão para a média de três notas.
9. Escreva uma expressão para o dobro de um número mais cinco.
10. Traduza `idade >= 18` para uma frase.
11. Explique `nota >= 6 && frequencia >= 75`.
12. Dê um exemplo de condição com `||`.
13. Determine o resultado de `10 / 4` com inteiros em C.
14. Como obter resultado decimal em uma divisão?
15. Declare uma constante `TAXA` com valor `0.08`.
16. Calcule o total de 4 itens a R$ 7,25.
17. Escreva uma condição que verifique se um número está entre 1 e 100, inclusive.
18. Identifique o erro em `if (idade = 18)`.
19. Escreva expressões para área e perímetro de um retângulo.
20. Monte uma expressão para calcular o preço final após desconto percentual.

## Gabarito comentado

1. Nome associado a um valor armazenado.
2. A variável pode mudar; a constante deve permanecer fixa.
3. `int`, `float`/`double`, `char`, `int`.
4. 17.
5. 32.
6. 2.
7. `=` atribui; `==` compara.
8. `(n1+n2+n3)/3.0`.
9. `2*x + 5`.
10. “A idade é maior ou igual a 18”.
11. Ambas as condições precisam ser verdadeiras.
12. `nota < 0 || nota > 10`.
13. 2.
14. Usar ao menos um operando real, como `10.0 / 4`.
15. `const double TAXA = 0.08;`.
16. R$ 29,00.
17. `numero >= 1 && numero <= 100`.
18. Atribuição foi usada no lugar da comparação; use `==` quando a intenção for comparar.
19. `area=base*altura`; `perimetro=2*(base+altura)`.
20. `final = preco - preco*desconto/100`.

## Resumo e glossário

**Variável:** valor nomeado. **Tipo:** categoria de dado. **Operador:** símbolo que realiza uma operação. **Precedência:** ordem de avaliação.

Referências: documentação da linguagem C (cppreference.com); materiais da disciplina.
