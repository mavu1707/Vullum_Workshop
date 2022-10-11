  //WS3, OPPG1:
  const gameConfig = {
    playerName: "Markus",
    coins: 50,
    lives: 3,
    level: 1
}
//PLAYERNAME - INITITAL PRINT
document.getElementById("playername").innerHTML = gameConfig.playerName

//COINS - INITIAL PRINT
let coinsPrint = ""
if(gameConfig.coins > 0) {
    coinsPrint = gameConfig.coins
} else {
    coinsPrint = "Collect some coins"
}
document.getElementById("coins-count").innerHTML = coinsPrint

//LIVES - INITIAL PRINT
const livesPrint = document.getElementById("lives-count")
livesPrint.innerHTML = gameConfig.lives
if(gameConfig.lives < 2) {
    livesPrint.style.color = "red"
}

//LEVEL - INITIAL PRINT
document.getElementById("level-count").innerHTML = gameConfig.level

//ARMORY - INITIAL PRINT
//WS3, OPPG. 5
const armory = [
    {
        weaponName: "Longsword",
        weaponIcon: "longsword",
        level: 3,
        value: 5
    },
    {
        weaponName: "Warhammer",
        weaponIcon: "warhammer",
        level: 12,
        value: 15
    },
    {
        weaponName: "Battleaxe",
        weaponIcon: "battleaxe",
        level: 1,
        value: 20
    },
    {
        weaponName: "Armour",
        weaponIcon: "armour",
        level: 1,
        value: 25
    }
]
//Sjekke strukturen via console.log
console.log(armory)
//Gjøre klar en variabel for armory-HTML-rader
let armoryHTML = ""
//Gjøre klar en variabel for å legge sammen armory-poeng
let armoryPoints = 0
//Løpe gjennom armory-arrayen med map, og lage HTML
armory.map(weapon => {
        //Hvis våpen-level er større enn 0, legg til HTML-en for våpenraden
        weapon.level > 0 ? armoryHTML += `<tr>
            <td><img src="img/${weapon.weaponIcon}.png" /> ${weapon.weaponName}</td>
            <td ${weapon.level > 9 ? `class="gold"` : null}>${weapon.level}</td>
        </tr>` : null
        //Legg level * value for våpenet til armoryPonts
        armoryPoints += weapon.level * weapon.value
})
//Skrive ut armoryHTML til armory-tabellen i HTML-delen
document.getElementById("showhide").innerHTML = armoryHTML

//POINTS - INITIAL PRINT
//WS3, Oppg 6: Oppdatert points med verdi fra gameConfig-objektet og utregning via armoryPoints
let points = (gameConfig.coins * 5) + armoryPoints
document.getElementById("points-count").innerHTML = points