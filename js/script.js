//GLOBAL VARIABLES

//profile info section
const profileInfo = document.querySelector(".overview");
const username = "KelseyRocco";

//FUNCTIONS

//Fetch GitHub profile info
const gitHubProfile = async function () {
  const reqProfile = await fetch(`https://api.github.com/users/${username}`);
  const data = await reqProfile.json();
  console.log(data);
};

gitHubProfile();
