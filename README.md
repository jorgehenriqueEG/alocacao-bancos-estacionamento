# alocacao-bancos-estacionamento

## Descrição do Problema
Um estacionamento de shopping tem 3 setores com limites de capacidade. O sistema recebe uma lista de placas de carros e distribui cada um para o setor com a menor ocupação atual. Se houver empate, o carro vai para o setor de menor índice.

## Requisitos
- Receber uma lista de placas de carros
- Distribuir os carros nos setores A, B e C respeitando as capacidades
- Emitir um aviso se o estacionamento estiver cheio

## Exemplo de Uso
Chamar alocarCarros com a lista ["ABC1234", "DEF5678", "GHI9012", "JKL3456", "MNO7890"]

Saída:
Setor A: 2 carros
Setor B: 2 carros
Setor C: 1 carro