membersSection = document.querySelector('#members');
url = "https://zchexmix.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try {
    
        repsonse = await fetch(url);

        if (Response.ok) {
            data = await response.json();
            console.log(data);
        } else {

            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
    
        console.error('An error occurred:', error.message);
    }

}