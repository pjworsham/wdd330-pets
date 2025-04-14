import{r,l as i,E as a}from"./utils-BxgHB656.js";function n(t){return`
        <li class="type-card">
            <p>${t.name}</p>
            <p>${t.coats}</p>
            <p>${t.genders}</p>
            <p>${t.colors}</p>
        </li>
    `}class o{constructor(s,e){this.dataSource=s,this.typesList=e}async init(){const s=await this.dataSource.getAllTypes();this.renderList(s)}renderList(s){r(n,this.typesList,s)}}i();const c=new a,p=document.querySelector(".types-list"),l=new o(c,p);l.init();
