
myAxiosCalls(function(Jason){
    //we first have to set the variable of nameZ 
    //and link it ot the elemnt of the HTML file
    //next well pull data from our libraries
  
     
var nameZ = document.querySelector(".zname")
var hpValueZ = document.querySelector(".zhp")
var attackValueZ = document.querySelector(".zatk")
var defenseValueZ = document.querySelector(".zdef")  
var ability1Z = document.querySelector(".zabi1")
var ability2Z = document.querySelector(".zabi2") 

var nameR = document.querySelector(".rname")
var hpValueR = document.querySelector(".rhp")
var attackValueR = document.querySelector(".ratk")
var defenseValueR = document.querySelector(".rdef")  
var ability1R = document.querySelector(".rabi1")
var ability2R = document.querySelector(".rabi2")

var nameA = document.querySelector(".aname")
var hpValueA = document.querySelector(".ahp")
var attackValueA = document.querySelector(".aatk")
var defenseValueA = document.querySelector(".adef")  
var ability1A = document.querySelector(".aabi1")
var ability2A = document.querySelector(".aabi2")
     

nameZ.innerHTML = Jason.all[0].name  
hpValueZ.innerHTML = Jason.all[0].hp
attackValueZ.innerHTML = Jason.all[0].attack
defenseValueZ.innerHTML = Jason.all[0].defense
ability1Z.innerHTML = Jason.all[0].abilities1
ability2Z.innerHTML = Jason.all[0].abilities2

nameR.innerHTML = Jason.all[0].name  
hpValueR.innerHTML = Jason.all[0].hp
attackValueR.innerHTML = Jason.all[0].attack
defenseValueR.innerHTML = Jason.all[0].defense
ability1R.innerHTML = Jason.all[0].abilities1
ability2R.innerHTML = Jason.all[0].abilities2

nameA.innerHTML = Jason.all[0].name  
hpValueA.innerHTML = Jason.all[0].hp
attackValueA.innerHTML = Jason.all[0].attack
defenseValueA.innerHTML = Jason.all[0].defense
ability1A.innerHTML = Jason.all[0].abilities1
ability2A.innerHTML = Jason.all[0].abilities2
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
