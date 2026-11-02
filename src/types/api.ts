export interface Source {
    id: string;
    name: string;
}

export interface Article {
    title: string;
    url: string;
    publishedAt: string;
    author: string | null;
    description: string | null;
    urlToImage: string | null;
    source: {
        id: string | null;
        name: string;
    };
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export type ApiCallback<T> = (data: T) => void;

export type RequestOptions = Record<string, string>;

export type RequestParams = {
    endpoint: string;
    options?: RequestOptions;
};

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}