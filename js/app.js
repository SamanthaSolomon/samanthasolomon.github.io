import { projects } from "./data.js"

console.log(projects)

const cardContainer = document.querySelector(".cards")
console.log(cardContainer)

render()

function render() {
    projects.forEach((project) => {
        console.log(project)
        cardContainer.innerHTML =
            `<sl-card class="card-image">
                <h5>${project.name}</h5>
                <img slot="image" src=${projects.img} alt="${project.name}">
                <p>${project.description}</p>
                <sl-button class="live-button" href=${project.live} target="_blank">See It Live</sl-button>
                ${project.github !== "" ?
                    `<sl-button class="gitHub-button" href=${project.github} target="_blank">See GitHub</sl-button>`: "" 
                }        
            </sl-card>`
        //cardContainer.appendChild(project)
    })
}


// NAV DRAWER //

const drawer = document.querySelector('.drawer-placement-left')

const openButton = drawer.nextElementSibling

const closeButton = $('.nav-button').on('click', () => {
    drawer.hide()
})

openButton.addEventListener('click', () => drawer.show())

