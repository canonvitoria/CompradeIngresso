# e-Ticket

Aplicação web que simula a compra de ingressos para um evento, controlando em tempo real a disponibilidade de cada tipo de ingresso.

## Sobre o projeto

O **e-Ticket** é uma simulação de sistema de venda de ingressos, permitindo ao usuário escolher o tipo de ingresso, inserir a quantidade desejada e verificar se ainda há unidades disponíveis. Caso a quantidade solicitada exceda a disponível, o sistema alerta o usuário.

## Funcionalidades

-  Seleção do tipo de ingresso: pista, cadeira superior ou inferior.
-  Inserção da quantidade desejada.
-  Validação da disponibilidade.
-  Redução automática da quantidade disponível após a compra.
-  Mensagens de alerta em caso de erro ou sucesso.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts

##  Estrutura do projeto

```plaintext
e-ticket/
├── assets/
│   ├── Ingresso.svg
│   ├── PNG/
│   │   └── Logo e-tricket.png
│   └── SVG/
│       └── Hachuras.svg
├── js/
│   └── app.js
├── styles/
│   ├── _reset.css
│   └── style.css
├── index.html
└── README.md
```

## Como usar

1.Clone o repositório:

```
git clone https://github.com/seu-usuario/e-ticket.git
```

2. Acesse a pasta do projeto:

```
cd e-ticket
```


3. Abra o arquivo index.html no navegador:

- Clique duas vezes no arquivo, ou
- Use uma extensão como Live Server no VS Code.

4. Escolha um tipo de ingresso, insira a quantidade desejada e clique em Comprar.

## Melhorias futuras

- Adição de preço por ingresso e cálculo de valor total.
- Armazenamento das compras no localStorage.
- Interface mais interativa com feedback visual.
- Responsividade para dispositivos móveis.
- Integração com sistema de pagamento fictício.
