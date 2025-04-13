import ExternalServices from "./ExternalServices.mjs";
import Types from "./types.mjs";
import {  loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();

const typesList = document.querySelector(".types-list");

const types = new Types(dataSource, typesList);

types.init();