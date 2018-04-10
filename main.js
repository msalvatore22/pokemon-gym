axiosCalls(function(Zardchar){
	console.log(Zardchar)
//moltres
	let nameM = document.querySelector(".moltres-name")
	let hpValueM = document.querySelector(".moltres-hp-value")
	let attackValueM = document.querySelector(".moltres-attack-value")
	let defenseValueM = document.querySelector(".moltres-defense-value")
	let ability1M = document.querySelector(".moltres-ability-1")
	let ability2M = document.querySelector(".moltres-ability-2")
	document.getElementById("moltresImg").src = "images/Moltres.png"

	let moltres = Zardchar.all[0]
	
	nameM.innerHTML = moltres.name
	hpValueM.innerHtml = moltres.hp
	attackValueM.innerHtml = moltres.attack
	defenseValueM.innerHtml = moltres.defense
	ability1M = moltres.abilities[0]
	abilites2M = moltres.abilities[1]

	//suicune
	let nameS = document.querySelector(".suicune-name")
	let hpValueS = document.querySelector(".suicune-hp-value")
	let attackValueS = document.querySelector(".suicune-attack-value")
	let defenseValueS = document.querySelector(".suicune-defense-value")
	let ability1S = document.querySelector(".suicune-ability-1")
	let ability2S = document.querySelector(".suicune-ability-2")
	document.getElementById("suicuneImg").src = "images/Suicune.png"

	let suicune = Zardchar.all[1]
	
	nameS.innerHTML = suicune.name
	hpValueS.innerHtml = suicune.hp
	attackValueS.innerHtml = suicune.attack
	defenseValueS.innerHtml = suicune.defense
	ability1S = suicune.abilities[0]
	abilites2S = suicune.abilities[1]

	//ho-oh
	let nameH = document.querySelector(".ho-oh-name")
	let hpValueH = document.querySelector(".ho-oh-hp-value")
	let attackValueH = document.querySelector(".ho-oh-attack-value")
	let defenseValueH = document.querySelector(".ho-oh-defense-value")
	let ability1H = document.querySelector(".ho-oh-ability-1")
	let ability2H = document.querySelector(".ho-oh-ability-2")
	document.getElementById("hoOhImg").src = "images/Ho-Oh.png"

	let hoOh = Zardchar.all[2]
	
	nameH.innerHTML = hoOh.name
	hpValueH.innerHtml = hoOh.hp
	attackValueH.innerHtml = hoOh.attack
	defenseValueH.innerHtml = hoOh.defense
	ability1H = hoOh.abilities[0]
	abilites2H = hoOh.abilities[1]
})


























window.addEventListener("scroll", (event) => {
	let showNav = document.querySelectorAll(".vertical-nav")
	let scrollToShow = showNav[0]

	if(window.scrollY > 800){
		scrollToShow.classList.add("show")
	} else { 
		scrollToShow.classList.remove("show")

	}

});


document.querySelector(".nav-btn-moltres").addEventListener('click', (event) => {
	let section = document.getElementById("moltres")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-suicune").addEventListener('click', (event) => {
	let section = document.getElementById("suicune")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-ho-oh").addEventListener('click', (event) => {
	let section = document.getElementById("ho-oh")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-trainer").addEventListener('click', (event) => {
	let section = document.getElementById("trainer")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-moltres").addEventListener('click', (event) => {
	let section = document.getElementById("moltres")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-suicune").addEventListener('click', (event) => {
	let section = document.getElementById("suicune")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-ho-oh").addEventListener('click', (event) => {
	let section = document.getElementById("ho-oh")
	section.scrollIntoView({behavior: "smooth"});
});
