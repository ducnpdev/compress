export interface Article {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  status: string;
  author: string;
  uuid: string;
  is_top: number;
  position: number;
  user_id: number;
}

export interface GetArticleResponse {
  status_code: string;
  message: number;
  code: string;
  data: Article;
}

export interface GetArticlesResponse {
  status_code: string;
  message: number;
  code: string;
  data: Array<Article>;
}
