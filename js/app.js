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
                    <sl-button class="live-button" href=${projects[i].live}>Live</sl-button>
                    ${
                        projects[i].github !== "" ?
                            `<sl-button class="gitHub-button" href=${projects[i].github}>GitHub</sl-button>`
                        : "" 
                    }
                // terinary operator
                // before ? is if
                // after ? is if true return
                // after : is if false return             
                </div>
            </sl-card>`
            )
        $(".cards").append($div)
    }

})


/////////////////// NAV DRAWER ////////////


$(() => {
  const drawer = document.querySelector('.drawer-placement-left')
  
  const openButton = drawer.nextElementSibling
  
    const closeButton = $('.nav-button').on('click', () => {
        drawer.hide()
        })

  openButton.addEventListener('click', () => drawer.show())
  
});



///////////// PULL DATA FROM BLOG FROM HEADLESS CMS /////////////
