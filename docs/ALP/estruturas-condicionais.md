# Estruturas Condicionais

## O que são?

As estruturas condicionais permitem que o programa tome decisões.

---

## Estrutura if

```c
if(media >= 6) {
    printf("Aprovado");
}
```

---

## Estrutura if else

```c
if(media >= 6) {
    printf("Aprovado");
} else {
    printf("Reprovado");
}
```

---

## Estrutura else if

```c
if(media >= 9) {
    printf("Excelente");
} else if(media >= 6) {
    printf("Aprovado");
} else {
    printf("Reprovado");
}
```

---

## Estrutura switch

```c
switch(opcao) {

    case 1:
        printf("Cadastrar");
        break;

    case 2:
        printf("Excluir");
        break;

    default:
        printf("Opcao invalida");
}
```

---

## Aplicações

- validações;
- menus;
- sistemas de decisão;
- verificações lógicas.

---

## Conclusão

As estruturas condicionais tornam os programas mais inteligentes e dinâmicos.