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
const creatureDisplay = document.getElementById("creature-display")
const storeDisplay = document.getElementById("store-container")

const navbarList = document.querySelectorAll("#navbar h3")[0]
const navbarBattle = document.querySelectorAll("#navbar h3")[1]
const navbarStore = document.querySelectorAll("#navbar h3")[2]


navbarList.addEventListener("click", () => {
    creatureDisplay.style.display = "none";
    storeDisplay.style.display = "none"
    creatureList.style.display = "block"
})

navbarBattle.addEventListener("click", () => {
    creatureDisplay.style.display = "flex";
    storeDisplay.style.display = "none"
    creatureList.style.display = "none"
})

navbarStore.addEventListener("click", () => {
    creatureDisplay.style.display = "none";
    storeDisplay.style.display = "flex"
    creatureList.style.display = "none"
})

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
    creatureName.textContent = Obj.name;

    const healthBar = document.createElement("p")
    healthBar.setAttribute("class", "healthbar")
    healthBar.style.width = `${Obj.health}px`;

    const attackButton = document.createElement("button")
    attackButton.textContent = Obj.attack;
    
    attackButton.addEventListener("click", () => {
        let damgage = Obj.damage;
        let health = healthBar.offsetWidth;
        if (health < 50) {
            health -= health;
            healthBar.style.width = `${health}px`
            console.log(health)

        } else if (health === 0) {
            healthBar.append(fainted)
            console.log(fainted)
        } else {
            health = health - damgage;
            healthBar.style.width = `${health}px`
            console.log(health)
        }
    })

    const healButton = document.createElement("button");
    healButton.textContent = "Heal";

    healButton.addEventListener("click", () => {
        let health = healthBar.offsetWidth;
        if (health < 0) {
            health = 0;
        }
        let heal = 20;
        health = health + heal;
        healthBar.style.width = `${health}px`
        console.log(health)
    })
        

    
    creatureList.append(creatureImage)

    creatureImage.addEventListener("click", () => {
        creatureCard.append(creatureImage)
        creatureCard.append(creatureName)
        creatureCard.append(healthBar)
        creatureCard.append(attackButton)
        creatureCard.append(healButton)
        creatureDisplay.append(creatureCard)
    })
    // creatureCard.append(creatureImage)
    // creatureCard.append(creatureName)
    // creatureCard.append(healthBar)
    // creatureDisplay.append(creatureCard)
    
}
fetchDB()