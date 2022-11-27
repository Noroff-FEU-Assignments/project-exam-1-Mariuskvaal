const Container = document.querySelector(".content");

const url ="https://taktilbehor.com/wp-json/wp/v2/posts?_embed";

const first10Posts = "https://taktilbehor.com/wp-json/wp/v2/posts?_embed";

const loadMorePosts = "https://taktilbehor.com/wp-json/wp/v2/posts?page=2"




async function getBlogs() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    //console.log(json);

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


    
   async function getMoreBlogs() {
   
   const moreRespone = await fetch(loadMorePosts);

   const moreJson = await moreRespone.json();

   loadMoreButton.onclick = () => {

   for (let i = 0; i < moreJson.length; i++) {
      console.log(moreJson[i]);

      Container.innerHTML += `<a class="card" href="details.html?id=${moreJson[i].id}" >
      <h2 class="overskrifblogg">${moreJson[i].title.rendered}</h2>
      <div class="rendered"> ${moreJson[i].content.rendered} </div>
</a> `

;
   }

   loadMoreButton.style.display = "none";
   


}
};

getMoreBlogs();


const loadMoreButton = document.querySelector(".load-more-button");

const buttonWrapper = document.querySelector(".button-wrapper");
