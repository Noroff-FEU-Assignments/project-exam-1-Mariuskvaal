baseUrl="https://taktilbehor.com/wp-json/wp/v2/posts";

async function getBlogs(url){
    const response = await fetch(url);
    const blogs = await response.json();
    blogs.forEach(function(blog){
        blogContainer.innerHTML += <div class="blog"><h2>${blog.name}</h2></div>
        <div class="blog-image" style="background-image:url('${blog.images[0].src}'"></div>
    })
}

getBlogs(baseUrl);