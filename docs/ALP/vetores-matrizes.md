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