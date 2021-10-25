//RENDER PROJECT CARDS

import { projects } from "./data.js"

const cardContainer = document.querySelector(".projects")

render()

function render() {
    projects.forEach((project) => {
        const card = document.createElement("div")
        card.classList.add("cards")
        card.innerHTML =
            `<sl-card class="card-image">
                <h5>${project.name}</h5>
                <img slot="image" src=${project.img} alt="${project.name}">
                <p>${project.description}</p>
                <sl-button class="live-button" href=${project.live} target="_blank">See It Live</sl-button>
                ${project.github !== "" ?
                    `<sl-button class="gitHub-button" href=${project.github} target="_blank">See GitHub</sl-button>`: "" 
                }        
            </sl-card>`
        cardContainer.appendChild(card)
    })
}


// NAV DRAWER //

const drawer = document.querySelector('.drawer-placement-left')

const openButton = drawer.nextElementSibling

const closeButton = $('.nav-button').on('click', () => {
    drawer.hide()
})

openButton.addEventListener('click', () => drawer.show())

