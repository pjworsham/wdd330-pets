import{r,l as n,E as i}from"./utils-BxgHB656.js";function o(t){return`
        <li class="pet-card">
            <p><strong style="font-size: 18px">Pet Breed</strong><br>${t.breeds.primary}</p>
            <p><strong style="font-size: 18px">Age</strong><br>${t.age}</p>
            <p><strong style="font-size: 18px">Gender</strong><br>${t.gender}</p>  
            <p><strong style="font-size: 18px">Size</strong><br>${t.size}</p> 
            <p><strong style="font-size: 18px">Description</strong><br>${t.description}</p> 
        </li>
    `}class a{constructor(e,s){this.dataSource=e,this.petList=s}async init(){const e=await this.dataSource.getAllAnimals();this.renderList(e)}renderList(e){r(o,this.petList,e)}}n();const p=new i,l=document.querySelector(".pet-list"),c=new a(p,l);c.init();
