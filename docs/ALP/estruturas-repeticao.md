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