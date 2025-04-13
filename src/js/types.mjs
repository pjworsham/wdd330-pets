import { renderListWithTemplate } from "./utils.mjs";

function typeCardTemplate(type) {
    return`
        <li class="type-card">
            <p>${type.name}</p>
            <p>${type.coats}</p>
            <p>${type.genders}</p>
            <p>${type.colors}</p>
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