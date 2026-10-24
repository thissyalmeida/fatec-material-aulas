# 10. Vetores e Matrizes

## Abertura

Quando precisamos armazenar várias notas, preços ou medições, criar uma variável separada para cada valor não é prático. Vetores e matrizes organizam coleções de elementos do mesmo tipo.

## Objetivos

- declarar e acessar vetores;
- percorrer elementos com laços;
- calcular soma, média, mínimo, máximo e realizar busca;
- compreender matrizes e laços aninhados;
- evitar acessos fora dos limites.

## 10.1 Vetores em C

```c
int valores[5] = {4, 7, 2, 9, 1};
```

Os índices começam em zero: `valores[0]` é o primeiro elemento e `valores[4]` é o último. Acessar `valores[5]` ultrapassa o limite e causa comportamento indefinido.

## 10.2 Percorrer um vetor

```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", valores[i]);
}
```

A condição `i < 5` é apropriada porque os índices válidos vão de 0 a 4.

## 10.3 Soma e média

```c
int soma = 0;
for (int i = 0; i < 5; i++) {
    soma += valores[i];
}
double media = soma / 5.0;
```

Inicialize o acumulador e use divisor real quando a média puder ter casas decimais.

## 10.4 Busca e extremos

Para encontrar o maior elemento, inicialize `maior` com o primeiro elemento e compare os restantes. Essa estratégia funciona também quando todos os valores são negativos.

## 10.5 Matrizes

Uma matriz bidimensional pode representar linhas e colunas:

```c
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

Percorra linhas e colunas com dois laços:

```c
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matriz[i][j]);
    }
    printf("\n");
}
```

## Diagrama de índices

```text
Vetor:   [4] [7] [2] [9] [1]
Índice:   0   1   2   3   4

Matriz:
          coluna 0  coluna 1  coluna 2
linha 0      1         2         3
linha 1      4         5         6
```

## Erros comuns

- começar o índice em 1 em C;
- usar `i <= tamanho` em vez de `i < tamanho`;
- esquecer de inicializar soma;
- acessar posição sem valor inicializado;
- confundir número de linhas com número de colunas;
- calcular média dividindo por zero elementos.

## Prática guiada

Leia cinco notas, armazene-as em um vetor, calcule a média e conte quantas notas estão acima da média. Teste notas iguais e notas distintas.

## Exercícios

1. O que é um vetor?
2. Por que índices de vetor em C começam em zero?
3. Declare vetor de 10 inteiros.
4. Leia cinco números e exiba-os em ordem.
5. Calcule soma de um vetor com N elementos.
6. Calcule média de seis notas.
7. Encontre maior e menor elemento.
8. Conte valores negativos.
9. Busque um valor e informe se foi encontrado.
10. Inverta a ordem de exibição de um vetor.
11. Explique o risco de acessar índice igual ao tamanho.
12. Some os elementos de duas matrizes 2×2.
13. Exiba uma matriz 3×3.
14. Calcule a soma de cada linha de uma matriz.
15. Calcule a soma da diagonal principal de uma matriz quadrada.
16. Conte quantos valores de uma matriz são pares.
17. Compare dois vetores elemento a elemento.
18. Identifique o erro em `for (i=0; i<=10; i++)` para vetor de 10 posições.
19. Planeje uma análise de notas com média, maior, menor e aprovados.
20. Crie um programa que registre vendas diárias e calcule total e média.

## Gabarito comentado

1. Coleção indexada de elementos do mesmo tipo.
2. O primeiro elemento ocupa o índice 0 por convenção da linguagem.
3. `int dados[10];`.
4. Usar laço de leitura e outro de exibição ou um único laço.
5. Inicializar soma em zero e acumular todos os elementos.
6. Somar seis notas e dividir por `6.0`.
7. Inicializar ambos com o primeiro elemento e percorrer o restante.
8. Incrementar contador quando elemento<0.
9. Percorrer até encontrar; indicar ausência se terminar sem correspondência.
10. Percorrer de `N-1` até `0`.
11. Acesso fora dos limites tem comportamento indefinido.
12. Somar elementos correspondentes em cada posição.
13. Dois laços, um para linhas e outro para colunas.
14. Reiniciar soma para cada linha.
15. Somar `matriz[i][i]`.
16. Verificar `matriz[i][j] % 2 == 0`.
17. Comparar elementos nas mesmas posições e definir regra para tamanhos.
18. Índices válidos são 0 a 9; usar `i<10`.
19. Armazenar notas, calcular estatísticas e classificar segundo regra definida.
20. Acumular vendas e dividir pela quantidade de dias registrada.

## Resumo e referências

Vetores usam um índice; matrizes usam dois. Laços permitem percorrer as coleções de forma sistemática.

Referência: cppreference.com, arrays em C.
