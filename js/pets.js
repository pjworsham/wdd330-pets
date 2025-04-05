const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmdldXR3pPRkE1eHNSRmtPam5rZjQ4eGp5Q3BZSkc4SE5sQUY1R1hHem9ZWmczUXd1NyIsImp0aSI6ImU4ZmRlMjUzOTM2Y2EyODA3MzJjMTMyNWEyM2FmNzQwMjQ1N2U3YjEzZDE1YzliNjljMGZjMTAzN2Q1MGI3MDE1OGY3MDc0MzZiMDNmMmI2IiwiaWF0IjoxNzQzODgxMzY2LCJuYmYiOjE3NDM4ODEzNjYsImV4cCI6MTc0Mzg4NDk2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.WCy_Q3YteqxOxHI_XKix7_jAgscEQlp2Z-vN_YLcYoZ89ZSnQm4JqVgI30FK-Ft_lm0OyoB-Wxuc9lXwv5W5aiEsf4uR9cF9Vx2MqvsMjywfEAQLj-5vFEXc_z5BJStSpSJRKRfeQPD1ZmhEy3RX_SJNZ0NQ1OSCF0zlNdjmkdGhZqxBV0i612QudfIzxp_S-hWt2jj1MdHT9sOmwYLAWEfYeKmSg3BaFbKgkVq7xMb5UjYFEzfgJ-9s3Qrq8mr92OjXmB2DnlmWeERJUsDCoDDMzveCxCIqvJtVV4H20Jt3-4OAce7aSQTobvsAc1JYvq8CvhUa3gqzFnCqbOLUIw"
const baseURL = "https://api.petfinder.com/v2/animals"

async function getAllAnimals() {
  let response = await fetch(baseURL, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  console.log(data);

}
getAllAnimals();