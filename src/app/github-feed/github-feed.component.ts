import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-feed',
  templateUrl: './github-feed.component.html',
  styleUrls: ['./github-feed.component.scss']
})
export class GithubFeedComponent implements OnInit {

  public repos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer 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' });
    this.http.get<any[]>('https://api.github.com/user/repos', { headers }).subscribe(
      (repos) => {
        console.log(repos); // Log the response to the console
        this.repos = repos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
