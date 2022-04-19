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
            let movie_name = document.createElement("p");
            movie_name.innerText = element.Title;
            console.log(element.Title);
            sugesation.append(movie_name);
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