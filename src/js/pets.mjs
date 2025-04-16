import { renderListWithTemplate } from "./utils.mjs";

function petCardTemplate(pet) {
    return`
        <li class="pet-card">
            <p><strong style="font-size: 18px">Pet Breed</strong><br>${pet.breeds.primary}</p>
            <p><strong style="font-size: 18px">Age</strong><br>${pet.age}</p>
            <p><strong style="font-size: 18px">Gender</strong><br>${pet.gender}</p>  
            <p><strong style="font-size: 18px">Size</strong><br>${pet.size}</p> 
            <p><strong style="font-size: 18px">Description</strong><br>${pet.description}</p>
            <button class="favorite-button" data-id=${pet.id}>Add to Favorite</button> 
        </li>
    `;
}
export default class Pets {
    constructor(dataSource, petList) {
        this.dataSource = dataSource;
        this.petList = petList;
    }

    async init() {
        const list = await this.dataSource.getAllAnimals()
        this.renderList(list);
        this.favoritePet();
        this.renderfavorites(list);
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(petCardTemplate, this.petList, list);
    }

    // add favorite to local storage
    favoritePet() {
        const favoriteButtons = document.querySelectorAll(".favorite-button")
        favoriteButtons.forEach(button => {
            button.addEventListener("click", function(event) {
                let pets = JSON.parse(localStorage.getItem("pets")) || []
                // console.log(event.target.dataset.id)
                pets.push(event.target.dataset.id);
                localStorage.setItem("pets", JSON.stringify(pets));
            })
        })
    }

    renderfavorites(list) {
        const favoritesSelector = document.querySelector(".favorites")
        const favoritePets = JSON.parse(localStorage.getItem("pets")) || []
        let filteredPets = list.filter(pet => favoritePets.includes(`${pet.id}`))
        filteredPets.forEach(pet => {
            console.log(pet)
            favoritesSelector.innerHTML += `<p>${pet.breeds.primary}</p>`
        })
    }
}



