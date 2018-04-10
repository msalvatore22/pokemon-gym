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