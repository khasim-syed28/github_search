// Variables 
const container = document.querySelector(".container")
const usernameInput = document.querySelector("#usernameInput")
const  searchBtn = document.querySelector("#searchBtn")
const resultConatainer = document.querySelector("#resultContainer")
function showUsers(user){
        resultContainer.innerHTML = "<h2>Searching...</h2>";
    // 1. Create the main parent wrapper card
    const profileCard = document.createElement("div");
    profileCard.innerHTML = ""
    profileCard.id = "profileCard";
    profileCard.className = "profile-card";


// 2. Create the profile elements
const avatar = document.createElement("img");
avatar.id = "avatar";
avatar.src = user.avatar_url; // You will inject the dynamic URL here later
avatar.alt = "GitHub Avatar";

const nameHeading = document.createElement("h2");
nameHeading.id = "name";
nameHeading.textContent = user.name || user.login;

const bioParagraph = document.createElement("p");
bioParagraph.id = "bio";
bioParagraph.textContent = user.bio || "No Bio Available ";

// 3. Create the stats wrapper container
const statsDiv = document.createElement("div");
statsDiv.className = "stats";

// --- Create Stats Column 1 (Followers) ---
const followersCol = document.createElement("div");

const followersSpan = document.createElement("span");
followersSpan.id = "followers";
followersSpan.textContent = user.followers;

const followersLabel = document.createElement("p");
followersLabel.textContent = "Followers";

followersCol.append(followersSpan, followersLabel);

// --- Create Stats Column 2 (Following) ---
const followingCol = document.createElement("div");

const followingSpan = document.createElement("span");
followingSpan.id = "following";
followingSpan.textContent = user.following;

const followingLabel = document.createElement("p");
followingLabel.textContent = "Following";

followingCol.append(followingSpan, followingLabel);

// --- Create Stats Column 3 (Repos) ---
const reposCol = document.createElement("div");

const reposSpan = document.createElement("span");
reposSpan.id = "repos";
reposSpan.textContent = user.public_repos;

const reposLabel = document.createElement("p");
reposLabel.textContent = "Repos";

reposCol.append(reposSpan, reposLabel);

// 4. Assemble the layout tree from the inside out
statsDiv.append(followersCol, followingCol, reposCol);
profileCard.append(avatar, nameHeading, bioParagraph, statsDiv);

// 5. Finally, append your completed card container to the page
// Example: document.querySelector(".container").append(profileCard);
console.log(user)
resultConatainer.innerHTML = "";
resultConatainer.append(profileCard)
}

// async function for getting data from guthub data 

async function getUser() {
        const response =  await fetch(`https://api.github.com/users/${usernameInput.value}`)

        const data = await response.json();

        if (response.status === 404 ){
            resultConatainer.innerHTML = ""
            const h2 = document.createElement("h2")
            h2.className = "noUser";
            h2.textContent = "No User Found"
            resultConatainer.append(h2)
        }else{
            showUsers(data);
        }

}



//show user in the container 
searchBtn.addEventListener("click" , () =>{
                getUser();
});

// Enter Key Search 
usernameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        getUser();
    }

});









