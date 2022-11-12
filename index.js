console.log("JS is running")

// const attackButton = document.getElementById("attack-button")
// const healButton = document.getElementById("heal-button")
// const healthBar = document.getElementById("health-bar")

// const fainted = document.createElement("p")
// fainted.textContent = "FAINTED";

// let health = healthBar.offsetWidth;

// attackButton.addEventListener("click", () => {
//     if (health < 50) {
//         health -= health;
//         healthBar.style.width = `${health}px`
//         console.log(health)

//     } else if (health === 0) {
//         healthBar.append(fainted)
//         console.log(fainted)
//     } else {
//         let damgage = 50;
//         health = health - damgage;
//         healthBar.style.width = `${health}px`
//         console.log(health)
//     }
    
// })

// healButton.addEventListener("click", () => {
//     if (health < 0) {
//         health = 0;
//     }
//     let heal = 20;
//     health = health + heal;
//     healthBar.style.width = `${health}px`
//     console.log(health)
// })

const creatureList = document.getElementById("creature-list")
const goldAmount = document.getElementById("gold")
const potionAmount = document.getElementById("potions")
let gold = 20
goldAmount.textContent = `Gold: ${gold}`
let potions = 3
potionAmount.textContent = `Potions: ${potions}`

const buyPotionButton = document.getElementById("buy-potion")
buyPotionButton.addEventListener("click", () => {
    gold -= 5;
    potions += 1;
    potionAmount.textContent = `Potions: ${potions}`
    goldAmount.textContent = `Gold: ${gold}`
})

const fetchDB = () => {
    fetch("http://localhost:3000/creatues")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(item => renderCreature(item))
    })
}

const renderCreature = (Obj) => {
    const creatureDisplay = document.getElementById("creature-display")
    const creatureCard = document.createElement("div")

    const creatureImage = document.createElement("img")
    creatureImage.src = Obj.image;
    creatureImage.setAttribute("class", "image")
    const creatureName = document.createElement("h3")
    const healthBar = document.createElement("p")
    healthBar.style.height = "25px"
    healthBar.style.backgroundColor = "red";
    creatureName.textContent = Obj.name;
    healthBar.style.width = `${Obj.health}px`;

    creatureList.append(creatureImage)

    creatureImage.addEventListener("click", () => {
        creatureCard.append(creatureImage)
        creatureCard.append(creatureName)
        creatureCard.append(healthBar)
        creatureDisplay.append(creatureCard)
    })
    // creatureCard.append(creatureImage)
    // creatureCard.append(creatureName)
    // creatureCard.append(healthBar)
    // creatureDisplay.append(creatureCard)
    
}
fetchDB()