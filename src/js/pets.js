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
getAllAnimals();