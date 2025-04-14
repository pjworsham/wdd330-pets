import { renderListWithTemplate } from "./utils.mjs";

function petCardTemplate(pet) {
    return`
        <li class="pet-card">
            <p><strong style="font-size: 18px">Pet Breed</strong><br>${pet.breeds.primary}</p>
            <p><strong style="font-size: 18px">Age</strong><br>${pet.age}</p>
            <p><strong style="font-size: 18px">Gender</strong><br>${pet.gender}</p>  
            <p><strong style="font-size: 18px">Size</strong><br>${pet.size}</p> 
            <p><strong style="font-size: 18px">Description</strong><br>${pet.description}</p> 
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

