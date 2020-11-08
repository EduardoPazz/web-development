import api from "./api.js";

class Request {
    constructor() {
        this.form = document.querySelector('form#repoForm')
        this.userName = document.querySelector("input#userName")
        this.userRepo = document.querySelector("input#userRepo")
        this.submit = document.querySelector("input[type=button]")
        this.message = document.querySelector('p#message')
        this.loadingMessage = 'Making request...';
        this.errorMessage = 'Error, repository not found. Check if the user name or repo name is correct';
        this.repositories = []
    }

    register() {
        this.submit.addEventListener('click', () => {
            const userName = this.userName.value.trim();
            const repoName = this.userRepo.value.trim();

            if (!(userName === '' || repoName === '')) {
                this.message.textContent = this.loadingMessage;
                
                this.addRepository(userName, repoName)
            }
        })
    }

    async addRepository(userName, repoName) {
        try {
            const res = await api.get(`/${userName}/${repoName}`)   
            this.repositories.push(res.data)
            this.render(this.repositories)
        } catch (error) {
            this.message.textContent = this.errorMessage
        }
    }

    render (repos) {
        const repoList = document.querySelector('ul#repoList')
        repoList.innerHTML = '';
        this.message.textContent = '';

        repos.forEach(repo => {
            const avatar = repo.owner['avatar_url']
            const name = repo.name;
            const description = repo.description;
            const HTMLURL = repo['html_url']

            const img = document.createElement('img')
            const strong = document.createElement('strong')
            const paragraph = document.createElement('p')
            const anchor = document.createElement('a')
            const content = document.createElement('div')
            const repoItem = document.createElement('li')

            img.setAttribute('src', avatar)
            strong.innerHTML = name;
            paragraph.innerHTML = description;
            anchor.innerHTML = 'Acessar';
            anchor.setAttribute('href', HTMLURL)
            content.setAttribute('id', 'content')

            content.appendChild(strong)
            content.appendChild(paragraph)
            content.appendChild(anchor)

            repoItem.appendChild(img)
            repoItem.appendChild(content)

            repoList.appendChild(repoItem)
        });
    }
}

new Request().register()