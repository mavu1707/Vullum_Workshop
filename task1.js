//En array med ulike objekter som inneholder ulike nøkkler
const playerInfo = {
  spillerNavn: "Markus",
  liv: 5,
  //penger: 20,
  level: 12
}
const armory = [
  {
    weaponName: "LongSword",
    weaponIcon: `<td><img src="longsword.png"></td>`,
    weaponLevel: 10,
    weaponValue: 5
  },
  {
    weaponName: "WarHammer",
    weaponIcon: `<td><img src="warhammer.png"></td>`,
    weaponLevel: 3,
    weaponValue: 15
  },
  {
    weaponName: "BattleAxe",
    weaponIcon: `<td><img src="battleaxe.png"></td>`,
    weaponLevel: 12,
    weaponValue: 20
  },
  {
    weaponName:  "Armour",
    weaponIcon: `<td><img src="armour.png"></td>`,
    weaponLevel: 1,
    weaponValue: 25
  }
]

//Regner ut poeng vi har i spillet
let points = (armory[0].weaponLevel*armory[0].weaponValue) + (armory[1].weaponLevel*armory[1].weaponValue) + (armory[2].weaponLevel*armory[2].weaponValue) + (armory[3].weaponLevel*armory[3].weaponValue) + (playerInfo.penger)

//Skrive ut variablene fra nøkklene
document.getElementById("playerName").innerHTML = playerInfo.spillerNavn;
document.getElementById("livesCount").innerHTML = playerInfo.liv;
//document.getElementById("coinsCount").innerHTML = playerInfo.penger;
document.getElementById("playerLevel").innerHTML = playerInfo.level;
document.getElementById("pointsCount").innerHTML = points;

function modifyCoins(modifyer){
  
}

modifyCoins(3)

//tomme text strenger som senere blir fylt inn
let textCoins ="";
let weaponText ="";
let liveText ="";
let weaponZeroText ="";
let armoryHTML = "";

//Bruker .map for å finne og skrive ut nøkklene til spillet
armory.map((test) => {
 if(test.weaponLevel > 0){
  armoryHTML += `<tr>
 <td><span id="test">${test.weaponName}</span></td>
 <td>${test.weaponIcon}</td> 
  ${test.weaponLevel >= 10 ? `<td class="gold">Level: ${test.weaponLevel}</td>` : `<td>${test.weaponLevel}</td>`}
 </tr>`
 document.getElementById("showhide").innerHTML = armoryHTML;
 }
})



//Funkjson for å få armour opp og ned (Tatt funksjonen fra w3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show)
function hudHide(){
  var x = document.getElementById("showhide");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else {
    x.style.display = "none";
  }
}

//Funkjsoner for å endre farge på skriften
if(playerInfo.penger === 0){
  textCoins = `Go collect coins! coins: ${playerInfo.penger}`;
  document.getElementById("coinsCount").style.color = "red";
}else{
  textCoins = `you've got: ${playerInfo.penger} coins`;
  document.getElementById("coinsCount").style.color = "gold";
}
document.getElementById("coinsCount").innerHTML = textCoins;

if(playerInfo.liv <= 1){
  liveText = `You only have ${playerInfo.liv} live left`;
  document.getElementById("livesCount").style.color = "red";
}else{
  liveText = `You have ${playerInfo.liv} lives`;
  document.getElementById("livesCount").style.color = "gold";
}
document.getElementById("livesCount").innerHTML = liveText;
























/*Funkjsoner som gjør at hvis våpen er 0 skal det ikke komme opp
Trneger ikke denne koden pga .map funksjonen lenger oppe!
if(playerWeapon.longSword > 0){
  document.getElementById("showhide").innerHTML += `
  <tr>
    <td><img src="longsword.png"></td>
    <td>Level: <span id="weaponLongSword">${playerWeapon.longSword}</span></td>
  </tr>
  `
  if(playerWeapon.longSword >= 10){
    document.getElementById("weaponLongSword").style.color = "gold";
  }else{
    document.getElementById("weaponLongSword").style.color = "red";
  }
}

if(playerWeapon.warHammer > 0){
  document.getElementById("showhide").innerHTML += `
  <tr>
    <td><img src="warhammer.png"></td>
    <td>Level: <span id="weaponWarHammer">${playerWeapon.warHammer}</span></td>
  </tr>
  `
  if(playerWeapon.warHammer >= 10){
    document.getElementById("weaponWarHammer").style.color = "gold";
  }else{
    document.getElementById("weaponWarHammer").style.color = "red";
  }
}

if(playerWeapon.battleAxe > 0){
  document.getElementById("showhide").innerHTML += `
  <tr>
    <td><img src="battleaxe.png"></td>
    <td>Level: <span id="weaponBattleAxe">${playerWeapon.battleAxe}</span></td>
  </tr>
  `
  if(playerWeapon.battleAxe >= 10){
    document.getElementById("weaponBattleAxe").style.color = "gold";
  }else{
    document.getElementById("weaponBattleAxe").style.color = "red";
  }
}

if(playerWeapon.armour > 0){
  document.getElementById("showhide").innerHTML += `
  <tr>
    <td><img src="armour.png"></td>
    <td>Level: <span id="weaponArmour">${playerWeapon.armour}</span></td>
  </tr>
  `
  if(playerWeapon.armour >= 10){
    document.getElementById("weaponArmour").style.color = "gold";
  }else{
    document.getElementById("weaponArmour").style.color = "red";
  }
}
*/