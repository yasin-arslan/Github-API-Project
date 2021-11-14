class UI{
    constructor(){
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
    }
    clearInput(){
        this.inputField.value = "";
    }
    getAllSearched(user){
            let newLi = document.createElement("li");
            newLi.innerHTML = `<li class="list-group-item">${user}</li>`;
            this.lastUsers.appendChild(newLi);
    }
    clearRepos(){
        while(this.profileDiv.firstChild){
            this.profileDiv.removeChild(this.profileDiv.lastChild);
        }
    }
    clearAll(){ // Sadece aramayı temizler.
        while(this.lastUsers.firstChild){
            this.lastUsers.removeChild(this.lastUsers.lastChild);
        }
    }
    showRepos(response){
        for(var i = 0;i<=5;i++){
            let repo = document.createElement("div");
            repo.innerHTML = `<div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span> 
                <a href="${response.repo[i].html_url}" target = "_blank" id = "repoName">${response.repo[i].name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${response.repo[i].stargazers_count}</span>
                    </button>
                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${response.repo[i].forks}</span>
                    </button>
                </div>
            </div>
            </div>`;
            this.repoDiv.appendChild(repo);
        }
    }
    showUserInfo(user){
        let profileBody = document.createElement("div");
        profileBody.className = "card card-body mb-3";
        profileBody.innerHTML = `
        <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  ${user.followers}  <span class="badge badge-light"></span>
                            </button>
                            <button class="btn btn-info">
                                 ${user.following}  <span class="badge badge-light"></span>
                              </button>
                            <button class="btn btn-danger">
                                ${user.public_repos}  <span class="badge badge-light"></span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
        `;
        this.profileDiv.appendChild(profileBody);
        
    }
}