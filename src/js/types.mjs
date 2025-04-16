import { renderListWithTemplate } from "./utils.mjs";

function typeCardTemplate(type) {
    return`
        <li class="type-card">
            <p class= name>${type.name}</p>
            <p class= coats>${type.coats}</p>
            <p class= genders>${type.genders}</p>
            <p class= colors>${type.colors}</p>
        </li>
    `;
}

export default class Types {
    constructor(dataSource, typesList) {
        this.dataSource = dataSource;
        this.typesList = typesList;
    }

    async init() {
        const list = await this.dataSource.getAllTypes()
        this.renderList(list);
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(typeCardTemplate, this.typesList, list);
    }
}