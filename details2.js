const detailcontainer = document.querySelector(".roof-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url ="https://taktilbehor.com/wp-json/wp/v2/posts/" + id;

console.log(url);


async function getDetails() {

    try {

    const response = await fetch(url);

    const details = await response.json();

    console.log(details);

    createHtml(details);
                                                                                
 }

 catch(error) {
    console.log(error);
    detailcontainer.innerHTML = message("error", error);
 }
    };

getDetails();

function createHtml (details){
    detailcontainer.innerHTML = `
                           
                            <h1 class="detail.overskrift"> ${details.title.rendered} </h1>
                            <div id="detail.content"> ${details.content.rendered} </div>
                            <p id="detail.date"> ${details.date} </p>
                                `;
}


