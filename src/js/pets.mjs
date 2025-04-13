import { renderListWithTemplate } from "./utils.mjs";

function petCardTemplate(pet) {
    return`
        <li class="pet-card">
            <p>${pet.breeds.primary}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>  
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

