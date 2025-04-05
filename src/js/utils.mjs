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
