let movie = document.getElementById("movie");
let div = document.getElementById("div");
let search = document.getElementById("search")
let button = document.getElementById("button");
let movies = "";
let http = new XMLHttpRequest;

let xhttp=new XMLHttpRequest;

button.addEventListener("click", function (e) {
  if(movie){
    movie.innerHTML="";
  }

  movies = search.value;
  
  http.open("GET", `http://www.omdbapi.com/?s=${movies}&apikey=824da0ff`);
  http.send();
  http.onload = function () {
    let info = JSON.parse(this.responseText)["Search"];
    info.forEach((n) => {
      movie.insertAdjacentHTML("afterbegin", `
      <div>
      <img id=${n.imdbID} src=${n.Poster}/>
      <p><a href="#">Title:${n.Title}</a>, Type:${n.Type}</p>
      </div>`);
    })
  }
})

movie.addEventListener("click",(e)=>{
let newDiv=document.querySelector("#movie div div");
if(newDiv){
  newDiv.outerHTML="";
}
  if(e.target.nodeName==="IMG"){
    let id=e.target.id;
  
    xhttp.open("GET", `http://www.omdbapi.com/?i=${id}&apikey=824da0ff`);
    xhttp.send();
    xhttp.onload=function(){
      let info=JSON.parse(this.responseText);
      console.log(info)
      let show="";
      info.Ratings.forEach(n=>{
     
          show+=`Source:${n["Source"]} Value:${n["Value"]}`;
 
      })
      


      e.target.insertAdjacentHTML("afterend",`
      <div>
        <p>Actors:${info.Actors}</p>
        <p>Plot:${info.Plot}</p>
        <p>Metascore${info.Metascore}</p>
        <p>Ratings:${show}</p>
      </div>
      `)

    }
  
  }
})