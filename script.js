const users = [
    {
    pic : "https://images.openai.com/static-rsc-4/IUPg431j2CRqLp3KnrvpLUtlIKw1qbHlfrYWfOwoyaj85oIYqEOAy0gFg7BisfDugmCKW5yR77ZT2pUbNoKMq0PdkZ1Zbak0S9D9Byb-JYTg2_iBkYjF9vxBSjTmZvGKlo-K_K-ygVCwDMzRYP-W_lmqeil3t7rhpWJtKYgQfN4vdzjNJX3ADywkyQGd3Hku?purpose=fullsize",
    name : "Aayush",
    bio : "i am a fullStack coder , i love coding and shut the fuck off"
    },
    {
    pic: "https://images.openai.com/static-rsc-4/_lBS99mJ_2CyquT-C9TLHg2uOieXDD0CuDnmTcT5TZpGaxdTFcQM3QRaGm0REkbr8GaAG0EK_ICKDjRxsYoz1vFDpZLkXieTZHic9pwvV4Q3d8u-iib29IBNHejGYvPFmdZAkF1IFokTkwcoctzi698YAlDbs-NIWVo1Z6JSGmqewYbFbxnQQ8PnoHXtsJaj?purpose=fullsize",
    name: "Rahul",
    bio: "Frontend developer who enjoys building responsive websites and learning new technologies."
},

{
    pic: "https://images.openai.com/static-rsc-4/V5_WUqiVNfbIDixNnqokxozoj-WA2T1Z7CXqMa8ykALmZZrO3XfE6bmazZZb4If4TqsfaJhK3M-in0ALSwXlL0YntIcnGNefOE5niNLuqP7jy-QMVnboKioz-VuaWvfT8p9SbejpkK60xy5Wmr0rBwwKBJvvnHFc4GKexPL4puzL9crwozqEevyora7HyZ5q?purpose=fullsize",
    name: "Priya",
    bio: "UI/UX enthusiast passionate about creating clean and user-friendly designs."
},

{
    pic: "https://images.openai.com/static-rsc-4/7mM1-aZ3dgRYY-KQ1PL6sh1PXiiATr7psSaeCTHNLANtxiL6HQ_ICA1N9FHbx8x7DrcRjWN6f7CasFr6pEm7f45r1WkVSiXLRdwSjsx94jJ5eG9OPrBCcciCdekynS07yzQ1SGZLwdHZEI2-x-2Z6ZMD64gzPTZ1ZoADef-oRoF_4f_tkH1F_6qG-p1AgvRq?purpose=fullsize",
    name: "Arjun",
    bio: "Computer science student exploring web development and competitive programming."
},

{
    pic: "https://images.openai.com/static-rsc-4/7mM1-aZ3dgRYY-KQ1PL6sh1PXiiATr7psSaeCTHNLANtxiL6HQ_ICA1N9FHbx8x7DrcRjWN6f7CasFr6pEm7f45r1WkVSiXLRdwSjsx94jJ5eG9OPrBCcciCdekynS07yzQ1SGZLwdHZEI2-x-2Z6ZMD64gzPTZ1ZoADef-oRoF_4f_tkH1F_6qG-p1AgvRq?purpose=fullsize",
    name: "Sneha",
    bio: "Full-stack developer interested in JavaScript, React, and cloud technologies."
},

{
    pic: "https://images.openai.com/static-rsc-4/c_cl_ESkWxbNV_NuLSt6z8ibTx7crvGWlp7p7V9a_THsYVGxFNI0g0zvyFkmmVrproBzfv5thh34qiq4JMHmL8orG80ARh0F-DusYI_AsgWX_T6Oxtq6R-378AGE7lsif4L9ZR3WNeE8_TGbqYLrZafKWsWiUgawUyI5BWkMkUWomYZk_Z4zI-Nzj4resztN?purpose=fullsize",
    name: "Vikram",
    bio: "Backend developer who likes working with databases, APIs, and system design."
},

{
    pic: "https://images.openai.com/static-rsc-4/sA3K3hwq_LzCV07YA8sM4TLn4n6_bF7whgxOqga6xaQ5EMCY3I1kHiqHcEcnU0SlKleLEg19u_ehbwCroOKQfwZCM7ihQQjxqsf80lIdCX9bHXa7Pfsxelsoeg8FWHzVr2TsYK0-niVp-yL1b3fV_oyojZnatrTL-UFelq5r6PGn-UROIwYr9RCtdPFt6AP-?purpose=fullsize",
    name: "Ananya",
    bio: "Tech enthusiast learning machine learning and building side projects for fun."
}


]

function showUser(arr){
    arr.forEach(element => {
          const profileCard = document.createElement("div");
profileCard.className = "profile-card";

profileCard.append(
    Object.assign(document.createElement("img"), {
        className: "profileImage",
        src: element.pic,
        alt: "Profile Image"
    }),
    Object.assign(document.createElement("h2"), {
        className: "profileName",
        textContent: element.name,
    }),
    Object.assign(document.createElement("p"), {
        className: "profileBio",
        textContent: element.bio
    })
);

        container.append(profileCard);
    });
}


function noUser(searchName){
        const profileCard = document.createElement("div");
        profileCard.className = "profile-card";
      profileCard.append(
    Object.assign(document.createElement("img"), {
        className: "profileImage",
        src: "https://media.istockphoto.com/id/1310257744/vector/account-alert-icon.webp?s=2048x2048&w=is&k=20&c=D4TGuxsQ0fFqyBL3LH6wxFJZ5KbgG5JfHl8jzd9RbTg=",
        alt: "Profile Image"
    }),
    Object.assign(document.createElement("h2"), {
        className: "profileName",
        textContent: `No User with Name "${searchName}"`,
    }),
    Object.assign(document.createElement("p"), {
        className: "profileBio",
        textContent: ""
    })
    
);
      container.append(profileCard);
        
}


const searchButton = document.querySelector("#searchBtn") ;
const container = document.querySelector(".profileCard");
const  searchInput = document.querySelector("#searchInput");

showUser(users);

searchInput.addEventListener("input" , () =>{
      const rawSearchText = searchInput.value;
      const searchName = searchInput.value.toLowerCase().trim();
      
      container.innerHTML = "";

      if (searchName === ""){
        showUser(users);
        return;
      }

      const filterUsers =   users.filter(  user =>
        user.name.toLowerCase().includes(searchName)
      )

    if (filterUsers.length > 0) {
      showUser(filterUsers);
    }
    else{
      noUser(rawSearchText);
    }
})
const form = document.querySelector("#formModal")
const addBtn = document.querySelector("#addEmpBtn");
const addName = document.querySelector("#newName");
const addBio = document.querySelector("#newBio");
const addPic = document.querySelector("#newPic");
const saveBtn = document.querySelector("#saveBtn")
const canBtn = document.querySelector("#cancelBtn")

addBtn.addEventListener("click" , () =>{
          form.classList.remove("hidden");
});

saveBtn.addEventListener("click", () =>{
        const picVal = addPic.value;
        const nameVal = addName.value;
        const bioVal = addBio.value;

        const newEmployee = {
          pic : picVal,
          name : nameVal,
          bio : bioVal
        }

        users.push(newEmployee);
        container.innerHTML = "";
        showUser(users);

        form.classList.add("hidden");
        
});

canBtn.addEventListener("click", () =>{
        form.classList.add("hidden");
});




