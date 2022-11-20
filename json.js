const baseUrl ="https://taktilbehor.com/wp-json/wp/v2/posts";

const blogContainer = document.querySelector(".blogs");

async function getBlogs(url){

    const response = await fetch(url);

    const blogs = await response.json();

    blogs.forEach(function(blog){
        blogContainer.innerHTML += "
        <h2> Hello world </h2>
        "
        
    });



}

getBlogs(baseUrl);