import { renderListWithTemplate } from "./utils.mjs";

function petCardTemplate(pet) {
    return`
        <li class="pet-card">
            <p>Pet Breed<br>${pet.breeds.primary}</p>
            <p>Age<br>${pet.age}</p>
            <p>Gender<br>${pet.gender}</p>  
            <p>Size<br>${pet.size}</p> 
            <p>Description<br>${pet.description}</p> 
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
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(petCardTemplate, this.petList, list);
    }
}

