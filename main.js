myAxiosCalls(function(Jason){
    //we first have to set the variable of nameZ 
    //and link it ot the elemnt of the HTML file
    //next well pull data from our libraries
  
//zapdos   

	let nameZ = document.querySelector(".zapdos-name")
	let hpValueZ = document.querySelector(".zapdos-hp-value")
	let attackValueZ = document.querySelector(".zapdos-attack-value")
	var defenseValueZ = document.querySelector(".zapdos-defense-value")  
	let ability1Z = document.querySelector(".zapdos-ability-1")
	let ability2Z = document.querySelector(".zapdos-ability-2") 
	document.getElementById("zapdosImg").src = "images/Zapdos.png"

	

	nameZ.innerHTML = Jason.all[0].name  
	hpValueZ.innerHTML = Jason.all[0].hp
	attackValueZ.innerHTML = Jason.all[0].attack
	defenseValueZ.innerHTML = Jason.all[0].defense
	ability1Z.innerHTML = Jason.all[0].abilities1
	ability2Z.innerHTML = Jason.all[0].abilities2

//raikou

	let nameR = document.querySelector(".raikou-name")
	let hpValueR = document.querySelector(".raikou-hp-value")
	let attackValueR = document.querySelector(".raikou-attack-value")
	let defenseValueR = document.querySelector(".raikou-defense-value")  
	let ability1R = document.querySelector(".raikou-ability-1")
	let ability2R = document.querySelector(".raikou-ability-2")
	document.getElementById("raikouImg").src = "images/Raikou.png"


	nameR.innerHTML = Jason.all[1].name  
	hpValueR.innerHTML = Jason.all[1].hp
	attackValueR.innerHTML = Jason.all[1].attack
	defenseValueR.innerHTML = Jason.all[1].defense
	ability1R.innerHTML = Jason.all[1].abilities1
	ability2R.innerHTML = Jason.all[1].abilities2

//amphoras

	let nameA = document.querySelector(".ampharos-name")
	let hpValueA = document.querySelector(".ampharos-hp-value")
	let attackValueA = document.querySelector(".ampharos-attack-value")
	let defenseValueA = document.querySelector(".ampharos-defense-value")  
	let ability1A = document.querySelector(".ampharos-ability-1")
	let ability2A = document.querySelector(".ampharos-ability-2")
	document.getElementById("ampharosImg").src = "images/Ampharos.png"

	nameA.innerHTML = Jason.all[2].name  
	hpValueA.innerHTML = Jason.all[2].hp
	attackValueA.innerHTML = Jason.all[2].attack
	defenseValueA.innerHTML = Jason.all[2].defense
	ability1A.innerHTML = Jason.all[2].abilities1
	ability2A.innerHTML = Jason.all[2].abilities2

 })


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
	
	nameM.innerHTML = Zardchar.all[0].name
	hpValueM.innerHTML = Zardchar.all[0].hp
	attackValueM.innerHTML = Zardchar.all[0].attack
	defenseValueM.innerHTML = Zardchar.all[0].defense
	ability1M.innerHTML = Zardchar.all[0].abilities1
	ability2M.innerHTML = Zardchar.all[0].abilities2

//suicune
	let nameS = document.querySelector(".suicune-name")
	let hpValueS = document.querySelector(".suicune-hp-value")
	let attackValueS = document.querySelector(".suicune-attack-value")
	let defenseValueS = document.querySelector(".suicune-defense-value")
	let ability1S = document.querySelector(".suicune-ability-1")
	let ability2S = document.querySelector(".suicune-ability-2")
	document.getElementById("suicuneImg").src = "images/Suicune.png"

	
	
	nameS.innerHTML = Zardchar.all[1].name
	hpValueS.innerHTML = Zardchar.all[1].hp
	attackValueS.innerHTML = Zardchar.all[1].attack
	defenseValueS.innerHTML = Zardchar.all[1].defense
	ability1S.innerHTML = Zardchar.all[1].abilities1
	ability2S.innerHTML = Zardchar.all[1].abilities2

//ho-oh
	let nameH = document.querySelector(".ho-oh-name")
	let hpValueH = document.querySelector(".ho-oh-hp-value")
	let attackValueH = document.querySelector(".ho-oh-attack-value")
	let defenseValueH = document.querySelector(".ho-oh-defense-value")
	let ability1H = document.querySelector(".ho-oh-ability-1")
	let ability2H = document.querySelector(".ho-oh-ability-2")
	document.getElementById("hoOhImg").src = "images/Ho-Oh.png"

	
	
	nameH.innerHTML = Zardchar.all[2].name
	hpValueH.innerHTML = Zardchar.all[2].hp
	attackValueH.innerHTML = Zardchar.all[2].attack
	defenseValueH.innerHTML =Zardchar.all[2].defense
	ability1H.innerHTML = Zardchar.all[2].abilities1
	ability2H.innerHTML = Zardchar.all[2].abilities2
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

document.querySelector(".nav-btn-zapdos").addEventListener('click', (event) => {
	let section = document.getElementById("zapdos")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-raikou").addEventListener('click', (event) => {
	let section = document.getElementById("raikou")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-ampharos").addEventListener('click', (event) => {
	let section = document.getElementById("ampharos")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-ball").addEventListener('click', (event) => {
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

document.querySelector(".vertical-zapdos").addEventListener('click', (event) => {
	let section = document.getElementById("zapdos")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-raikou").addEventListener('click', (event) => {
	let section = document.getElementById("raikou")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-ampharos").addEventListener('click', (event) => {
	let section = document.getElementById("ampharos")
	section.scrollIntoView({behavior: "smooth"});
});
