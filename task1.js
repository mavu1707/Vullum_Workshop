 let playerInfo = {
  playerName: "Markus",
  level: 1,
  coinsCount: 18,
  livesCount: 4
}

let playerArmour = {
  weaponLongSword: 3,
  weaponWarHammer: 40,
  weaponBattleAxe: 30,
  weaponArmour: 4
}

document.getElementById("playerName").innerHTML = playerInfo[0];

let coinsCount = 18;
document.getElementById("coinsCount").innerHTML = coinsCount;

let livesCount = 3;
document.getElementById("livesCount").innerHTML = livesCount;

let weaponLongSword = 12;
document.getElementById("weaponLongSword").innerHTML = weaponLongSword;

let weaponWarHammer = 10;
document.getElementById("weaponWarHammer").innerHTML = weaponWarHammer;

let weaponBattleAxe = 3;
document.getElementById("weaponBattleAxe").innerHTML = weaponBattleAxe;

let weaponArmour = 2;
document.getElementById("weaponArmour").innerHTML = weaponArmour;

let pointsCount = (coinsCount * 5) + (weaponLongSword * 5) + (weaponWarHammer * 15) + (weaponBattleAxe * 20) + (weaponArmour * 25);
document.getElementById("pointsCount").innerHTML = pointsCount;

let level = 1;
document.getElementById("playerLevel").innerHTML = level;

function hudHide(){ //Tatt funksjonen fra w3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
  var x = document.getElementById("showhide");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else {
    x.style.display = "none";
  }
}
let textCoins ="";
let weaponTotal = weaponLongSword + weaponWarHammer + weaponBattleAxe + weaponArmour;
let weaponText ="";
let liveText ="";
let weaponZeroText ="";

if(coinsCount === 0){
  textCoins = `Go collect coins! you've only got ${coinsCount} coins`;
  document.getElementById("coinsCount").style.color = "red";
}else{
  textCoins = `you've got: ${coinsCount} coins`;
  document.getElementById("coinsCount").style.color = "gold";
}
document.getElementById("coinsCount").innerHTML = textCoins;

if(weaponLongSword >= 10){
  document.getElementById("weaponLongSword").style.color = "gold";
}else{
  document.getElementById("weaponLongSword").style.color = "red";
}
if(weaponWarHammer >= 10){
  document.getElementById("weaponWarHammer").style.color = "gold";
}else{
  document.getElementById("weaponWarHammer").style.color = "red";
}
if(weaponBattleAxe >= 10){
  document.getElementById("weaponBattleAxe").style.color = "gold";
}else{
  document.getElementById("weaponBattleAxe").style.color = "red";
}
if(weaponArmour >= 10){
  document.getElementById("weaponArmour").style.color = "gold";
}else{
  document.getElementById("weaponArmour").style.color = "red";
}

if(weaponTotal >= 10){
  weaponText = `Your weapons are in level: ${weaponTotal}`;
  document.getElementById("weaponTotal").style.color = "gold";
}else{
  weaponText = `Your weapons are only in level: ${weaponTotal}`;
  document.getElementById("weaponTotal").style.color = "red";
}
document.getElementById("weaponTotal").innerHTML = weaponText;

if(livesCount <= 1){
  liveText = `You only have ${livesCount} life left`;
  document.getElementById("livesCount").style.color = "red";
}else{
  liveText = `You have ${livesCount} lifes`;
  document.getElementById("livesCount").style.color = "gold";
}

if (weaponLongSword == 0){
  
}
if (weaponWarHammer == 0){

}
if (weaponBattleAxe == 0){

}
if (weaponArmour == 0){

}

