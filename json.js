const Container = document.querySelector(".content");

const url ="https://taktilbehor.com/wp-json/wp/v2/posts";

const loadMoreButton = document.querySelector(".load-more-button");

async function getBlogs() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    console.log(json[0].title);


    json.forEach(function(blog) {
        Container.innerHTML += `<div class="card">
                                            <div class="details">
                                                <h4 class="name">${json[i].title}</h4>`;
    });
 }

 catch(error) {
    console.log(error)
 }
    };

getBlogs();