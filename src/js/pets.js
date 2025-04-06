import ExternalServices from "./ExternalServices.mjs";
import Pets from "./pets.mjs";
import {  loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();

const petList = document.querySelector(".pet-list");

const pets = new Pets(dataSource, petList);

pets.init();