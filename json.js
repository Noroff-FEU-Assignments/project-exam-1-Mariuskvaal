const Container = document.querySelector(".content");

const url ="https://taktilbehor.com/wp-json/wp/v2/posts?_embed";

const loadMoreButton = document.querySelector(".load-more-button");

async function getBlogs() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    for (let i = 0; i < json.length; i++) {
        console.log(json[i]);

        Container.innerHTML += `<a class="card" href="details.html?id=${json[i].id}" >
                                <h2 class="overskrifblogg">${json[i].title.rendered}</h2>
                                <div class="rendered"> ${json[i].content.rendered} </div>
                        

        
        

    </a>` ;
    }                                                                                     
 }

 catch(error) {
    console.log(error)
 }
    };

getBlogs();

