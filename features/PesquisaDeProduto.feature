#language:pt

Funcionalidade: Pesquisa de produto

Cenário: Produto encontrado
Dado que seja feita uma pesquisa pelo produto "iPhone 11"
Então o produto "iPhone 11 Pro Max Apple 64GB Cinza Espacial 4G" é apresentado no resultado

Cenário: Produto não encontrado
Dado que seja feita uma pesquisa pelo produto "Desafio Zup"
Então é apresentado a mensagem 'Nenhum resultado encontrado para a consulta "Desafio Zup"'

Cenário: Pesquisa com sugestão de consulta
Dado que seja feita uma pesquisa pelo produto "ihone 11"
Quando clico na sugestão de consulta "iphone 11 pro max celular"
Então o produto "iPhone 11 Pro Max Apple 512GB Prata 4G" é apresentado no resultado