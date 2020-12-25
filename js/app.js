/////////////// PULL AND RENDER DATA FROM GOOGLE SHEETS ///////////////

$.ajax("https://spreadsheets.google.com/feeds/list/11wvPAVvRzcKv7hORaWcsidISosUxtyNx0AuugxxMwyo/1/public/full?alt=json")
.then((data) => {
    //Checking My Data
    console.log(data)

    //put out projects in a variable
    const rawProjects = data.feed.entry

    //log our projects
    console.log(rawProjects)

    //Prettify our projects array
    const projects = rawProjects.map((project) => {
        return{
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
    })

    ///////////// USE JQUERY TO RENDER PROJECTS ON PAGE /////////////
        for (i=0;i < projects.length; i++) {
        const $div = $(
            `<sl-card class="card-image">
                <h5>${projects[i].name}</h5>
                <img slot="image" src=${projects[i].img} 
                alt="${projects[i].name}">
                <p>${projects[i].description}</p>
                <div slot="footer">
                    <sl-button-group>
                        <a href=${projects[i].live}<sl-button size medium Left>Live</sl-button></a>
                        <a href=${projects[i].github}<sl-button>GitHub</sl-button></a>
                    </sl-button-group>
                </div>
                <style>
                    
                    .card-image h5{
                        font-family: 'Roboto', sans-serif;
                        font-size: 1.5rem;
                        text-align: center;
                        background-color: #FAEBD7;
                        color: #2F4F4F;
                    }
                    
                    .card-image p{
                        font-family: 'Roboto', sans-serif;
                        background-color: #FAEBD7;
                        color: #2F4F4F;
                    }

                    .card-image img{
                        background-color: #FAEBD7;
                        padding:0px;
                        margin: 10px;
                        border: 1px solid #2F4F4F;
                    }
                    .card-image::part(base){
                        background-color: #FAEBD7;
                    }

                    .card-image {
                        max-width: 300px;
                        min-height: 700px;
                        margin: 10px;

                    }

                    .card-image::part(body){
                        background-color: #FAEBD7;
                        padding: 10px; 
                    }

                    .card-image sl-button {
                        border: 1px solid red;
                    }
                </style>
            </sl-card>`
            )
        $(".cards").append($div)
    }

})


///////////// PULL DATA FROM BLOG FROM HEADLESS CMS /////////////
