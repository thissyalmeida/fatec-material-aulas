# 11. Memória e Sistema Binário

## Abertura

Computadores representam informações por estados físicos que podem ser modelados como bits. Compreender binário, bytes, endereços e representação de dados ajuda a entender limites de tipos, ponteiros e erros de memória.

## Objetivos

- converter números inteiros positivos entre decimal e binário;
- reconhecer bit, byte e sistema hexadecimal;
- compreender memória e endereçamento em nível introdutório;
- relacionar tipos de dados a representações e limites;
- reconhecer riscos de acesso indevido à memória.

## 11.1 Bit e byte

- **Bit:** unidade binária, com dois estados representados como 0 e 1.
- **Byte:** unidade de armazenamento composta, nas plataformas C modernas comuns, por 8 bits; formalmente, C define byte como unidade de armazenamento de `sizeof(char)`, e `CHAR_BIT` informa quantos bits possui.
- **Endereço:** identificador usado para localizar um objeto na memória durante a execução.

## 11.2 Conversão decimal para binário

Divida repetidamente o número por 2 e anote os restos. Leia os restos de baixo para cima.

Exemplo: 13 decimal.

| Divisão | Quociente | Resto |
|---|---:|---:|
| 13 / 2 | 6 | 1 |
| 6 / 2 | 3 | 0 |
| 3 / 2 | 1 | 1 |
| 1 / 2 | 0 | 1 |

Logo, \(13_{10}=1101_2\).

## 11.3 Binário para decimal

Cada posição representa uma potência de 2:

\(1101_2 = 1\times 2^3 + 1\times 2^2 + 0\times 2^1 + 1\times 2^0 = 13\).

## 11.4 Hexadecimal

O sistema hexadecimal usa os símbolos 0–9 e A–F. Um dígito hexadecimal representa quatro bits, então dois dígitos hexadecimais correspondem a oito bits. É uma forma compacta de escrever sequências binárias.

## 11.5 Memória e variáveis

Uma variável em C possui tipo, tamanho e tempo de vida. O endereço pode ser obtido com `&` para objetos apropriados. Ponteiros armazenam endereços, mas devem apontar para objetos válidos antes de serem dereferenciados.

```c
int idade = 20;
int *p = &idade;
printf("%d\n", *p);  // lê o valor de idade por meio de p
```

O exemplo pressupõe que `p` aponta para `idade`, que continua existindo durante o uso.

## 11.6 Limites e representação

Tipos inteiros têm limites definidos pela implementação e pelo tipo escolhido. Consulte `<limits.h>` e use tipos de tamanho apropriado quando a tarefa exigir. Não assuma que `int` possui sempre o mesmo tamanho em todas as plataformas.

## Erros comuns

- ler bits da direita para a esquerda ao converter binário para decimal;
- confundir bit com byte;
- presumir tamanho fixo de todos os tipos;
- usar ponteiro não inicializado;
- acessar memória depois que o objeto deixou de existir;
- escrever fora dos limites de um vetor.

## Prática guiada

Converta 18 e 27 para binário e confirme os resultados convertendo-os de volta para decimal. Depois, explique em suas palavras o que significa o ponteiro `p` no exemplo.

## Exercícios

1. Defina bit.
2. Explique a diferença entre bit e byte.
3. Converta 5 para binário.
4. Converta 12 para binário.
5. Converta 19 para binário.
6. Converta `1010₂` para decimal.
7. Converta `1111₂` para decimal.
8. Converta `10000₂` para decimal.
9. Explique por que hexadecimal é útil.
10. Quantos bits há em dois bytes de 8 bits?
11. Identifique as potências de 2 em `1011₂`.
12. Explique o que é endereço de memória.
13. Qual o papel do operador `&` no exemplo C?
14. O que significa `*p` quando `p` é um ponteiro válido?
15. Por que não se deve dereferenciar ponteiro não inicializado?
16. Explique o risco de escrever além de um vetor.
17. Pesquise os limites de `int` no compilador usado e documente como consultou.
18. Represente o decimal 31 em binário e hexadecimal.
19. Explique por que o tamanho de um tipo deve ser verificado quando importa.
20. Descreva duas práticas para reduzir erros de memória em C.

## Gabarito comentado

1. Unidade binária representada por 0 ou 1.
2. Byte é uma unidade de armazenamento composta por bits; em plataformas comuns, 8 bits.
3. `101₂`.
4. `1100₂`.
5. `10011₂`.
6. 10.
7. 15.
8. 16.
9. É compacto e cada dígito corresponde a quatro bits.
10. 16 bits.
11. `1×8 + 0×4 + 1×2 + 1×1 = 11`.
12. Identificador/localizador de um objeto na memória durante a execução.
13. Obtém o endereço de `idade`.
14. Acessa o objeto apontado por `p`.
15. O endereço pode ser inválido; o comportamento é indefinido.
16. Pode corromper dados e causar comportamento indefinido.
17. Depende da plataforma; consultar `INT_MIN` e `INT_MAX` em `<limits.h>`.
18. `11111₂`, `1F₁₆`.
19. Tipos e plataformas podem diferir em tamanho e limites.
20. Inicializar ponteiros, validar índices, respeitar o tempo de vida dos objetos e usar avisos do compilador.

## Resumo e referências

Binário representa valores por potências de dois; memória armazena objetos e ponteiros permitem referenciar endereços válidos.

Referências: ISO C; cppreference.com; documentação do compilador utilizado.
