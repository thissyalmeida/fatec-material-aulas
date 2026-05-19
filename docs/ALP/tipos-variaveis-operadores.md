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