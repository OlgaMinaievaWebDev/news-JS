export interface Source {
    id: string;
    name: string;
}

export type ArticleSource = Pick<Source, 'name'> & {
    id: string | null;
};

export interface Article {
    title: string;
    url: string;
    publishedAt: string;
    author: string | null;
    description: string | null;
    urlToImage: string | null;
    source: ArticleSource;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export type ApiCallback<T> = (data: T) => void;

export type RequestOptions = Record<string, string>;

export type RequestParams = {
    endpoint: Endpoint;
} & Partial<{
    options: RequestOptions;
}>;

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}
