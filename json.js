const Container = document.querySelector(".content");

const url ="https://taktilbehor.com/wp-json/wp/v2/posts";

const loadMoreButton = document.querySelector(".load-more-button");

async function getBlogs() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    for (let i = 0; i < json.length; i++) {
        console.log(json[i]);

        Container.innerHTML += `<a href="details.html?id=${json[i].id}" class="card">
                                <div id="small-wrapper">
                                <h4 class="overskrifblogg">${json[i].slug}</h4>
                                <div class="rendered"> ${json[i]} </div>
                                <div class="rendered"> ${json[i].excerpt.rendered} </div>
                                </div>

        
        

    </a>` ;
    }                                                                                     
 }

 catch(error) {
    console.log(error)
 }
    };

getBlogs();

