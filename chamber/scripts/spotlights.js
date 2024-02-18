const spotElement = document.querySelector('#spotlight-mems');
let membersUrl = "https://zchexmix.github.io/wdd230/chamber/data/members.json";


async function getMembers() {
    try {
    
        const response = await fetch(membersUrl);

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            const filteredMembers = data.members.filter((member) => member.membership === 'Gold Membership' || member.membership === 'Silver Membership');
            console.log(filteredMembers);
            const selectedMembers = selectRandomMembers(filteredMembers, 2);
            displaySpotlights(selectedMembers);
            
        } else {

            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
    
        console.error('An error occurred:', error.message);
    }

}
getMembers();

function displaySpotlights(selectedMembers) {
    selectedMembers.forEach (member => {
        console.log(`Name: ${member.name}, Membership Level: ${member.membershipLevel}`);
        const spotlightElement = document.createElement('p');
        const elementA = document.createElement('a');
        elementA.setAttribute('href', member.url);
        elementA.innerHTML = (`${member.name} Website`);
        spotlightElement.innerHTML = (`Name: ${member.name}, Membership Level: ${member.membership}`);
        spotlightElement.style.fontWeight = "Bolder";
        spotElement.appendChild(spotlightElement);
        spotElement.appendChild(elementA);


    });    
    
}




function selectRandomMembers(members, count) {
    const randomMembers = [];
    const totalMembers = members.length;
    if (totalMembers <= count) {
        return members;
    }
    const selectedIndices = {};
    while (randomMembers.length < count) {
        const randomIndex = Math.floor(Math.random() * totalMembers);
        if (!selectedIndices[randomIndex]) {
            randomMembers.push(members[randomIndex]);
            selectedIndices[randomIndex] = true;
        }
    }
    return randomMembers;
}


