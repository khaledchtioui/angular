import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "../../service/Article/article.service";
import { Article } from "../../models/Article";

@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrls: ['./articledetails.component.css']
})
export class ArticledetailsComponent implements OnInit {

  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticleDetails();
  }

  getArticleDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(id).subscribe(
        (article: Article) => {
          this.article = article;
        },
        (error: any) => {
          console.error('Error fetching article details:', error);
          // Gérer l'erreur ici (par exemple, rediriger vers une page d'erreur)
        }
      );
    }
  }

}
