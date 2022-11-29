
const detailContainer = document.querySelector(".roof-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://taktilbehor.com/wp-json/wp/v2/posts/" + id;



async function getDetails() {

    try {

    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
                                                                                   
 }

 catch(error) {
    console.log(error)
 }
    };

getDetails();

Container.innerHTML += `<a class="card" href="details.html?id=${json[i].id}" >
                                <h2 class="overskrifblogg">${json[i].title.rendered}</h2>
                                <div class="rendered"> ${json[i].content.rendered} </div>
    </a>` ;

