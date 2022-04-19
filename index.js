async function search_movies() {
    try {
        let query = document.querySelector("#queries").value;
        const res = await fetch(`https://www.omdbapi.com/?apikey=561016a2&s=${query}`);
        const data = await res.json();
        const movies = await data.Search;
        return movies;
    } catch (err) {
        console.log(err);
    }

}
let sugesation = document.querySelector("#sugesation");

function append(data) {
    sugesation.innerHTML = null
    for (let i = 0; i < data.length; ++i) {
        data.forEach(element => {
            let div=document.createElement("div");
            let movie_name = document.createElement("p");
            movie_name.innerText = element.Title;
            div.append(movie_name);
            div.addEventListener("click",function(){
                showDetails(element);
            })
            sugesation.append(div);
        });
    }

}
async function main() {
    let data = await search_movies();
        if (data != undefined) {
            append(data)
        }
}
let id=0;
function debauncing(func,delay){
    clearTimeout(id);
    id=setTimeout(function(){
        func();
    },delay);
}
function showDetails(element){
    event.preventDefault();
    let show_movie=document.querySelector("#show_movie");
   
    show_movie.innerHTML=null;
    let div1=document.createElement("div")
    let image=document.createElement("img");
    image.src=element.Poster;
    div1.append(image);
    let div2=document.createElement("div");
    let name=document.createElement("h3");
    name.innerText=element.Title;
    let realese_year=document.createElement("p");
    realese_year.innerText=element.Year;
    let type=document.createElement("p");
    type.innerText=element.Type;
    div2.append(name,realese_year,type);
    show_movie.append(div1,div2);
    show_movie.style.display="flex";
}