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

console.log(projects)
///////////// USE JQUERY TO RENDER PROJECTS ON PAGE /////////////

// for (i=0;i < projects.length; i++) {
//     const $div = $(
//         `<div class="cards" style="width: 18rem;">
//         <img src=${projects[i].img} class="card-img-top" alt="project">
//         <div class="card-body">
//         <h5 class="card-title">${projects[i].name}</h5>
//         <p class="card-text">${projects[i].description}</p>
//         <a href=${projects[i].live} class="btn">Check it out</a>
//         </div>
//         </div>`
//     )
// $("#projects").append($div)
// }



// const final = projects.map((project) => {
//     return`
//     <my-card name=${project.name} img=${project.img} description=${project.description} live=${project.live} github=${project.github}></my-card>
//     `
// })
// console.log(final)

// })

// const $cards = $('.cards')

// $cards.html(final.join(""))


///////////// PULL DATA FROM BLOG FROM HEADLESS CMS /////////////
