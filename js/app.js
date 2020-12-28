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
                    <sl-button href=${projects[i].live}>Live</sl-button>
                    <sl-button href=${projects[i].github}>GitHub</sl-button>
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
                        margin-top: 10px;
                        margin-bottom: 10px;
                        border: 1px solid #2F4F4F;
                    }
                    .card-image::part(base){
                        background-color: #FAEBD7;
                    }

                    .card-image {
                        max-width: 350px;
                        min-height: 400px;
                        margin: 10px;

                    }

                    .card-image::part(body){
                        background-color: #FAEBD7;
                        padding: 10px; 
                    }


                    sl-button {
                        display: flex;
                        padding-bottom: 15px;
                        background-color: #FAEBD7;
                    }

                    sl-button::part(label){
                        font-family: 'Playfair Display', serif;
                        font-weight: 800;
                        font-size: 1rem;
                        letter-spacing: 1.5px;
                        color: #2F4F4F;     
                    }

                    sl-button::part(base){
                        background-color: #FAEBD7;  
                        border: 3px solid #2F4F4F;
                    }
                </style>
            </sl-card>`
            )
        $(".cards").append($div)
    }

})


///////////// PULL DATA FROM BLOG FROM HEADLESS CMS /////////////
