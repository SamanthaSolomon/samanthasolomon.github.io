// PULL AND RENDER DATA FROM AIRTABLE //
const Airtable = require('airtable')
require('dotenv').config()
const

$.ajax("https://spreadsheets.google.com/feeds/list/2PACX-1vRR44XxHuPaudKrDTw9XvEUXceddiM3BmjUIK8Iwmb1qMB-VhP6G2jrdnmTlRDQOFz05epqUBNO5LU0/1/public/full?alt=json&callback=googleDocCallback")
.then((data) => {
    //Checking My Data
    console.log('data-', data)

    //put projects in a variable
    const rawProjects = data.feed.entry

    //log projects
    console.log(rawProjects)

    //Prettify projects array
    const projects = rawProjects.map((project) => {
        return{
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
    })

   // USE JQUERY TO RENDER PROJECTS ON PAGE //
        for (i=0;i < projects.length; i++) {
        const $div = $(
            `<sl-card class="card-image">
                <h5>${projects[i].name}</h5>
                <img slot="image" src=${projects[i].img} 
                alt="${projects[i].name}">
                <p>${projects[i].description}</p>
                    <sl-button class="live-button" href=${projects[i].live} target="_blank">See It Live</sl-button>
                    ${
                        projects[i].github !== "" ?
                            `<sl-button class="gitHub-button" href=${projects[i].github} target="_blank">See GitHub</sl-button>`
                        : "" 
                    }        
                </div>
            </sl-card>`
            )
        $(".cards").append($div)
    }

})


// NAV DRAWER //

const drawer = document.querySelector('.drawer-placement-left')
  
  const openButton = drawer.nextElementSibling
  
    const closeButton = $('.nav-button').on('click', () => {
        drawer.hide()
        })

  openButton.addEventListener('click', () => drawer.show())

