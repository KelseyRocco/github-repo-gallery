//GLOBAL VARIABLES

//profile info section
const overview = document.querySelector(".overview");
const username = "KelseyRocco";
//list of repos
const reposList = document.querySelector(".repo-list");

//FUNCTIONS

//Fetch GitHub profile info
const gitHubProfile = async function () {
  const reqProfile = await fetch(`https://api.github.com/users/${username}`);
  const profileData = await reqProfile.json();
  displayUserInfo(profileData);
};

gitHubProfile();

const displayUserInfo = function (data) {
  const div = document.createElement("div");
  div.classList.add("user-info");
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
  listOfRepos();
};

const listOfRepos = async function () {
  const reqRepos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );
  const repoData = await reqRepos.json();
  displayRepos(repoData);
};

const displayRepos = function (repos) {
  for (const repo of repos) {
    const repoItem = document.createElement("li");
    repoItem.classList.add("repo");
    repoItem.innerHTML = `<h3>${repo.name}</h3>`;
    reposList.append(repoItem);
  }
};
