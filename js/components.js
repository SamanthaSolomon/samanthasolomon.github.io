class MyCard extends HTMLElement{
    constructor(){
        super()

        const name = this.getAttribute("name")
        const img = this.getAttribute("img")
        const description = this.getAttribute("description")
        const live = this.getAttribute("live")
        const github = this.getAttribute("github")

        //console.log(name, img, description, live, github)

    }
}

