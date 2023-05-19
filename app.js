const form = document.getElementById("MyForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("img").innerHTML = " ";
  document.getElementById("section").remove()
  

  var search = document.getElementById("search").value;
  var name = search.split(" ").join("");
  fetch("https://api.github.com/users/" + name)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
     
      document.getElementById("img").innerHTML = ` 
         <img class="img" src="${data.avatar_url}" > 
         <p class="name">${data.login}</p>
         <button class="btn-edit"> Follow </button> 
         <br>
        <p class="span"> <b> ${data.followers} </b> followers <b>${data.following}</b> following</p> <hr class="hr"> </div>`;

      fetch(data.repos_url)
        .then((result1) => result1.json())
        .then((data) => {
          console.log(data.language);
          let repoNames = "";
         
          for (let i = 0; i < 6; i++) {
        
            let repoDiv = document.createElement("div");
            repoDiv.className = "card .a_repo";
            repoDiv.id = "card";

            let repoLink = document.createElement("a");
            let repo = document.createElement("p");
            repo.className='dot'

            repo.textContent = data[i].language;
          
            repoLink.setAttribute("href", "#");
            repoLink.textContent = data[i].name;
        
            repoDiv.appendChild(repoLink);
            repoDiv.appendChild(repo);
            
           
            if (data[i].language === "HTML") {
                let circle = document.createElement("span");
                circle.className = "card1 ";
              

                circle.style.backgroundColor = "#E34C26";
                circle.style.borderRadius = "50%";
                circle.style.width = "10px";
                circle.style.height = "10px";
             
                circle.style.display = "inline-block";
                repoDiv.appendChild(circle);
              } else if (data[i].language === "JavaScript") {
                let circle = document.createElement("span");
                circle.style.backgroundColor = "#F1E05A";
                circle.style.borderRadius = "50%";
                circle.style.width = "10px";
                circle.style.height = "10px";
                circle.style.top="80rem"
                circle.style.display = "inline-block";
                repoDiv.appendChild(circle);
              }
              else if (data[i].language === "PHP") {
                let circle = document.createElement("span");
                circle.style.backgroundColor = "#4F5D95";
                circle.style.borderRadius = "50%";
                circle.style.width = "10px";
                circle.style.height = "10px";
                circle.style.top="20rem"
                circle.style.display = "inline-block";
                repoDiv.appendChild(circle);
               
              }
  
  
            document.getElementById("grid-item").appendChild(repoDiv);
        }
    });
});
}, { once: true });
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
 
});