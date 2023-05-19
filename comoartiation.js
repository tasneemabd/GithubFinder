const my_token = "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";

const form = document.getElementById("MyForm");
const form1 = document.getElementById("MyForm1");
let n = document.getElementById('person');
let n2 = document.getElementById('person1');
let Comparison = document.getElementById("Comparison");
let loser=document.getElementById("loser")
let winner=document.getElementById("winner")
let user1Data;
let user2Data;
let container= document.getElementById('winner')
let personcontainer= document.getElementById('loser')

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var search = document.getElementById("search").value;
  var name = search.split(" ").join("");

  fetch("https://api.github.com/users/" + name, {
    headers: {
      Authorization: "Bearer " + my_token
    }
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      dataName=data.name ||"Not Found  "
    email=data.email||"Not Found  "
    twitter_username = data.twitter_username ||"Not Found  "
    loca =data.location || "Not Found  "

      n.innerHTML = `
        <img src="${data.avatar_url}" alt="Person 1">
        <h2>${data.login}</h2>
        <ul>
          <li>${dataName}</li>
          <li>Followers: ${data.followers}</li>
          <li>Following: ${data.following}</li>
          <li>Public Repos: ${data.public_repos}</li>
        
      
        </ul>`;
      
      user1Data = data;
    });
});

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  var search1 = document.getElementById("search1").value;
  var name1 = search1.split(" ").join("");

  fetch("https://api.github.com/users/" + name1, {
    headers: {
      Authorization: "Bearer " + my_token
    }
  })

    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      dataName1=data.name ||"Not Found "
      email1=data.email||" "
      twitter_username1 = data.twitter_username ||"Not Found  "
      loca1 =data.location || "Not Found  "
      n2.innerHTML = `
        <img src="${data.avatar_url}" alt="Person 1">
        <h2>${data.login}</h2>
        <ul>
          <li>${dataName1}</li>
          <li>Followers: ${data.followers}</li>
          <li>Following: ${data.following}</li>
          <li>Public Repos: ${data.public_repos}</li>
          
        
        
      
        </ul>`;
      
      user2Data = data;
    });
});

Comparison.addEventListener("click", function (event) {
  event.preventDefault();

  if (user1Data && user2Data) {
    if (user1Data.public_repos > user2Data.public_repos) {
      n.insertAdjacentHTML("afterbegin", "<div class='repo-label' id='winner'>Winner</div>");
      n2.insertAdjacentHTML("afterbegin", "<div class='repo-label' id='loser'>Loser</div>");

      // Add animation class to the winner
      n.classList.add("blink-me");
      container.innerHTML = `
        <img src="${user1Data.avatar_url}" alt="Person 1" class="winner-image">
        <h2>${user1Data.login}</h2>
        <ul>
          <li>${user1Data.name || "Not Found"}</li>
          <li>Followers: ${user1Data.followers}</li>
          <li>Following: ${user1Data.following}</li>
          <li>Public Repos: ${user1Data.public_repos}</li>
        </ul>
      `;

      personcontainer.innerHTML = `
        <img src="${user2Data.avatar_url}" alt="Person 2" class="loser-image">
        <h2>${user2Data.login}</h2>
        <ul>
          <li>${user2Data.name || "Not Found"}</li>
          <li>Followers: ${user2Data.followers}</li>
          <li>Following: ${user2Data.following}</li>
          <li>Public Repos: ${user2Data.public_repos}</li>
        </ul>
      `;
    } else if (user1Data.public_repos < user2Data.public_repos) {
      n.insertAdjacentHTML("afterbegin", "<div class='repo-label' id='winner'>Winner</div>");
      n2.insertAdjacentHTML("afterbegin", "<div class='repo-label' id='loser'>Loser</div>");

      // Add animation class to the winner
      n.classList.add("blink-me");
    } else {
      n.innerHTML += '<span class="repo-label">Has Same Number of Repositories</span>';
      n2.innerHTML += '<span class="repo-label">Has Same Number of Repositories</span>';
    }
  }
}, { once: true });
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
 
});
$(document).ready(function() {
  $('.container1').dialog({
    // Specify the options for the dialog
    modal: true, // Make the dialog modal
    autoOpen: true, // Open the dialog automatically on page load
    width: '50%', // Set the width of the dialog (you can adjust this as needed)
    height: 'auto', // Set the height of the dialog (you can adjust this as needed)
    draggable: false, // Disable dragging the dialog
    resizable: false, // Disable resizing the dialog
    closeOnEscape: false // Disable closing the dialog by pressing the Escape key
  });
});