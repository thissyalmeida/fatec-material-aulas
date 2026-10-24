# 9. Funções e Modularização

## Abertura

À medida que o programa cresce, concentrar toda a lógica em `main()` dificulta leitura, testes e manutenção. Funções permitem dividir o problema em unidades com responsabilidades claras.

!!! abstract "Objetivos de aprendizagem"

    - declarar, definir e chamar funções;
    - diferenciar parâmetros e argumentos;
    - utilizar retorno e `void`;
    - compreender escopo e protótipos;
    - passar valores e, em situações específicas, endereços.

## 9.1 Conceitos

- **Declaração/protótipo:** informa ao compilador nome, retorno e parâmetros.
- **Definição:** contém o corpo da função.
- **Chamada:** solicita a execução.
- **Parâmetro:** variável declarada na função.
- **Argumento:** valor fornecido na chamada.

## 9.2 Função com retorno

```c
double calcularMedia(double n1, double n2) {
    return (n1 + n2) / 2.0;
}
```

Chamada: `media = calcularMedia(8.0, 6.0);`.

## 9.3 Função `void`

Uma função `void` não retorna um valor ao chamador:

```c
void mostrarLinha(void) {
    printf("----------------\n");
}
```

## 9.4 Programa modular

```c
#include <stdio.h>

double calcularMedia(double n1, double n2);

int main(void) {
    double media = calcularMedia(8.0, 6.0);
    printf("Media: %.2f\n", media);
    return 0;
}

double calcularMedia(double n1, double n2) {
    return (n1 + n2) / 2.0;
}
```

## 9.5 Escopo

Variáveis locais são acessíveis no bloco em que foram declaradas. Evite variáveis globais desnecessárias: elas aumentam o acoplamento e tornam o comportamento mais difícil de acompanhar.

## 9.6 Alterar valores do chamador

Em C, argumentos são passados por valor. Para que uma função altere uma variável do chamador, pode-se passar seu endereço por meio de um ponteiro. O capítulo deve ser acompanhado de explicação de ponteiros antes de usar esse recurso em programas maiores.

```c
void duplicar(int *valor) {
    if (valor != NULL) {
        *valor = *valor * 2;
    }
}
```

Uso: `duplicar(&numero);`. `&numero` fornece o endereço; `*valor` acessa o objeto apontado. O ponteiro deve ser válido ou `NULL`.

!!! warning "Erros comuns: atenção a estes pontos"

    - chamar função sem declaração visível;
    - declarar retorno diferente do valor retornado;
    - esquecer `return` em função que deve produzir resultado;
    - confundir parâmetro e argumento;
    - depender de variável global sem necessidade;
    - desreferenciar ponteiro inválido.

!!! tip "Prática guiada"

    Crie funções para somar, subtrair, multiplicar e dividir dois números. A função de divisão deve sinalizar divisor zero por uma estratégia explícita, como retornar um indicador de sucesso e preencher um parâmetro de saída.

## Exercícios

1. O que é modularização?
2. Diferencie protótipo e definição.
3. Diferencie parâmetro e argumento.
4. Escreva função que retorna o quadrado de um inteiro.
5. Escreva função que retorna o maior de dois inteiros.
6. Crie função `void` que exibe uma mensagem.
7. Escreva função que converte Celsius para Fahrenheit.
8. Explique o propósito de `return`.
9. O que é uma variável local?
10. Por que funções pequenas facilitam testes?
11. Crie função que calcule a média de três notas.
12. Crie função que informe se um inteiro é par.
13. Escreva protótipo para uma função que recebe dois `double` e retorna `double`.
14. Identifique o erro em uma função `int` sem retorno em todos os caminhos.
15. Reorganize um programa monolítico em três funções.
16. Explique passagem por valor em C.
17. Para que servem `&` e `*` em uma chamada com ponteiro?
18. Crie função que valide uma nota entre 0 e 10.
19. Projete funções para um conversor de unidades.
20. Teste uma função com valores comuns, limites e casos inválidos.

!!! success "Gabarito comentado"

    1. Dividir um sistema em componentes menores e coesos.
    2. Protótipo anuncia a interface; definição implementa o corpo.
    3. Parâmetro é declarado; argumento é fornecido na chamada.
    4. `int quadrado(int x) { return x*x; }`.
    5. Comparar os valores e retornar o maior.
    6. `void mensagem(void) { printf("Ola\n"); }`.
    7. `return c * 9.0/5.0 + 32.0;`.
    8. Encerra a função e, quando aplicável, devolve valor.
    9. Existe dentro do escopo em que foi declarada.
    10. Entradas e resultados podem ser testados isoladamente.
    11. Somar notas e dividir por `3.0`.
    12. Retornar `x%2==0`.
    13. `double calcular(double a, double b);`.
    14. Algum caminho não devolve o tipo esperado.
    15. Separar entrada, cálculo e apresentação, por exemplo.
    16. A função recebe uma cópia do valor.
    17. `&` obtém endereço; `*` declara/dereferencia ponteiro conforme o contexto.
    18. Retornar verdadeiro se `nota>=0 && nota<=10`.
    19. Separar conversão, validação e exibição.
    20. Usar testes normais, limites e valores que violem as regras.

## Resumo e referências

Funções organizam o programa por responsabilidade, reduzem repetição e favorecem testes.

Referência: cppreference.com, declarações e funções em C.
