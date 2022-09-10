//Nøkkler
const playerInfo = {
  spillerNavn: "Markus",
  liv: 5,
  penger: 20,
  level: 12
}
const armory = [
  {
    weaponName: "Long Sword",
    weaponIcon: `<td><img src="longsword.png"></td>`,
    weaponLevel: 0,
    weaponValue: 5
  },
  {
    weaponName: "War Hammer",
    weaponIcon: `<td><img src="warhammer.png"></td>`,
    weaponLevel: 10,
    weaponValue: 15
  },
  {
    weaponName: "Battle Axe",
    weaponIcon: `<td><img src="battleaxe.png"></td>`,
    weaponLevel: 0,
    weaponValue: 20
  },
  {
    weaponName:  "Armour",
    weaponIcon: `<td><img src="armour.png"></td>`,
    weaponLevel: 12,
    weaponValue: 25
  }
]

//Regner ut poeng vi har i spillet
//let points = (playerInfo.penger * 5) + (playerWeapon.longSword * 5) + (playerWeapon.warHammer * 15) + (playerWeapon.battleAxe * 20) + (playerWeapon.armour * 25);

//Skrive ut variablene fra nøkklene
document.getElementById("playerName").innerHTML = playerInfo.spillerNavn;
document.getElementById("livesCount").innerHTML = playerInfo.liv;
document.getElementById("coinsCount").innerHTML = playerInfo.penger;
document.getElementById("playerLevel").innerHTML = playerInfo.level;
//document.getElementById("pointsCount").innerHTML = points;

//tomme text strenger som senere blir fylt inn
let textCoins ="";
let weaponText ="";
let liveText ="";
let weaponZeroText ="";
let armoryHTML = "";

armory.map((test) => {
 
})
/*
armory.map((test) => {
  armoryHTML += `
  <tr>
  <td><span id="weapon">${test.weaponName}</span></td>
  <td>${test.weaponIcon}</td>
  <td>Level: ${test.weaponLevel}</td>
  </tr>
  `
  document.getElementById("showhide").innerHTML = armoryHTML;
})
*/
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