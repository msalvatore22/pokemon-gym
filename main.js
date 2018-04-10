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
	abilites = moltres.abilities[1]
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
