class MyCard extends HTMLElement{
    constructor(){
        super()

        const name = this.getAttribute("name")
        const img = this.getAttribute("img")
        const description = this.getAttribute("description")
        const live = this.getAttribute("live")
        const github = this.getAttribute("github")
 
        // console.log(name, img, description, live, github)
        
        this.innerHTML = `
        <sl-card>
        <h5>${name}</h5>
        <img slot="image" src=${img} alt=${name}>
        <p>${description}<p>
        <sl-button-group>
            <a href=${live}<sl-button>Live</sl-button></a>
            <a href=${github}<sl-button>GitHub</sl-button></a>
        </sl-button-group>
        </sl-card> `

    }
}

customElements.define("my-card", MyCard)