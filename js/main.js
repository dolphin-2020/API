let movie = document.getElementById("movie");
let div = document.getElementById("div");
let search = document.getElementById("search")
let button = document.getElementById("button");
let movies = "";
let http = new XMLHttpRequest;

button.addEventListener("click", function (e) {
  console.log(search.value)
  movies = search.value;

  http.open("GET", `http://www.omdbapi.com/?s=${movies}&apikey=824da0ff`);
  http.send();
  http.onload = function () {
    let info = JSON.parse(this.responseText)["Search"];
    console.log(info)
    info.forEach((n) => {
      movie.insertAdjacentHTML("afterbegin", `<li><img src=${n.Poster}/>${n.Title}</li>`);
    })
  }
})
