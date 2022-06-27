//GLOBAL VARIABLES

//profile info section
const overview = document.querySelector(".overview");
const username = "KelseyRocco";
//FUNCTIONS

//Fetch GitHub profile info
const gitHubProfile = async function () {
  const reqProfile = await fetch(`https://api.github.com/users/${username}`);
  const data = await reqProfile.json();
  console.log(data);
  userInfo(data);
};

gitHubProfile();

const userInfo = function (data) {
  const div = document.createElement("div");
  div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
  overview.append(div);
};
