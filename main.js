myAxiosCalls(function(Jason){
    
    //we first have to set the variable of nameZ 
    //and link it ot the elemnt of the HTML fiel
    
   var nameZ = document.querySelector(".pname")
   var hpValueZ = document.querySelector(".hp")
    var attackValueZ = document.querySelector(".atk")
    var defenseValueZ = document.querySelector(".def")  
    var ability1Z = document.querySelector(".abi1")
    var ability2Z = document.querySelector(".abi2")
    

    //next well pull data from our libraries

     nameZ.innerHTML = Jason.all[0].name
     hpValueZ = Jason.all[0].hp
     attackValueZ.innerHTML = Jason.all[0].attack
     defenseValueZ.innerHTML = Jason.all[0].defense
     ability1Z.innerHTML = Jason.all[0].abilities[0]
     ability2Z.innerHTML = Jason.all[0].abilities[1]

    
    
 })