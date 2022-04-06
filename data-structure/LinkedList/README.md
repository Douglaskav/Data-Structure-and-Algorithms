### O que é uma lista ligada ?

Uma lista ligada é uma estrutura de dados linear que é parecida com o array, sua difereça está em que um array possui indices e uma lista ligada não, fora isso cada elemento na lista é um objeto que possui um ponteiro e um link para o proximo elemento da lista.

O primeiro elemento da lista é chamado de cabeça(head) ela é referencia para a lista ligada. O ultimo elemento da lista(node) é null.

### Quando usar uma lista ligada ?

Quando for necessario modificar constantemente essa coleção, porque para inserir e deletar em uma lista ligada é muito menos custoso do que em uma array, já para leitura é preferivel usar uma Array.

---

### Complexidades

#### Complexidade de tempo

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

#### Complexidade de espaço

O(n)

### Ref

- [Javascript-Algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
- [FindAnyAnswer](https://findanyanswer.com/when-should-we-use-linkedlist-in-java)
