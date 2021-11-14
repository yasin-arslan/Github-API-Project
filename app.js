const userName = document.getElementById("githubname");
const form = document.getElementById("github-form");
const clearLastSearched = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const searchBtn = document.getElementById("btn btn-dark");
const clearRepo = document.getElementById("search-clear");

const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    clearRepo.addEventListener("click",clearRepos);
    searchBtn.addEventListener("click",getData);
    clearLastSearched.addEventListener("click",clearAll);
   // document.addEventListener("DOMContentLoaded",getSearchedFromLocal);
}
function clearRepos(e){
    ui.clearRepos();
    e.preventDefault();
}

function getData(e){
    let user = userName.value.trim();
    if(user === ""){
        alert(" Kullanıcı ismi boş olamaz! ");
    }else{
        github.getGitHubData(user)
        .then(response => {
            ui.showUserInfo(response.user);
            ui.showRepos(response);
            ui.getAllSearched(response.user.name);
        })
        .catch(err => console.log(err));
        
    }
    
    ui.clearInput();
    e.preventDefault();
}
function clearAll(){
    ui.clearAll();
}
function getAllSearched(){
    ui.getAllSearched();
}


