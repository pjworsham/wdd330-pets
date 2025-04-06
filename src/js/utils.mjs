let headerLoaded = false; // Variable to know if the header has already been loaded
let footerLoaded = false; // Variable to know if the footer has already been loaded


const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const url = 'https://api.petfinder.com/v2/oauth2/token';

// Set up the search params for the POST request
const searchParams = new URLSearchParams();
searchParams.append('grant_type', 'client_credentials');
searchParams.append('client_id', clientId);
searchParams.append('client_secret', clientSecret);

// return generated access token
export async function getAccessToken() {

    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: searchParams.toString(),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();  // Parse the JSON response
        return data.access_token;  // Return the access token
    } catch (error) {
        console.error('Error:', error);  // Handle any errors
    }
}



export function renderwithTemplate(template, parentElement, data, callback) {

    // Clear the content before inserting a new template
    parentElement.innerHTML = "";
  
   
    parentElement.innerHTML = template;
  
    if (callback) {
      callback(data)
    }
  
  }
  //This asynchronous function fetches the content of the HTML
  export async function loadTemplate(path) {
    const res = await fetch(path);
    //The response is converted to text and returns the HTML content as a string
    const template = await res.text();
    return template;
  }
  
  //Load, Grab out of the DOM and Render the header and footer
  export async function loadHeaderFooter() {
    // console.log("loadHeaderFooter");
    // Load the header only if it has not been loaded before.
    if (!headerLoaded) {
      const headerTemplate = await loadTemplate("../headerFooter/header.html");
      const headerElement = document.querySelector("#header");
  
      if (!headerElement.innerHTML.trim()) {
        renderwithTemplate(headerTemplate, headerElement);
      }
      headerLoaded = true; // We mark that the header has already been loaded.
    }
    // Load the footer only if it has not been loaded before.
    if (!footerLoaded) {
      const footerTemplate = await loadTemplate("../headerFooter/footer.html");
      const footerElement = document.querySelector("#footer");
  
      if (!footerElement.innerHTML.trim()) {
        renderwithTemplate(footerTemplate, footerElement);
      }
      footerLoaded = true; // We mark that the footer has already been loaded.
    }
  }
