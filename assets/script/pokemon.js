async function Pokemons() {
    try {
        document.querySelector('.resposta').innerHTML = `Digite o nome o número do Pokemon.<br>
        Número de 1 a 1025 ou 10001 a 10277.`
        const nome = document.querySelector('.pesquisa').value.trim();
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const response = await fetch(url+nome);
        const pokemonDados = await response.json();
        console.log(pokemonDados)
        document.querySelector('.poke-img').src = pokemonDados.sprites.front_default
        document.querySelector('.poke-nome').innerHTML = pokemonDados.name.toUpperCase()
        const tamanho = pokemonDados.types.length
        document.querySelector('.poke-tipo').innerHTML = 'Tipo: '
        for (inicio = 0; inicio < tamanho; inicio++) {
            document.querySelector('.poke-tipo').innerHTML +=' '+pokemonDados.types[inicio].type.name
        }
        document.querySelector('.poke-id').innerHTML = 'ID: '+pokemonDados.id;
        document.querySelector('.poke-hp').innerHTML = 'HP: '+pokemonDados.stats[0].base_stat;
        document.querySelector('.poke-atk').innerHTML = 'ATK: '+pokemonDados.stats[1].base_stat;
        document.querySelector('.poke-def').innerHTML = 'DEF: '+pokemonDados.stats[2].base_stat;
        document.querySelector('.poke-atk-spc').innerHTML = 'ATK SPC: '+pokemonDados.stats[3].base_stat;
        document.querySelector('.poke-def-spc').innerHTML = 'DEF SPC: '+pokemonDados.stats[4].base_stat;
        document.querySelector('.poke-vel').innerHTML = 'VEL: '+pokemonDados.stats[5].base_stat;
        var somaStatus = 0
        for (inicio = 0; inicio < 6;inicio++) {
            
            somaStatus += pokemonDados.stats[inicio].base_stat;
        }
        document.querySelector('.poke-total').innerHTML = 'Total: '+somaStatus;
    } catch {
        document.querySelector('.resposta').innerHTML = "ERRO! Tente novamente!"
    }

}