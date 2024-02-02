const gitUrl = "https://zchexmix.github.io/wdd230/";
const linkUrl = "https://zchexmix.github.io/wdd230/scripts/links.js";

async function getLinks() {
    try {

        const response = await fetch(linkUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {

            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
    
        console.error('An error occurred:', error.message);
    }

    
    
}
getLinks();