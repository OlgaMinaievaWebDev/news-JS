export interface Source {
    id: string;
    name: string;
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