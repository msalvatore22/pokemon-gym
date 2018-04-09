    class jason{
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
    
   let jason = new jason()

    class pokemon {
    constructor(name, hp, attack, defense, abilities, types, weight, base, id) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
            this.types = types;
            this.weight = weight;
            this.base = base;
            this.id = id;
        }
    }

    


    axios.get("https://pokeapi.co/api/v2/pokemon/145/")
    .then((response) => {
        var data = response.data
        var name = document.querySelector("zheader.pname")
        var hp = document.querySelector(".zhp")
        var attack = document.querySelector("div.zatkbar")
        var defense = document.querySelector("div.zdefbar")
        var ability1 = document.querySelector(".zabi1")
        var ability2 = document.querySelector(".zabi2")
       /* var ability3 = document.querySelector(".abi3")*/
        var types = document.querySelector(".ztype")
        var weight = document.querySelector("#ztxt")
        var base = document.querySelector("zspan.lvl")
        var id = document.querySelector(".zno")

        name.innerHTML = data.name
        hp.innerHTML = data.stats[5].base_stat
        attack.innerHTML = data.stats[4].base_stat
        defense.innerHTML = data.stats[3].base_stat
        ability1.innerHTML = data.abilities[0].ability.name
        ability2.innerHTML = data.abilities[1].ability.name
        /*ability3.innerHTML = data.abilities[2].ability.name*/
        types.innerHTML = data.types[0].type.name
        weight.innerHTML = data.weight
        base.innerHTML = data.base_experience
        id.innerHTML = data.id

    })
    .catch((error) => {
        console.log(error)
    })

    class jason{
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
    
   let jason = new jason()

    class pokemon {
    constructor(name, hp, attack, defense, abilities, types, weight, base, id) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
            this.types = types;
            this.weight = weight;
            this.base = base;
            this.id = id;
        }
    }

    


    axios.get("https://pokeapi.co/api/v2/pokemon/243/")
    .then((response) => {
        var data = response.data
        var name = document.querySelector("rheader.pname")
        var hp = document.querySelector(".rhp")
        var attack = document.querySelector("div.ratkbar")
        var defense = document.querySelector("div.rdefbar")
        var ability1 = document.querySelector(".rabi1")
        var ability2 = document.querySelector(".rabi2")
       /* var ability3 = document.querySelector(".abi3")*/
        var types = document.querySelector(".rtype")
        var weight = document.querySelector("#rtxt")
        var base = document.querySelector("span.rlvl")
        var id = document.querySelector(".rno")

        name.innerHTML = data.name
        hp.innerHTML = data.stats[5].base_stat
        attack.innerHTML = data.stats[4].base_stat
        defense.innerHTML = data.stats[3].base_stat
        ability1.innerHTML = data.abilities[0].ability.name
        ability2.innerHTML = data.abilities[1].ability.name
        /*ability3.innerHTML = data.abilities[2].ability.name*/
        types.innerHTML = data.types[0].type.name
        weight.innerHTML = data.weight
        base.innerHTML = data.base_experience
        id.innerHTML = data.id

    })
    .catch((error) => {
        console.log(error)
    })

    class jason{
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
    
   let jason = new jason()

    class pokemon {
    constructor(name, hp, attack, defense, abilities, types, weight, base, id) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
            this.types = types;
            this.weight = weight;
            this.base = base;
            this.id = id;
        }
    }

    


    axios.get("https://pokeapi.co/api/v2/pokemon/145/")
    .then((response) => {
        var data = response.data
        var name = document.querySelector("aheader.pname")
        var hp = document.querySelector(".ahp")
        var attack = document.querySelector("div.aatkbar")
        var defense = document.querySelector("div.adefbar")
        var ability1 = document.querySelector(".aabi1")
        var ability2 = document.querySelector(".aabi2")
       /* var ability3 = document.querySelector(".abi3")*/
        var types = document.querySelector(".atype")
        var weight = document.querySelector("#atxt")
        var base = document.querySelector("span.alvl")
        var id = document.querySelector(".ano")

        name.innerHTML = data.name
        hp.innerHTML = data.stats[5].base_stat
        attack.innerHTML = data.stats[4].base_stat
        defense.innerHTML = data.stats[3].base_stat
        ability1.innerHTML = data.abilities[0].ability.name
        ability2.innerHTML = data.abilities[1].ability.name
        /*ability3.innerHTML = data.abilities[2].ability.name*/
        types.innerHTML = data.types[0].type.name
        weight.innerHTML = data.weight
        base.innerHTML = data.base_experience
        id.innerHTML = data.id

    })
    .catch((error) => {
        console.log(error)
    })

   