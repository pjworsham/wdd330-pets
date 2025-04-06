import { loadHeaderFooter } from "./utils.mjs";

import { getAccessToken } from "./utils.mjs";


const baseURL = "https://api.petfinder.com/v2/animals"

async function getAllAnimals() {
  const accessToken = await getAccessToken();
  let response = await fetch(baseURL, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  console.log(data);

}

loadHeaderFooter();












// EXAMPLE OF JS CODE FOR POPULATING DATA FROM PRODUCTDETAILS.MJS

// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Images.PrimaryLarge}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="add-to-cart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }

// TEMPLATE RENDERING PRODUCT CARDS FROM PRODUCT LIST MJS

// Template for rendering product cards
// function productCardTemplate(product) {
//   return `
//       <li class="product-card">
//           <a href="product_pages/?product=${product.Id}">
//               <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}" />
//               <h3 class="card__brand">${product.Brand.Name}</h3>
//               <h2 class="card__name">${product.NameWithoutBrand}</h2>
//               <p class="product-card__price">$${product.FinalPrice}</p>
//           </a>
//       </li>
//   `;
// }

// SECTION FROM PRODUCT_LISTING HTML GO WITH RENDING PRODUCT CARDS 

// {/* <section class="products">
// <h2>Top Products: <span class="title highlight"></span></h2>
// <ul class="product-list"></ul>
// </section> */}