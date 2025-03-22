let main = document.getElementById("main")
let search = document.getElementById("search")
let searchbtn = document.getElementById("searchbtn")
let load = document.getElementById("load")


let dataCard;

searchbtn.addEventListener("click" ,getCard)



async function getCard() {
    load.classList.remove("none")
    main.classList.add("none")
    let response = await fetch(`https://api.github.com/users/${search.value}`);
    
    if (response.ok) {
        dataCard = await response.json();
        console.log(dataCard)
        generateCard()
    }
    else {
        main.classList.remove("none")
        main.innerHTML = `
            <h1>Данные введены неверно!</h1>
        `
    }
    load.classList.add("none")

}
function generateCard() {
    main.classList.remove("none")
    let login = dataCard.login
    let logo = dataCard.avatar_url
    let bio = dataCard.bio
    let location = dataCard.location
    let folow = dataCard.folowers
    let folowing = dataCard.folowing
    let repos = dataCard.public_repos
    main.innerHTML = `
        <img src="${logo}">
        <h1>${login}</h1>
        <p>${bio}</p>
        <div class="icon">        
            <p><i class="fas fa-globe-americas" style="color: #0091ff;"></i>${location}</p>
            <p><i class="far fa-heart" style="color: #ff0000;"></i>${folow}</p>
            <p><i class="fas fa-star" style="color: #FFD43B;"></i>${folowing}</p>
            <p><i class="fas fa-book" style="color: #00b336;"></i>${repos}</p>
        </div>
        <button>Перейти</button>
        `
}