    class Jason{
        constructor(){
            this.all = []
        }

        add(pokemon) {
            this.all.push(pokemon)
        }
        get(name){
            for(let i=0; i<this.all.length; i++){
                if(name == this.all[i].name){
                    return this.all[i]
                }
            }
        }
    }
    
    class Jpokemon {
    constructor(name, hp, attack, defense, abilities1, abilities2) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities1 = abilities1;
            this.abilities2 = abilities2;
        }
    }

    let jason = new Jason()

   
    function myAxiosCalls(callback) {
        let url1 = "https://pokeapi.co/api/v2/pokemon/145/"
        let url2 = "https://pokeapi.co/api/v2/pokemon/243/"
        let url3 = "https://pokeapi.co/api/v2/pokemon/181/"
    
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3)
    ]).then(responses=> {
        responses.forEach(response => {
            let data = response.data
            let pokemon = new Jpokemon(
                data.name,
                data.stats[5].base_stat,
                data.stats[4].base_stat,
                data.stats[3].base_stat,
                data.abilities[0].ability.name,
                data.abilities[1].ability.name
            )

            jason.add(pokemon)

        })
        callback(jason)
    })
}
