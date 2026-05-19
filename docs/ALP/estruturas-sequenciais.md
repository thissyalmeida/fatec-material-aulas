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