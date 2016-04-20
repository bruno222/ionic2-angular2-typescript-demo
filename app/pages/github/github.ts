import {Page} from 'ionic-angular';  
import {GitHubService} from '../../services/github';

@Page({
    templateUrl: 'build/pages/github/github.html',
    providers: [GitHubService]
})

export class GitHubPage {
    public foundRepos;
    public username;

    constructor(private github: GitHubService) {
    }
    
    getRepos() {
        console.log('caiu aqui');
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
}