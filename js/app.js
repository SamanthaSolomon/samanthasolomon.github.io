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
            <img slot="image" src=${projects[i].img} 
            alt="${projects[i].name}">
            <p>${projects[i].description}</p>
            <sl-button-group>
                <a href=${projects[i].live}<sl-button>Live</sl-button></a>
                <a href=${projects[i].github}<sl-button>GitHub</sl-button></a>
            </sl-button-group>
        <style>
        .card-image {
            max-width: 300px;
        }
        </style>
                </sl-card>`
            )
        $(".cards").append($div)
    }

})


///////////// PULL DATA FROM BLOG FROM HEADLESS CMS /////////////
