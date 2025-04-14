(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();class f{constructor(){}async getAllAnimals(){const t="https://api.petfinder.com/v2/animals",n=await this.getAccessToken();return(await(await fetch(t,{headers:{Authorization:`Bearer ${n}`}})).json()).animals}async getAllTypes(){const t="https://api.petfinder.com/v2/types",n=await this.getAccessToken();return(await(await fetch(t,{headers:{Authorization:`Bearer ${n}`}})).json()).types}async getAccessToken(){const t="fvWWGzOFA5xsRFkOjnkf48xjyCpYJG8HNlAF5GXGzoYZg3Qwu7",n="7PzgeWBksMIWUAjEMvG7VxR8lbpK9SOUMXoj5stM",s="https://api.petfinder.com/v2/oauth2/token",e=new URLSearchParams;e.append("grant_type","client_credentials"),e.append("client_id",t),e.append("client_secret",n);try{const r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.toString()});if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return(await r.json()).access_token}catch(r){console.error("Error:",r)}}}let c=!1,i=!1;function p(o,t,n,s="afterbegin",e=!1){const r=n.map(o);e&&(t.innerHTML=""),t.insertAdjacentHTML(s,r.join(""))}function l(o,t,n,s){t.innerHTML="",t.innerHTML=o}async function d(o){return await(await fetch(o)).text()}async function u(){if(!c){const o=await d("/partials/header.html"),t=document.querySelector("#header");t.innerHTML.trim()||l(o,t),c=!0}if(!i){const o=await d("/partials/footer.html"),t=document.querySelector("#footer");t.innerHTML.trim()||l(o,t),i=!0}}export{f as E,u as l,p as r};
